$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    navigation: true,  // 섹션네비게이션
    navigationPosition: 'right', // 섹션네비게이션 의 위치 설정 right / left   
    
    navigationTooltips: [
      'Sony',
      'Camera',
      'Audio',
      'Playstation®'
    ],// 섹션 네비게이션 에 손을 올렸을때 나오는 텍스트 
      
    onLeave: function (origin, destination, direction) {
      //구역 2를 떠난 후
      if (destination.index == 0 ) {
        $('.section-1').addClass('active');
        $('.section-1').removeClass('active');
      } else if (destination.index == 1) {
        $('.section-2').addClass('active');
        $('.section-2').removeClass('active');
      } else if (destination.index == 2) {
        $('.section-3').addClass('active');
        $('.section-3').removeClass('active');
      } else if (destination.index == 3) {
        $('.section-4').addClass('active');
        $('.section-4').removeClass('active');
      }
    }
  });
});


// 매장 찾기
$(document).ready(function(){
    $('.sch').click(function(){
        $('.sch-box').slideToggle('fast');
        $('.mob-box').removeClass('active');
    });
    $('.menu').click(function(){
        $('.sch-box').slideUp('fast');
    });
});


// 모바일 메뉴
$(document).ready(function(){
    $('.top-bar .menu').click(function(){
        $('.mob-box').addClass('active');
    });
    $('.mob-box > a').click(function(){
        $('.mob-box').removeClass('active');
        $('.sub + ul').stop().slideUp(200);
        $('.sub-2 > ul').stop().slideUp(200);
    });
    
    $('.sub').click(function(){
        $('.sub + ul').stop().slideToggle('fast', function(){
           if($('.sub').slideDown()){
            $('.sub-2 > ul').slideUp();
            $('.sub-2').find('img').removeClass('active');
            } else {
                return;
            } 
        });
        
        $('.mob-box > .mob-menu > ul > li > a > img').toggleClass('active');
    });
    
    $('.sub-2 > a').click(function(){
        $(this).siblings('ul').stop().slideToggle('fast', function(){
            if($(this).siblings('ul').slideDown()){
                $('.sub-2 > ul').not(this).slideUp('fast');
            } else {
                return;
            }
        });
        $(this).find('img').toggleClass('active');
    });
});

// footer 반응형
$(document).ready(function(){
    
    $('.ft-2 .sub1 > a').click(function () {
        $(this).toggleClass('active');
        $('.ft-2 .sub1 > a').not(this).removeClass('active');
        $(this).siblings('ul').stop().slideToggle('fast');
        $('.ft-2 .sub1 > a').not(this).siblings('ul').stop().slideUp('fast');
    });
    
});