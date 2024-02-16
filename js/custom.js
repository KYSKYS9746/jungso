$(function () {
    var swiper = new Swiper(".main_visual_slide", {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

    });

    AOS.init();

    const MAIN_FUNDS_SLIDE = new Swiper('.main_Funds_slide', {
        loop: true,
        slidesPerView: 2.5,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
        }
    });


    const MAIN_FS_LEFT_BUTTON = document.querySelector('.main_Funds .main_Funds_arrows .left');
    MAIN_FS_LEFT_BUTTON.addEventListener('click', () => {
        MAIN_FUNDS_SLIDE.slidePrev();
    });

    const MAIN_FS_RIGHT_BUTTON = document.querySelector('.main_Funds .main_Funds_arrows .right');
    MAIN_FS_RIGHT_BUTTON.addEventListener('click', () => {
        MAIN_FUNDS_SLIDE.slideNext();
    });


    $('.main_Policy .content_tab .tab_menu li a').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).parent().index();
        $('.main_Policy .content_tab .tab_menu li a').removeClass('on')
        $('.main_Policy .content_tab .tab_menu li a').eq(idx).addClass('on')

        console.log(idx); // 0 , 1 , 2
        $('.tab_content li').removeClass('on');
        $('.tab_content li').eq(idx).addClass('on');

    });

});

