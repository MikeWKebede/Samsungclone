let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
.outer{
  width:500px;
  height:500px;
  overflow: hidden;
  position: relative;
  margin: 50px auto ;

}

.inner {
 width:1500px;
 height: 500px;
 position: absolute;
 left: 0;
 Animation: imgSwapper 9s steps(3,end) infinite, opacityChanger 9s infinite; 
}
@keyframes imgSwapper{
  to{left:-1500px;}
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  var dropdown = document.getElementsByClassName("dropdown-content");
  var i:
  for (i=0; i< dropdowns.length; i++) {
    var openDropdown = dropdown[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}