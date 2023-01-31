/////////헤더 드롭다운
$(document).ready(function () {
    $('.nav_main li, .nav_bar').mouseenter(function () {
        $('.nav_bar').addClass('nav_bar_active')

        if (!$(this).hasClass("nav_bar_active")) {
            $('.nav_bar_inner').stop().fadeOut(100)

            $('.nav_bar_inner').eq($(this).index()).stop().fadeIn(100)
        }
    });
    $('.nav_main li, .nav_bar').mouseleave(function () {
        $('.nav_bar').removeClass('nav_bar_active')
    });


    //////////footer 접기/펼치기//////////////

    $('.footer_btn_1').click(function () {
        if ($('.footer_inner_li_1').is(":visible")){
            $('.footer_inner_li_1').slideUp();
        } else {
            $('.footer_inner_li_1').slideDown();
        }
    });

    $('.footer_btn_2').click(function () {
        if ($('.footer_inner_li_2').is(":visible")){
            $('.footer_inner_li_2').slideUp();
        } else {
            $('.footer_inner_li_2').slideDown();
        }
    });

    $('.footer_btn_3').click(function () {
        if ($('.footer_inner_li_3').is(":visible")){
            $('.footer_inner_li_3').slideUp();
        } else {
            $('.footer_inner_li_3').slideDown();
        }
    });

    $('.footer_btn_4').click(function () {
        if ($('.footer_inner_li_4').is(":visible")){
            $('.footer_inner_li_4').slideUp();
        } else {
            $('.footer_inner_li_4').slideDown();
        }
    });

    $('.footer_btn_5').click(function () {
        if ($('.footer_inner_li_5').is(":visible")){
            $('.footer_inner_li_5').slideUp();
        } else {
            $('.footer_inner_li_5').slideDown();
        }
    });

    /***************메뉴 사이드바**************** */
    $('.m_header_icon3_a').on('click', function () {
        $('.side_main_bg').show();
        $('.sidebar_menu').show().animate({
            right: 0
        });
    });
    $('.close_btn').on('click', function () {
        $('.side_main_bg').hide();
        $('.sidebar_menu').animate({
            right: '-' + 50 + '%'
        }, function () {
            $('.sidebar_menu').hide();
        });
    });

/***************메뉴 사이드바 접기**************** */
    $('.side_menu_title1').click(function () {
        if ($('.side_menu_item1').is(":visible")){
            $('.side_menu_item1').slideUp();
        } else {
            $('.side_menu_item1').slideDown();
        }
    });
    $('.side_menu_title2').click(function () {
        if ($('.side_menu_item2').is(":visible")){
            $('.side_menu_item2').slideUp();
        } else {
            $('.side_menu_item2').slideDown();
        }
    });
    $('.side_menu_title3').click(function () {
        if ($('.side_menu_item3').is(":visible")){
            $('.side_menu_item3').slideUp();
        } else {
            $('.side_menu_item3').slideDown();
        }
    });
    $('.side_menu_title4').click(function () {
        if ($('.side_menu_item4').is(":visible")){
            $('.side_menu_item4').slideUp();
        } else {
            $('.side_menu_item4').slideDown();
        }
    });
    $('.side_menu_title5').click(function () {
        if ($('.side_menu_item5').is(":visible")){
            $('.side_menu_item5').slideUp();
        } else {
            $('.side_menu_item5').slideDown();
        }
    });
    $('.side_menu_title6').click(function () {
        if ($('.side_menu_item6').is(":visible")){
            $('.side_menu_item6').slideUp();
        } else {
            $('.side_menu_item6').slideDown();
        }
    });
    $('.side_menu_title7').click(function () {
        if ($('.side_menu_item7').is(":visible")){
            $('.side_menu_item7').slideUp();
        } else {
            $('.side_menu_item7').slideDown();
        }
    });

});