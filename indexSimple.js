var search = document.querySelector('#search');
document.documentElement.style.setProperty('--height', window.innerHeight);

scrollfunc();
window.addEventListener('scroll', scrollfunc);
window.addEventListener('load', loaded);

$.getJSON("https://cors.bridged.cc/https://api.scratch.mit.edu/proxy/featured", function(data) {
    w3.displayObject("curator", data);
        });

search.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        window.location.href = '/search/projects.html?q=' + search.value;
    }
});

function scrollfunc() {
    if (window.pageYOffset || window.scrollTop == '1') {
        document.querySelector('nav').style.boxShadow = '0 0 20px rgba(0,0,0,0.11)'
    } else {
        document.querySelector('nav').style.boxShadow = 'none'
    }
}

function loaded() {
    var loader = document.querySelector('.loader');
    window.setTimeout(function(){
        loader.classList.add('done');
        document.body.style.overflowY = 'auto';}
        
    , 500);
}

console.log(window.location.pathname.split("/").filter(a => a.length > 0).length);
