module.exports = function($) {
    const src = $('img').attr('src');
    return { 
        image: src,
    };
}