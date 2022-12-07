$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 300) {
      $('#logo_nav').fadeIn();
    } else {
      $('#logo_nav').fadeOut();
    }
  });