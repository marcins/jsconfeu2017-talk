module.exports = function($) {
    const body = $('p').html();
    return { 
        body,
        theme: 'dark'
    };
}