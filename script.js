let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.querySelector("#randomButton");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
  
    css.textContent = body.style.background + ";";
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 256);
}

function setRandomRGB() {
    let red1 = generateRandomNumber();
    let green1 = generateRandomNumber();
    let blue1 = generateRandomNumber();
    let red2 = generateRandomNumber();
    let green2 = generateRandomNumber();
    let blue2 = generateRandomNumber();
    body.style.background = 
    "linear-gradient(to right, " 
    + "rgb(" 
    + red1
    + ", "
    + green1
    + ", " 
    + blue1
    + "), rgb("
    + red2
    + ", "
    + green2
    + ", " 
    + blue2
    + ")";
  css.textContent = body.style.background + ";";
  color1.value = "#" + convertRGBtoHex(red1, green1, blue1);
  color2.value = "#" + convertRGBtoHex(red2, green2, blue2);
}

function rgbToHex(rgb) { 
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

function convertRGBtoHex(r,g,b) {   
  let red = rgbToHex(r);
  let green = rgbToHex(g);
  let blue = rgbToHex(b);
  return red+green+blue;
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomRGB);