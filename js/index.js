$(function(){
   
    $('.content19_contents_open').click(function(){
        $(this).toggleClass('active');
        $(this).next('.content19_contents_p').slideToggle();
    });
    //ホバーで動く
    $('.content19_contents_open').hover(function(){
        $(this).toggleClass('active');
        $(this).next('content2_contents_p').slideToggle();
    }); 

    var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });

});