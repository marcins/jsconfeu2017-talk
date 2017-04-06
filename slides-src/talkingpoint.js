module.exports = function($) {
    const html = $.html();
    
    const endUl = html.indexOf('</ul>');    
    const body = html.substr(endUl + 5);
    const menu = $('ul > li').map(function () {
        const $this = $(this);        
        return {
            title: $this.html(),
            active: $this.find('strong').length > 0
        }
    }).get();
    return { 
        body,
        menu,
        theme: 'dark'
    };
}