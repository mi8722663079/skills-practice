const root = document.querySelector(":root");
const content = document.querySelector(".content");
const panels = document.querySelectorAll(".element");
const panel1 = document.querySelector(".e1");
const panel2 = document.querySelector(".e2");
const panel3 = document.querySelector(".e3");
const rs = getComputedStyle(root);

function slide1() {
  panel1.style["left"] = "29%";
  panel1.style["animation"] = "0.3s ease-in slide1";
}
