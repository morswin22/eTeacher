function title(value) {
    document.title = config.pageName + ((value) ? ' - '+value : '');
}

function pathChange(url) {
    window.history.replaceState('','','/'+url);
}

function hrefChange(url) {
    document.location.href = url;
}

function isLogged() {
    return false;
}

title();

if (!isLogged() && document.location.pathname != config.loginPath) {
    hrefChange(document.location.origin + config.loginPath);
}