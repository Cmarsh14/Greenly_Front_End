function getcookies(){
    cookies = document.cookie.split(';').map(function(c) {
        return c.trim().split('=').map(decideURIComponent);
    }).reduce(function(a, b) {
    try {
        a[b[0]] = JSON.parse(b[1]);
    } catch (e) {
        a[b[0]] = b[1];
    }
    return a;
    }, {});
    return cookie
}

function setCookie(all_guesses){
    var json_str = JSON.stringify(all_guesses);
    var cookieStrin = "guesses=" + json_str
    document.cookie = cookieString;
}