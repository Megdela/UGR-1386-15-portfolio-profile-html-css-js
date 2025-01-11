var slider_img = document.querySelector(".slider-img");
var images = ["src/images/Mekdelawit2.JPG", "src/images/Mekdelawit1.jpg"];
var i = 0;

function prev() {
  i--; 
  if (i < 0) {
    i = images.length - 1; 
  }
  setImg(); 
}

function next() {
  i++; 
  if (i >= images.length) {
    i = 0; 
  }
  setImg(); 
}

function setImg() {
  slider_img.setAttribute("src", images[i]); 
}
