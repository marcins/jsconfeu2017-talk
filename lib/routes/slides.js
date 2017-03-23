const express = require('express');
const slideGenerator = require('../slide-generator');

const router = express.Router();

const slides = slideGenerator.parse('./slides-src/slides.md');

router.get('/:slide', (req, res) => {
    const slideIndex = parseInt(req.params.slide);
    if (isNaN(slideIndex)) {
        return res.sendStatus(404);
    }

    res.send(slideGenerator.render(slides, slideIndex, {
        assetPath: '/',
        linker: (slideIndex) => `/slides/${slideIndex}`
    }));
})

module.exports = router;