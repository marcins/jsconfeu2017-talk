const cheerio = require('cheerio');
const fs = require('fs');
const Handlebars = require('handlebars');
const _ = require('lodash');
const marked = require('marked');
const path = require('path');

const templatePath = './slides-src/templates';

const templates = fs.readdirSync(templatePath).reduce((acc, file) => {
    if (file.endsWith('.hbs')) {
        const templateSource = fs.readFileSync(`${templatePath}/${file}`, 'utf-8');
        acc[path.basename(file, '.hbs')] = Handlebars.compile(templateSource);
    }
    return acc;
}, {});

const themes = JSON.parse(fs.readFileSync('./slides-src/themes.json', 'utf-8'));

Handlebars.registerHelper('toUpperCase', str => str.toUpperCase());
Handlebars.registerHelper('spacer', (w, h) => `<img src=/images/spacer.gif width=${_.isNumber(w) ? w : 1} height=${_.isNumber(h) ? h : 1} />`);
// console.log('Loaded templates\n', Object.keys(templates).join('\n'));

function extractSlideData($, data) {
    if (!data.hasOwnProperty('template') || !data.template) {
        return {};
    }

    try {
        const maybeExtractor = require.resolve(`../slides-src/${data.template}.js`);
        const extractor = require(maybeExtractor);
        return extractor($, data);
    } catch (ex) {
        if (ex.hasOwnProperty('code') && ex.code === 'MODULE_NOT_FOUND' && ex.message.indexOf(data.template) !== -1) {
            return {};
        }
        throw ex;
    }
}

const RE_DATA = /^(\w+):\s+(.*?)$/;

function parse(sourceFilename) {
    const slideMarkdown = fs.readFileSync(sourceFilename, 'utf-8');
    const slides = slideMarkdown.split('---')
        .map((md, index) => {
            const splitContent = md
                .trim()
                .split('\n');

            const data = splitContent
                .reduce((acc, v) => {
                    const match = v.match(RE_DATA);
                    if (match) {
                        acc[match[1]] = match[2].trim();
                    }
                    return acc;
                }, {});

            if (data.hide) {
                return null;
            }

            const mdContent = splitContent.filter(line => !RE_DATA.test(line)).join('\n');

            const content = marked(mdContent);
            const $ = cheerio.load(content);
            data.title = $('h1').text();
            data.subtitle = $('h2').text();
            return Object.assign({},
                data,
                extractSlideData($, data)
            );
        }).reduce((acc, slide) => {
            if (!slide) {
                return acc;
            }

            slide.index = acc.length + 1;
            acc.push(slide);
            return acc;
        }, []);

    const countByTitle = slides.reduce((acc, slide) => {
        if (_.has(acc, slide.title)) {
            acc[slide.title] = acc[slide.title] + 1;
        } else {
            acc[slide.title] = 1;
        }
        return acc;
    }, {});

    slides.forEach((slide) => {
        slide.isUnique = countByTitle[slide.title] === 1;
    });

    return slides;
}

const defaultRenderOpts = {
    assetPath: '',
    linker: x => '' + x,
    withNavigation: true,
};

function renderIndex(slides, passedOpts) {
    const opts = Object.assign(
        {},
        defaultRenderOpts,
        passedOpts
    );

    const linkedSlides = slides.map(slide => {
        return Object.assign({},
            slide,
            { link: opts.linker(slide.index) }
        );
    });

    const bodyOpts = Object.assign(
        {},
        {
            slides: linkedSlides,
            theme: themes[themes.default],
        },
        opts
    );

    const bodyContent = templates['body-index'](bodyOpts);
    const layoutOpts = Object.assign({}, bodyOpts, { bodyContent });
    const output = templates['layout-page'](layoutOpts);
    return output;
}

function render(slides, slideIndex, bodyTemplate, passedOpts) {
    const opts = Object.assign(
        {},
        defaultRenderOpts,
        passedOpts
    );
    const slide = slides[slideIndex - 1];
    const templateName = opts.template || slide.template;
    const theme = themes[slide.theme || themes.default];
    const slideOpts = Object.assign({}, slide, { assetPath: opts.assetPath, theme });
    const slideTemplateName = `slide-${templateName}`;
    if (!templates.hasOwnProperty(slideTemplateName)) {
        throw new Error(`Template ${slideTemplateName} not found`);
    }
    const slideContent = templates[slideTemplateName](slideOpts)
        .replace(/&apos;/g, "'");
    let nextSlideHint;
    if (slideIndex < slides.length) {
        nextSlideHint = _.get(slides[slideIndex], 'hint');
    }
    const ctx = {
        assetPath: opts.assetPath,
        presentationTitle: `What's new in Netscape Navigator 2.0?`,
        slideNum: slideIndex,
        slideTotal: slides.length,
        slideContent,
        prevSlide: slideIndex > 1 ? opts.linker(slideIndex - 1) : null,
        nextSlide: slideIndex < slides.length ? opts.linker(slideIndex + 1) : null,
        nextSlideHint,
        slideTitleUrl: opts.linker(slideIndex, 'title'),
        slideContentUrl: opts.linker(slideIndex, 'content'),
        slideNavigationUrl: opts.linker(slideIndex, 'navigation'),
        withNavigation: opts.withNavigation,
        template: templateName,
        fragment: opts.fragment,
        slide,
        theme,
    };
    const bodyContent = templates['body-' + bodyTemplate](ctx);

    const layoutContext = Object.assign({}, ctx, {
        bodyContent
    });
    const layoutTemplate = bodyTemplate === 'content' ?
        `layout-${opts.layout || slide.layout || 'page'}`
        : 'layout-page';
    const output = templates[layoutTemplate](layoutContext);
    return output.replace(/&#xA0;/g, '&nbsp;');
}

module.exports = {
    parse,
    render,
    renderIndex,
};