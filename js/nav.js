$(document).ready(function(){
  $('.sidenav').sidenav();
});
    
$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  autoplay: true
});

autoplay();
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}