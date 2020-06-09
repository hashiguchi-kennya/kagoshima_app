'use strict';

var body = document.getElementsByTagName('body')[0];

function fadeOut() {
    body.classList.add('bodyfadeout');
}

function linkUrl() {
    location.href = 'index.html';
}
var bt1 = document.getElementById('start');
bt1.addEventListener('click', function() {
    fadeOut();
    setTimeout(linkUrl, 1500);
});