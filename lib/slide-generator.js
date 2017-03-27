const cheerio = require('cheerio');
const fs = require('fs');
const Handlebars = require('handlebars');
const marked = require('marked');

const Layouts = ['default', 'frame'];

const layouts = Layouts.reduce((acc, layoutName) => {
    const layoutSource = fs.readFileSync(`./slides-src/templates/layout-${layoutName}.hbs`, 'utf-8');
    acc[layoutName] = Handlebars.compile(layoutSource);
    return acc;
}, {});

function extractSlideData($, data) {    
    if (!data.hasOwnProperty('template') || !data.template) {
        return {};
    }

    try {
        const maybeExtractor = require.resolve(`../slides-src/${data.template}.js`);
        const extractor = require(maybeExtractor);
        return extractor($);
    } catch (ex) {
        if (ex.hasOwnProperty('code') && ex.code === 'MODULE_NOT_FOUND') {
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
};

function render(slides, slideIndex, passedOpts) {
    const opts = Object.assign(
        {}, 
        defaultRenderOpts,
        passedOpts
    );
    const slide = slides[slideIndex - 1];
    const templateSource = fs.readFileSync(`./slides-src/templates/${slide.template}.hbs`, 'utf-8');
    const template = Handlebars.compile(templateSource);
    const ctx = {
        assetPath: opts.assetPath,
        presentationTitle: `What's new in Netscape Navigator 2.0?`,
        slideNum: slideIndex,
        slideTotal: slides.length,
        slideContent: template(Object.assign({}, slide, { assetPath: opts.assetPath })),
        prevSlide: slideIndex > 1 ? opts.linker(slideIndex - 1) : null,
        nextSlide: slideIndex < slides.length ? opts.linker(slideIndex + 1) : null
    };
    return layouts[slide.layout || 'default'](ctx);
}

module.exports = {
    parse,
    render
};