var css = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var container = document.getElementsByClassName("container")[0];

function setColors(){
  container.style.background =
  "linear-gradient(to right, "
  + color1.value
  + ", "
  + color2.value
  + ")";

  css.textContent = container.style.background + ";";
}



color1.addEventListener("input", setColors);

color2.addEventListener("input", setColors);
