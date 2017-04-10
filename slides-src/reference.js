module.exports = function($) {
    const body = $('blockquote').html();
    const byLine = $('blockquote').next().html();
    
    return { 
        body,
        byLine,
        quot: "&ldquo;",
    };
}