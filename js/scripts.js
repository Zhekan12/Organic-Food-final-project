const loupe = document.querySelector('.search-click');
loupe.addEventListener('click' ,function(event){
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.remove('active-click');
    loupe.classList.add('active-click');
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    nav:true,
    navText: [ '', ' ' ],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})