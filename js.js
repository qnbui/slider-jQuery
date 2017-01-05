var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("contenu");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";

}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var slides = document.getElementsByClassName("contenu");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > slides.length) {myIndex = 1}
    slides[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000);
}

function stop() {
{
clearTimeout(carousel);
clearInterval(carousel);
}


		}
