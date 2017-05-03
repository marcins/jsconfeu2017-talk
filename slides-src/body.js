const _ = require('lodash');
const Entities = require('html-entities').Html4Entities;
const highlight = require('../lib/highlight');

const entities = new Entities();

module.exports = function($, data) {

    if (_.get(data, 'highlightCode', false)) {
        const highlightedCode = $('code')
            .replaceWith(function () {
                const rawCode = $(this).text();
                // '<table bgcolor=000000 cellpadding=0 cellspacing=0><tr><td class=diagram><pre>' +
                // + '</pre></td></tr></table>'
                return highlight(rawCode, 'javascript', _.get(data, 'highlightTheme'), _.get(data, 'highlightFontSize')).replace(/&apos;/g, "'") ;
            });
    }

    const body = $.html()
        .replace(/<h1.*?<\/h1>/gi, '')
        .replace(/&apos;/g, "'");
    return {
        body
    };
}