// a[href=#] 클릭 시 위로 못 올라가게 하기
$(window).click(function(e){
    e.preventDefault();
});

// 탑바 부드럽게 내려오기
$('.top-bar > .menu-bar > ul').mouseover(function(){
    $('.top-bar > .menu-bar > ul > li > ul').stop().slideDown(200),
    $('.top-bar > .menu-bar-sub').stop().slideDown(200);
});
$('.top-bar > .menu-bar > ul').mouseout(function(){
    $('.top-bar > .menu-bar > ul > li > ul').stop().slideUp(200),
    $('.top-bar > .menu-bar-sub').stop().slideUp(200);
});

// 모바일 탑바
$(document).ready(function(){
    $('.mob-top-bar .navbar').click(function(){
        $('.mob-top-bar .navbar').css('display', 'none');
        $('.mob-top-bar .close').css('display', 'block');
        $('.mob-top-bar > nav').stop().slideDown(200);
    });
    $('.mob-top-bar .close').click(function(){
        $('.mob-top-bar .close').css('display', 'none');
        $('.mob-top-bar .navbar').css('display', 'block');
        $('.mob-top-bar > nav').stop().slideUp(200);
    });
    // 메뉴 '열기/닫기' 버튼
    $('.mob-top-bar > nav > ul > li > a').click(function(){
        $(this).toggleClass('minus');
        $('.mob-top-bar > nav > ul > li > a').not(this).removeClass('minus');
    });
    // 서브메뉴
    $('.mob-top-bar > nav > ul > li > a').click(function(){
        $(this).siblings('ul').stop().slideToggle(200),
        $('.mob-top-bar > nav > ul > li > a').not(this).siblings('ul').hide();
    });
});

// 일정 스크롤 내렸을 때 탑바 고정
$(window).scroll(function(){ 
    var height = $(document).scrollTop();
    if(height > 0){ 
      $('.top-bar').addClass('active'); 
    }else if(height == 0){ 
      $('.top-bar').removeClass('active'); 
    } 
  });

// 메인 배너 슬라이드
$(document).ready(function(){
    $('.wrap .slide-content').slick({
        autoplay: true,
        dots: true,
        arrows: false,
    });
});

// footer 패밀리 사이트 바로가기
$('.footer-wrap .family-site > a').click(function(){
    $('.footer-wrap .family-site > ul').stop().slideToggle(200);
});

// 스크롤 Top 버튼
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 500 ) {
		$( '.top' ).fadeIn();
	} else {
		$( '.top' ).fadeOut();
	}
} );
$( '.top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );