var $burger     = $(".burger");
var $menu       = $(".menu");
var $link       = $(".nav-link");
var $name       = $(".name");
var $counter    = $(".counter");
var $percent    = $(".percent");
var $mail       = $(".mail");

$(document).ready(function() {

    setTimeout(function(){
        $name.toggleClass("fadeOut");
        $counter.toggleClass("fadeOut");
        $percent.toggleClass("fadeOut");
        $mail.toggleClass("fadeInUp");
    }, 1700);

    setTimeout(function(){
        $('#header').show();
        $('#main').show();
        $('#footer').show();
        $('#loader').hide();
    }, 2700);

});

$burger.click(function() {
    $menu.toggleClass("menu-open");
    $link.toggleClass("fadeInLeft")
});


$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 1500,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }

    });
  });


// Parallax
var image = document.getElementsByClassName('ione');
new simpleParallax(image, {
    scale: 1.3
});

var image = document.getElementsByClassName('itwo');
new simpleParallax(image, {
    scale: 1.3,
    orientation: "left"
});

var image = document.getElementsByClassName('ithree');
new simpleParallax(image, {
    scale: 1.3
});