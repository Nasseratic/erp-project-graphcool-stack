$(window).ready(function () {
    var mySwiper = new Swiper('.swiper-container.swiper-slider-1', {
        spaceBetween: 100,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop:true,
        onSlideChangeEnd:function(swipe){
            console.log(swipe.realIndex)
        }
    });



    var mySwiper2 = new Swiper('.swiper-container.swiper-slider-2', {
        spaceBetween: 100,
        slidesPerView: 1.3,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true,
        breakpoints: {
            992:{
                slidesPerView: 1,
            }
        }
    });
    var mySwiper3 = new Swiper('.swiper-container.swiper-slider-3', {
        spaceBetween: 100,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

    });

    var events = new Swiper('.swiper-container.events-slider',{
       spaceBetween: 100,
       slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    });

    $('.limit').each(function () {
        var text = $(this).text();
        var len = text.length;

        console.log(len);
        console.log(text);
        console.log(text.substring(0, 300));
        $(this).text(text.substring(0, 300) + '....');
    });
    $('.headerSearch').click(function () {
        $('.hideSearch').css('display', 'none');
        $('.searchForm').css('display', 'inline')
    });
    
    $('.searchRes .description').each(function () {
        var searchDesc = $(this).text();
        $(this).text(searchDesc.substring(0, 460) + '...');
    });

    mySwiper3.on('slideChange', function () {
        if(((mySwiper3.activeIndex)+1).toString().length == 1){
            var current = '0'+((mySwiper3.activeIndex)+1);
        }
        else{
            var current =((mySwiper3.activeIndex)+1);
        }
        $('.current').text(current)
    });
    $('.totalSlides').text(' / ' +mySwiper3.slides.length);
});