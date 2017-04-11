const Entities = require('html-entities').Html4Entities;

const entities = new Entities();

module.exports = function($) {
    const body = $.html()
        .replace(/<h1.*?<\/h1>/gi, '')
        .replace(/&apos;/g, "'");
    return { 
        body
    };
}