///////////////메인배너 애니메이션//////////////
$(document).ready(function () {
    var time = 400;
    $('.mainbanner_logo').animate({
        opacity: '1'
    }, time, function () {
        $('.drink_1').animate({
            opacity: '1'
        }, time, function () {
            $('.drink_2').animate({
                opacity: '1'
            }, time, function () {
                $('.drink_3').animate({
                    opacity: '1'
                }, time, function () {
                    $('.mainbanner_btn').animate({
                        opacity: '1'
                    }, time);
                });
            });
        });
    });

    //////////프로모션 접기/펼치기//////////////

    $('.notice_down').click(function () {
        if ($('.notice_promo').is(":visible")){
            $('.notice_promo').slideUp();
        } else {
            $('.notice_promo').slideDown();
        }
    });

////////////////////프로모션 버튼 변경////////////////////
    let num = 0;
	$(".notice_btn").click(function () {
		if(num == 0) {
			$(this).attr("src", "./img/main/up_btn.png");
			num = 1;
		}else {
			$(this).attr("src", "./img/main/down_btn.png");
			num = 0;
		}
	});

/////////////////////스크롤 이벤트/////////////////////////////////

//////////////////////원두 이미지////////////////////////////
    $(window).scroll(function () {
        $('.main_bean_img img').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-left': '0px' }, 1500);
            }
        });

        $('.main_bean_txt').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-right': '0px' }, 1500);
            }
        });

        ///////////////////////favorite/////////////////////////////////
        $('.favorite_txt1').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-left': '0px' }, 1500);
            }
        });

        $('.favorite_txt2').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-left': '0px' }, 1800);
            }
        });

        $('.favorite_btn').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-left': '0px' }, 1000);
            }
        });

        ////////////////reserve///////////////////////
        $('.reserve_img').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 1000);
            }
        });

        ////////////////store///////////////////////

        $('.main_store_img1').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 1000);
            }
        });
        $('.main_store_img2').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 1000);
            }
        });
        $('.main_store_txt1').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-right': '0px' }, 1000);
            }
        });
        $('.main_store_txt2').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-right': '0px' }, 1200);
            }
        });
        $('.main_store_btn').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1', 'margin-right': '0px' }, 1400);
            }
        });

    });
});

///////////////////////swiper////////////////////////
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


$('.swiper-slide').hover(function () {
    swiper.autoplay.stop();
}, function () {
    swiper.autoplay.start();
});

