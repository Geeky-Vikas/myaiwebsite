let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn   = document.querySelector('#login-btn');
let loginFrom = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu      = document.querySelector('#menu-bar');
let navbar    = document.querySelector('.navbar');
let videoBtn  = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    // loginFrom.classList.remove('active');

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    // if you want to remove searchBar when you scrollY

}


searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});

formBtn.addEventListener('click', () =>{
    loginFrom.classList.toggle('active');

});

formClose.addEventListener('click', () =>{
    loginFrom.classList.remove('active');

});

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });

});



// ======================> ScrollReveal <==========================//

ScrollReveal({
    reset:true,
    distance: '100px',
    duration: 2000,
    Delay:200
}); 
ScrollReveal().reveal('.main-heading, .heading', {origin:'top'});
ScrollReveal().reveal('.para', {origin:'bottom'});

ScrollReveal().reveal('.video-section .heading', {origin:'top'});
ScrollReveal().reveal('.video-section .box-container', {origin:'bottom'});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },
    // freeMode: true,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    breakpoints:{
        131:{
            slidesPerView:1,
        },
        211:{
            slidesPerView:1,
        },
        381:{
            slidesPerView:2,
        },
        
        799:{
            slidesPerView:3,
        },
        1024:{
            slidesPerView:3,
        },
    },
});