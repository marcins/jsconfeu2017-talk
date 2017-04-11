const cheerio = require('cheerio');
const css = require('css');
const fs = require('fs');
const hljs = require('highlight.js');

const _ = require('lodash');

module.exports = function highlight(code, language) {
    const highlighted = language ? 
        hljs.highlight(language, code) : 
        hljs.highlightAuto(code);
        
    const html = highlighted.value;
    const $ = cheerio.load(html);

    const highlightCss = fs.readFileSync(
        require.resolve('highlight.js/styles/sunburst.css'),
        'utf-8'
    );

    const highlightStyles = css.parse(highlightCss);

    function resolveClass(className) {
        return _.chain(highlightStyles.stylesheet.rules)
            .filter(rule => rule.type === 'rule' && rule.selectors.some(selector => selector === '.' + className))
            .flatMap(rule => rule.declarations)
            .filter(declaration => declaration.property === 'color')
            .map(declaration => declaration.value)
            .value();
    }

    $('span[class]').each((index, elem) => {
        const $elem = $(elem);
        const className = $elem.attr('class');
        const colors = resolveClass(className);
        if (colors.length) {
            const font = `<font color='${colors.slice(-1)[0]}'></font>`;
            $elem.wrap(font);    
        }        
        
        $elem.removeAttr('class');
    });
    return $.html();
}