module.exports = function($) {
    const frameUrl = $('a')
        .attr('href');
    return { frameUrl };
}