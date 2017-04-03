const Entities = require('html-entities').Html4Entities;

const entities = new Entities();

module.exports = function($) {
    const body = $(':not(h1)').html();
    return { 
        body
    };
}