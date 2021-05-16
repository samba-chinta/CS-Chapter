"use strict";

let menu_open = document.getElementById("menu-open");
let menu_close = document.getElementById("menu-close");
let bg_img = document.getElementById("bg-wallpaper");
let bg_video = document.getElementById("bg-video");
let cs_video = document.getElementById("cs-video");

// Arrays for the image gallery holding different images.
let imgArrOne = ['Assets/pic-1.jpg', 'Assets/pic-2.png'];
let imgArrTwo = ['Assets/pic-3.jpg', 'Assets/pic-4.jpg'];
let imgArrThree = ['Assets/pic-5.jpg', 'Assets/pic-6.jpg'];


// Variables and function set for animation in gallery.
let countOne = 0,
    countTwo = 0,
    countThree = 0;
let func1 = setInterval(animeOne, 3000);
let func2 = setInterval(animeTwo, 2000);
let func3 = setInterval(animeThree, 4000);

// this event is used to switch the animated-gallery
// and courosel link to gallery link in navigation when
// the size of screen is changed accordingly.
window.onload = () => {
    const width = window.innerWidth;
    let gallary_link = document.getElementById('gallery-link');
    if(width > 780)
        gallary_link.href = "#img-gallery-pc";
    else
        gallary_link.href = "#img-gallery-mobile";
}

// menu_closing function
menu_close.addEventListener('click', function()
{
    menu_open.style.display = "block";
    menu_close.style.display = "none";
});

// menu_opening function
menu_open.addEventListener('click', function()
{
    menu_open.style.display = "none";
    menu_close.style.display = "block";
});

// onmouseover event to embed the youtube link to iframe
bg_img.onmouseover = () => {
    bg_img.style.zIndex = "-1";
    bg_video.style.zIndex = "1";
    cs_video.src = 
    "https://www.youtube.com/embed/lPAAlbd27rs?controls=0";
}

// onmouseout event to remove embeded link from iframe
bg_video.onmouseout = () => {
    bg_img.style.zIndex = "1";
    bg_video.style.zIndex = "-1";
    cs_video.src = null;
}

//these 3 functions are for image animations
function animeOne() {
    document.getElementById('img-1').src = imgArrOne[countOne];
    countOne += 1;
    if (countOne >= imgArrOne.length)
        countOne = 0;
}

function animeTwo() {
    document.getElementById('img-2').src = imgArrTwo[countTwo];
    countTwo += 1;
    if (countTwo >= imgArrTwo.length)
        countTwo = 0;
}

function animeThree() {
    document.getElementById('img-3').src = imgArrThree[countThree];
    countThree += 1;
    if (countThree >= imgArrThree.length)
        countThree = 0;
}

// This is for creating scroll spy using onscroll event
window.onscroll = () => {
    let scroll_pos = window.pageYOffset;
    let bar = document.getElementById("spyBar");
    const OFFSET = window.innerHeight / window.innerWidth;

    bar.style.width = (OFFSET*scroll_pos).toString() + "px";
}