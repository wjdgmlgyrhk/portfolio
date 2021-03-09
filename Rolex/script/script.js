// a[href=#] 클릭 시 위로 못 올라가게 하기
$(window).click(function (e) {
    e.preventDefault();
});

// 일정 스크롤 내렸을 때 탑바 변경
$(window).scroll(function () {
    var height = $(document).scrollTop();
    if (height > 0) {
        $('.TopBar_wrap').addClass('active');
        $('.mob-TopBar').addClass('active');
    } else if (height == 0) {
        $('.TopBar_wrap').removeClass('active');
        $('.mob-TopBar').removeClass('active');
    }
});

// 모바일 탑바
$(document).ready(function () {
    $('.mob-TopBar > .top-bar > .menu').click(function () {
        $('.mob-menu-box').addClass('active');
        $('body').css('overflow', 'hidden');
        $('.mob-TopBar > .search').stop().slideUp(500);
    });
    $('.mob-menu-box .close').click(function () {
        $('.mob-menu-box').removeClass('active');
        $('body').css('overflow', 'auto');
        $('.mob-menu-box .lng ul').stop().slideUp(500);
    });
    $('.mob-menu-box .lng > li > a').click(function () {
        $('.mob-menu-box .lng ul').stop().slideToggle(500);
    });
    $('.mob-TopBar > .top-bar > .search').click(function () {
        $('.mob-TopBar > .search').stop().slideToggle(500);
        $('.mob-menu-box').removeClass('active');
    });
});

// 롤렉스 컬렉션 슬라이드
$(document).ready(function () {
    $('.Collect_wrap > .C-slide').slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});

// 롤렉스 모델 슬라이드
$(document).ready(function () {
    $('.Model_wrap > .w-mdl').slick({
        dots: true,
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 8,
        infinite: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }
        ]
    });
});


/* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
    $(window).resize(ActiveOnVisible__initOffset);
    ActiveOnVisible__initOffset();

    $(window).scroll(ActiveOnVisible__checkAndActive);
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
    $('.active-on-visible').each(function (index, node) {
        var $node = $(node);

        var offsetTop = $node.offset().top;
        $node.attr('data-active-on-visible-offsetTop', offsetTop);

        if (!$node.attr('data-active-on-visible-diff-y')) {
            $node.attr('data-active-on-visible-diff-y', '0');
        }

        if (!$node.attr('data-active-on-visible-delay')) {
            $node.attr('data-active-on-visible-delay', '0');
        }
    });

    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() {
    $('.active-on-visible:not(.actived)').each(function (index, node) {
        var $node = $(node);

        var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
        var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
        var delay = parseInt($node.attr('data-active-on-visible-delay'));

        var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');

        if ($(window).scrollTop() + $(window).height() + diffY > offsetTop) {
            $node.addClass('actived');

            setTimeout(function () {
                $node.addClass('active');
                if (window[callbackFuncName]) {
                    window[callbackFuncName]($node);
                }
            }, delay);
        }
    });
}

$(function () {
    ActiveOnVisible__init();
})
/* 발견되면 활성화시키는 라이브러리 끝 */

// 스크롤 Top 버튼
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});
$('.top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
    return false;
});

// Footer 열기/닫기
$(document).ready(function () {
    
    $('.F_wrap.mo > div .f-menu').click(function () {
        $(this).find('a').toggleClass('active');
        $('.F_wrap.mo > div .f-menu').not(this).find('a').removeClass('active');
        $(this).siblings('ul').stop().slideToggle(500);
        $('.F_wrap.mo > div .f-menu').not(this).siblings('ul').stop().slideUp(500);
    });


});
