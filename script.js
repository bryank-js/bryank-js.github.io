$(document).ready(function() { // Landing tetris animation
		$(".loading-screen").delay(2400).fadeOut(250);
		$("#pieceO").fadeIn(250);
		$("#pieceJ1").delay(250).fadeIn(250);
		$("#pieceL1").delay(500).fadeIn(250);
		$("#pieceZ").delay(750).fadeIn(250);
		$("#pieceL2").delay(1000).fadeIn(250);
		$("#pieceJ2").delay(1250).fadeIn(250);
		$("#pieceI").delay(1500).fadeIn(250);
		$(".pieces").delay(2000).fadeOut(250);
});

$(function () { // Navbar background color change transition DOWN
  $(document).scroll(function () {
    var $nav = $(".nav-container");
    $nav.toggleClass('scrolledDown', $(this).scrollTop() >= $(".hud").height() - 60);
  });
});
$(document).ready(function(){ // Navbar item click-to-scroll

    $('.container-right ul li a').click(function(evt) {
      evt.preventDefault();
      $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 60
      }, 1000);
    });

});
AOS.init({
 duration: 1200
});