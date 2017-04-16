module.exports = function($) {
    const byLine = $('ul > li')
        .map((idx, elem) => $(elem).text())
        .get()
        .join('&nbsp;&nbsp;|&nbsp;&nbsp;');

    const slideContent = $('#content').html();

    return {
        byLine,
        slideContent,
        theme: 'blue',
    };
}