const cheerio = require('cheerio');
const fs = require('fs');
const Handlebars = require('handlebars');
const marked = require('marked');

const layoutSource = fs.readFileSync('./slides-src/templates/layout.hbs', 'utf-8');
const layout = Handlebars.compile(layoutSource);

function extractSlideData(template, $) {
    try {
        const extractor = require(`./slides-src/${template}.js`);
        return extractor($);
    } catch (ex) {
        return {};
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
                extractSlideData($)
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
        slideContent: template(slide),
        prevSlide: slideIndex > 1 ? opts.linker(slideIndex - 1) : null,
        nextSlide: slideIndex < slides.length ? opts.linker(slideIndex + 1) : null
    };

    return layout(ctx);
}

module.exports = {
    parse,
    render
};