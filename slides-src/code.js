const highlight = require('../lib/highlight');
const Entities = require('html-entities').Html4Entities;

const entities = new Entities();

module.exports = function($) {
    const className = $('code').attr('class');
    const lang = className.substr(5); // 'lang-??'
    const rawCode = entities.decode($('code').html());
    const code = highlight(lang, rawCode).replace(/&apos;/g, "'");
    return { 
        code,
        theme: 'dark'
    };
}