function setupGA(id) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', id);
}

function dntEnabed() {
    var dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
    return dnt == "1" || dnt == "yes";
}

if (!dntEnabed()) {
    document.write(' \
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WBSJXR3L0K"> \
</script> \
<script> \
    setupGA("G-WBSJXR3L0K"); \
</script>')
}
