$('.p-news__columns__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 600,
    // autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 959,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 599,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },
    ]
});