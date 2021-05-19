"use strict";

let menu_open = document.getElementById("menu-open");
let menu_close = document.getElementById("menu-close");
let bg_img = document.getElementById("bg-wallpaper");
let bg_video = document.getElementById("bg-video");
let cs_video = document.getElementById("cs-video");

let imgArrOne = ['Assets/pic-1.jpg', 'Assets/pic-2.png'];
let imgArrTwo = ['Assets/pic-3.jpg', 'Assets/pic-4.jpg'];
let imgArrThree = ['Assets/pic-5.jpg', 'Assets/pic-6.jpg'];

let countOne = 0,
    countTwo = 0,
    countThree = 0;
let func1 = setInterval(animeOne, 3000);
let func2 = setInterval(animeTwo, 2000);
let func3 = setInterval(animeThree, 4000);

menu_close.addEventListener('click', function()
{
    menu_open.style.display = "block";
    menu_close.style.display = "none";
});

menu_open.addEventListener('click', function()
{
    menu_open.style.display = "none";
    menu_close.style.display = "block";

});

bg_img.onmouseover = () => {
    bg_img.style.zIndex = "-1";
    bg_video.style.zIndex = "1";
    cs_video.src = 
    "https://www.youtube.com/embed/lPAAlbd27rs?controls=0";
}

bg_video.onmouseout = () => {
    bg_img.style.zIndex = "1";
    bg_video.style.zIndex = "-1";
    cs_video.src = null;
}

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

window.onscroll = () => 
{
    let bar = document.getElementById("nav-bar");
    let arr = document.getElementsByClassName('nav-link');
    let drop_arr = document.getElementsByClassName('dropdown-menu');
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
    {
        bar.style.backgroundColor = "white";
        for(var i=0; i<arr.length; i++)
        {
            arr[i].style.color = "black";
        }
        for(var i=0; i<drop_arr.length; i++)
        {
            drop_arr[i].style.backgroundColor = "white";
            let links = drop_arr[i].getElementsByTagName('a');
            for(var j=0; j<links.length; j++)
            {
                links[j].style.color = "black";
            }
        }
        document.getElementById('menu-open').style.color = "black";
        document.getElementById('menu-close').style.color = "black";
    }
    else
    {
        if(window.innerWidth < 768)
        {
            document.getElementById('menu-open').style.color = "white";
            document.getElementById('menu-close').style.color = "white";
            bar.style.backgroundColor = "transparent";
            document.getElementById('navigation').style.backgroundColor = "white";
            
        }
        else
        {
            bar.style.backgroundColor = "transparent";
            for(var i=0; i<arr.length; i++)
            {
                arr[i].style.color = "white";
            }
            for(var i=0; i<drop_arr.length; i++)
            {
                drop_arr[i].style.backgroundColor = "transparent";
                let links = drop_arr[i].getElementsByTagName('a');
                for(var j=0; j<links.length; j++)
                {
                    links[j].style.color = "white";
                }
            }
        }
    }
}