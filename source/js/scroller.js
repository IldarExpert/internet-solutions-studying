$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 150) {
      $('.scroller').fadeIn();
    } else {
      $('.scroller').fadeOut();
    }
  });
  $('.scroller').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
});
