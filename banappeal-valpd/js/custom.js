$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        100:{
            items:1,
            nav:true,
            dots: false
        },
        
        500:{
            items:1,
            nav:false
        },
        900:{
            items:2,
            nav:false
        },
        1200:{
            items:3,
            nav:true,
            loop:false
        }
    }
})