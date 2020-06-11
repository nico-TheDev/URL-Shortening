const nav = document.querySelector('.mobile-nav'),
      menuBtn = document.querySelector('.menu'),
      line1 = document.querySelector('.line1'),
      line2 = document.querySelector('.line2'),
      line3 = document.querySelector('.line3');

function showNav(){
    nav.classList.toggle('openNav');
    line1.classList.toggle('moveLine1');
    line2.classList.toggle('moveLine2');
    line3.classList.toggle('moveLine3');
}

function hideNav(){
    if(nav.className.includes('openNav')){
        nav.classList.remove('openNav');
        line1.classList.remove('moveLine1');
        line2.classList.remove('moveLine2');
        line3.classList.remove('moveLine3');
    }
}

menuBtn.addEventListener('click',showNav);

window.onscroll = function (){
    if(window.pageYOffset > 100){
        this.hideNav();
    }
}