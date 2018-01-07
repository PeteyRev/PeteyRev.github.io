'use strict'

import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll('a[href*="#"]');

const $header = document.getElementById("Header");
let $scrollPosition = window.scrollY;
window.onscroll = function() {
    $scrollPosition = window.scrollY;
    if ($scrollPosition === 0){
        $header.classList.remove("header-scroll");
    } else {
        $header.classList.add("header-scroll");
    }
};



u('form').ajax(function(err, res){
  document.getElementById("modal_1").checked = true;
});

u('.slider-btn').on('click', function(){
    u('.slider-btn').removeClass('active');
    u(this).addClass('active');
});
