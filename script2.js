$(".blog_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed:1000,
    items : 3,
    loop: true,
    nav:false,
    margin: 30,
    dots: true,
    responsive:{
        320:{
            items:1
        },
        767:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    
});