module.exports = function($) {
    const byLine = $('ul > li')
        .map((idx, elem) => $(elem).text())
        .get()
        .join('&nbsp;&nbsp;|&nbsp;&nbsp;');

    return { byLine };
}