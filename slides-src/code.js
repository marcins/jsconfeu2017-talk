const highlight = require('../lib/highlight');
const Entities = require('html-entities').Html4Entities;

const entities = new Entities();

module.exports = function($, data) {
    const className = $('code').attr('class');
    const lang = className ? className.substr(5) : null; // lang-??
    const rawCode = entities.decode($('code').html());
    const code = lang === 'text' ?
        rawCode :
        highlight(rawCode, lang, null, data.fontSize || '+6').replace(/&apos;/g, "'");
    return {
        code,
        theme: 'dark',
        fontSize: data.fontSize || '+6',
    };
}