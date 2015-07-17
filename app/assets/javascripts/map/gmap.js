var huggles = huggles || {}

function loadScript() {
    $(huggles.after_google).each(function(i, f) {
        f()
            })
}

window.onload = loadScript;