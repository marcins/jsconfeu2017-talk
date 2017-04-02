const cheerio = require('cheerio');
const fs = require('fs');
const Handlebars = require('handlebars');
const marked = require('marked');

const Layouts = ['default', 'frame', 'content', 'navigation'];

const layouts = Layouts.reduce((acc, layoutName) => {
    const layoutSource = fs.readFileSync(`./slides-src/templates/layout-${layoutName}.hbs`, 'utf-8');
    acc[layoutName] = Handlebars.compile(layoutSource);
    return acc;
}, {});


Handlebars.registerHelper('toUpperCase', str => str.toUpperCase());

function extractSlideData($, data) {    
    if (!data.hasOwnProperty('template') || !data.template) {
        return {};
    }

    try {
        const maybeExtractor = require.resolve(`../slides-src/${data.template}.js`);
        const extractor = require(maybeExtractor);
        return extractor($);
    } catch (ex) {
        if (ex.hasOwnProperty('code') && ex.code === 'MODULE_NOT_FOUND' && ex.message.indexOf(data.template) !== -1) {
            return {};
        }
        throw ex;
    }
}

function parse(sourceFilename) {
    const slideMarkdown = fs.readFileSync(sourceFilename, 'utf-8');    
    const slides = slideMarkdown.split('---')
        .map(md => {
            const hashPos = md.indexOf('#');
            const data = md.substr(0, hashPos)
                .trim()
                .split('\n')
                .reduce((acc, v) => {
                    const colon = v.indexOf(':');
                    acc[v.substr(0, colon)] = v.substr(colon + 1).trim();
                    return acc;
                }, {});
            
            const content = marked(md.substr(hashPos).trim());
            const $ = cheerio.load(content);            
            data.title = $('h1').text();
            return Object.assign({},
                data,
                extractSlideData($, data)
            );
        });
    return slides;
}

const defaultRenderOpts = {
    assetPath: '',
    linker: x => '' + x,
    withNavigation: true,
};

function renderFragment(slides, slideIndex, fragment, passedOpts) {
    const opts = Object.assign(
        {},
        passedOpts,
        {
            layout: fragment,
            withNavigation: fragment === 'navigation',
            fragment: true,
        });
    return render(slides, slideIndex, opts);
}

function render(slides, slideIndex, passedOpts) {
    const opts = Object.assign(
        {}, 
        defaultRenderOpts,
        passedOpts
    );
    const slide = slides[slideIndex - 1];
    const templateName = opts.template || slide.template;
    const templateSource = fs.readFileSync(`./slides-src/templates/${templateName}.hbs`, 'utf-8');
    const template = Handlebars.compile(templateSource);
    const ctx = {
        assetPath: opts.assetPath,
        presentationTitle: `What's new in Netscape Navigator 2.0?`,
        slideNum: slideIndex,
        slideTotal: slides.length,
        slideContent: template(Object.assign({}, slide, { assetPath: opts.assetPath })),
        prevSlide: slideIndex > 1 ? opts.linker(slideIndex - 1) : null,
        nextSlide: slideIndex < slides.length ? opts.linker(slideIndex + 1) : null,
        slideTitleUrl: opts.linker(slideIndex, 'title'),
        slideContentUrl: opts.linker(slideIndex, 'content'),
        slideNavigationUrl: opts.linker(slideIndex, 'navigation'),
        withNavigation: opts.withNavigation,
        template: templateName,
        fragment: opts.fragment,
        slide,
    };
    console.log(ctx);
    return layouts[opts.layout || slide.layout || 'default'](ctx);
}

module.exports = {
    parse,
    render,
    renderFragment,
};