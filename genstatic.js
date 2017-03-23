const fs = require('fs');
const slideGenerator = require('./lib/slide-generator');

const slides = slideGenerator.parse('./slides-src/slides.md');

slides
    .map((slide, index) => slideGenerator.render(slides, index + 1, {
        assetPath: '/',
        linker: (slideIndex) => `slide-${slideIndex}.html`
    }))
    .forEach((slide, index) => {
        fs.writeFileSync(`./public/slide-${index + 1}.html`, slide, { encoding: 'utf-8' });
    });