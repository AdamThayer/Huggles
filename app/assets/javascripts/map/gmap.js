var huggles = huggles || {}

function loadScript() {
    //var script = document.createElement('script');
    //script.type = 'text/javascript';
    //script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
    //    '&signed_in=false&callback=initialize';
    //document.body.appendChild(script);
    //$.getScript('https://maps.googleapis.com/maps/api/js?v=3.exp')
    //    .done(function() {
            $(huggles.after_google).each(function(i, f) {
                f()
            })
        //})
}

window.onload = loadScript;