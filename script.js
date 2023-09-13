const root = document.querySelector(":root");
const content = document.querySelector(".content");
const panels = document.querySelectorAll(".element");
const panel1 = document.querySelector(".e1");
const panel2 = document.querySelector(".e2");
const panel3 = document.querySelector(".e3");
const rs = getComputedStyle(root);
const p1 = getComputedStyle(panel1);

const transfromation = [{ transfrom: "scale(1)" }, { transfrom: "scale(1.5)" }];

panel1.addEventListener("click", () => {
  panel1.animate(
    [
      {
        transform: "translateX(0px)",
      },
      {
        transform: "translateX(222px)",
      },
    ],
    {
      duration: 800,
    }
  );
  panel1.classList.add(".pos");
});

console.log(panel1);
