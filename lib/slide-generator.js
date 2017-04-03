const cheerio = require('cheerio');
const fs = require('fs');
const Handlebars = require('handlebars');
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

Handlebars.registerHelper('toUpperCase', str => str.toUpperCase());

console.log('Loaded templates', Object.keys(templates));

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

function render(slides, slideIndex, bodyTemplate, passedOpts) {
    const opts = Object.assign(
        {}, 
        defaultRenderOpts,
        passedOpts
    );
    const slide = slides[slideIndex - 1];
    const templateName = opts.template || slide.template;

    const slideOpts = Object.assign({}, slide, { assetPath: opts.assetPath });

    const slideContent = templates['slide-' + templateName](slideOpts);
    const ctx = {
        assetPath: opts.assetPath,
        presentationTitle: `What's new in Netscape Navigator 2.0?`,
        slideNum: slideIndex,
        slideTotal: slides.length,
        slideContent,
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
    const bodyContent = templates['body-' + bodyTemplate](ctx);
    
    const layoutContext = Object.assign({}, ctx, {
        bodyContent
    });    
    const layoutTemplate = bodyTemplate === 'content' ?
        `layout-${opts.layout || slide.layout || 'page'}`
        : 'layout-page';
    const output = templates[layoutTemplate](layoutContext);
    return output;
}

module.exports = {
    parse,
    render,
};