const express = require('express');
const slideGenerator = require('../slide-generator');

const router = express.Router();

const slides = slideGenerator.parse('./slides-src/slides.md');

router.get('/:slide', (req, res) => {
    const slideIndex = parseInt(req.params.slide);    
    res.send(slideGenerator.render(slides, slideIndex, {
        linker: (slideIndex) => `/slides/${slideIndex}`
    }));
})

module.exports = router;