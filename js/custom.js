$(function (){
    var swiper = new Swiper(".main_visual_slide", {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
        
      });

      AOS.init();

      $(function () {
        $('.main_Funds .itm').on('mouseenter', function () {
            //$('.main_Funds .itm').removeClass('on');
            $(this).addClass('on')
        });
        $('.main_Funds .itm').on('mouseleave', function () {
            //$('.main_Funds .itm').removeClass('on');
            $(this).removeClass('on');
        });
    })

});

