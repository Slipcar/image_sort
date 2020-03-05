var slideIndex = 0;
var slides = document.getElementsByClassName("Slides");
girar = true;

//Função que mostra as imagens
function showSlides() {
  var i;
  var x = document.getElementsByClassName("Slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  if (girar) {
    setTimeout(showSlides, 50); // Muda a imagem a cada 50 milisegundos
  }
  girar = true;
}

//Função que sorteia as imagens
function randomSort(images) {
  girar = false;
  var i = Math.floor(Math.random() * images);
  slides[i].style.display = "block";
  console.log("Sorteado: " + i);
}
