const express = require('express');
const slideGenerator = require('../slide-generator');

const router = express.Router();

const slides = slideGenerator.parse('./slides-src/slides.md');

const renderOpts = {
    assetPath: '/',
    linker: (slideIndex, fragment) => {
        const fragmentUrl = fragment ? `/${fragment}` : '';
        return `/slides/${slideIndex}${fragmentUrl}`;
    }
};

router.get('/', (req, res) => {
    res.redirect(req.baseUrl + '/1');
})

router.get('/:slide/:fragment', (req, res) => {
    const slideIndex = parseInt(req.params.slide);
    const fragment = req.params.fragment;
    if (isNaN(slideIndex)) {
        return res.sendStatus(404);
    }

    res.send(slideGenerator.render(slides, slideIndex, fragment, renderOpts));
});

router.get('/index', (req, res) => {
    res.send(slideGenerator.renderIndex(slides));
});

router.get('/:slide', (req, res) => {
    let slideIndex = parseInt(req.params.slide);

    if (isNaN(slideIndex)) {
        slideIndex = slides.findIndex(slide => slide.alias &&
            slide.alias === req.params.slide);
        if (slideIndex !== -1) {
            slideIndex++;
        }
    }

    if (!slideIndex || slideIndex > slides.length) {
        return res.sendStatus(404);
    }

    res.send(slideGenerator.render(
        slides, slideIndex, 'content',
        Object.assign({}, renderOpts, { layout: 'frameset' })
    ));
});

module.exports = router;