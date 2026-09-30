let p1 = document.getElementById("1");
let p2 = document.getElementById("2");
let p3 = document.getElementById("3");

function changeImage1() {
  image1.src = "images/2.png";
}

function changeImage2() {
  image2.src = "images/3.png";
}

function changeImage3() {
  image3.src = "images/1.png";
}

image1.addEventListener("click", changep1);
image2.addEventListener("click", changep2);
image3.addEventListener("click", changep3);
