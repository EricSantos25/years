$(function () {
  const controller = new ScrollMagic.Controller();

  // const paineis = document.querySelectorAll("section.painel");

  // for (let index = 0; index < paineis.length; index++) {
  //   new ScrollMagic.Scene({
  //     triggerElement: paineis[index],
  //     triggerHook: 'onLeave',
  //   })
  //   .setPin(paineis[index], { pushFollowers: true })
  //   .addTo(controller);
  // }

  const revealElements = document.getElementsByClassName('figure')
  for (let index = 0; index < revealElements.length; index++) {
    new ScrollMagic.Scene({
      triggerElement: revealElements[index],
      offset: 50,
      triggerHook: 0.5,
    })
    .setClassToggle(revealElements[index], "visible")
    .addTo(controller)
  }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("demo");
  let captionDate = document.getElementById("caption-date");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.height = "70%";
  slides[slideIndex-1].style.width = "90%";
  dots[slideIndex-1].className += " active";
  captionDate.innerHTML = dots[slideIndex-1].alt;
  captionText.innerHTML = dots[slideIndex-1].title;
}