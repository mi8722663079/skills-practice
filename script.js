const root = document.querySelector(":root");
const content = document.querySelector(".content");
const panels = document.querySelectorAll(".element");
const panel1 = document.querySelector(".e1");
const panel2 = document.querySelector(".e2");
const panel3 = document.querySelector(".e3");
const image = document.querySelector(".ad1");
const search = document.querySelector(".navigate svg");
const bar = document.querySelector(".search-box");
const header = document.querySelector(".buynow h1");
const header2 = document.querySelector(".buynow h2");
const text = document.querySelector(".buynow p");
const gradiant = document.querySelector(".gradiant");
const g1 = getComputedStyle(gradiant);
const rs = getComputedStyle(root);
const p1 = getComputedStyle(panel1);
const p2 = getComputedStyle(panel2);
const p3 = getComputedStyle(panel3);
const img2 =
  "https://image.api.playstation.com/vulcan/ap/rnd/202308/2212/5e294c6a94756c31544a45d52724ccb0f343b3ce11f67807.png?w=1920&thumb=false";
const img3 =
  "https://media.direct.playstation.com/is/image/sierialto/playstation_portal_key_art_hero_1023x599?$Hero_Desktop$";
const img1 =
  "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg";

if (gradiant.getAttribute("class").includes("close")) {
  gradiant.classList.toggle("close");
}

window.addEventListener("load", () => {
  gradiant.classList.add("open1");
});
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (panel.getAttribute("data-state") == "active") {
      return;
    }
    gradiant.classList.toggle("open1");
    gradiant.classList.toggle("close");
    if (panel == panel1) {
      if (panel3.getAttribute("data-state") == "active") {
        panel1.animate(
          [
            {
              transform: "translateX(214%)",
              opacity: 0.7,
            },
            {
              transform: "translateX(107%)",
              opacity: 1,
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel2.animate(
          [
            {
              transform: "translateX(-107%)",
              opacity: 0.7,
              offset: 0,
            },
            {
              transform: "translateX(-147%)",
              opacity: 0,
              offset: 0.25,
            },
            {
              transform: "translateX(147%)",
              opacity: 0,
              offset: 0.5,
            },
            {
              transform: "translateX(107%)",
              opacity: 0.7,
              offset: 1,
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel3.animate(
          [
            {
              transform: "translateX(-107%)",
              opacity: 1,
              offset: 0,
            },
            {
              transform: "translateX(-214%)",
              opacity: 0.7,
              offset: 1,
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel1.setAttribute("data-state", "active");
        panel2.setAttribute("data-state", "hidden");
        panel3.setAttribute("data-state", "hidden");
      } else {
        panel1.animate(
          [
            {
              transform: "translateX(0)",
              opacity: 1,
            },
            {
              transform: "translateX(107%)",
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel2.animate(
          [
            {
              transform: "translateX(0)",
            },
            {
              transform: "translateX(107%)",
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel3.animate(
          [
            {
              transform: "translateX(0)",
              opacity: 0.7,
              offset: 0,
            },
            {
              transform: "translateX(90%)",
              opacity: 0,
              offset: 0.25,
            },
            {
              transform: "translateX(-244%)",
              opacity: 0,
              offset: 0.5,
            },
            {
              transform: "translateX(-214%)",
              opacity: 0.7,
              offset: 1,
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel1.setAttribute("data-state", "active");
        panel2.setAttribute("data-state", "hidden");
        panel3.setAttribute("data-state", "hidden");
      }
      header.textContent = "PS Portable Remote Player";
      header2.textContent = "Easier than Ever Before";
      text.textContent =
        "Feel the power of PlayStation® in the palm of your hand";
      gradiant.style.backgroundImage = "var(--gradiant1)";
      image.setAttribute("src", img3);
    } else if (panel == panel2) {
      if (panel3.getAttribute("data-state") == "active") {
        panel1.animate(
          [
            {
              transform: "translateX(214%)",
              opacity: 0.7,
              offset: 0,
            },
            {
              transform: "translateX(244%)",
              opacity: 0,
              offset: 0.25,
            },
            {
              transform: "translateX(-40%)",
              opacity: 0,
              offset: 0.5,
            },
            {
              transform: "translateX(0%)",
              opacity: 0.7,
              opacity: 1,
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel2.animate(
          [
            {
              transform: "translateX(-107%)",
              opacity: 0.7,
            },
            {
              transform: "translateX(0%)",
              opacity: 1,
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel3.animate(
          [
            {
              transform: "translateX(-107%)",
              opacity: 1,
              offset: 0,
            },
            {
              transform: "translateX(0%)",
              opacity: 0.7,
              offset: 1,
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel1.setAttribute("data-state", "hidden");
        panel2.setAttribute("data-state", "active");
        panel3.setAttribute("data-state", "hidden");
      } else {
        panel1.animate(
          [
            {
              transform: "translateX(107%)",
            },
            {
              transform: "translateX(0%)",
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel2.animate(
          [
            {
              transform: "translateX(107%)",
              opacity: 1,
            },
            {
              transform: "translateX(0%)",
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel3.animate(
          [
            {
              transform: "translateX(-214%)",
              opacity: 0.7,
              offset: 0,
            },
            {
              transform: "translateX(-244%)",
              opacity: 0,
              offset: 0.25,
            },
            {
              transform: "translateX(90%)",
              opacity: 0,
              offset: 0.5,
            },
            {
              transform: "translateX(0%)",
              opacity: 0.7,
              offset: 1,
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel1.setAttribute("data-state", "hidden");
        panel2.setAttribute("data-state", "active");
        panel3.setAttribute("data-state", "hidden");
      }
      header.textContent = "BE Greater, Together";
      header2.textContent = "Play like Never Before";
      text.textContent =
        "get Playstation 5 spider-man edition -- get marevl's spider man 2 gold edition";
      gradiant.style.backgroundImage = "var(--gradiant)";
      image.setAttribute("src", img1);
    } else if (panel == panel3) {
      if (panel1.getAttribute("data-state") == "active") {
        panel1.animate(
          [
            {
              transform: "translateX(107%)",
              opacity: 1,
              offset: 0,
            },
            {
              transform: "translateX(214%)",
              opacity: 0.7,
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel2.animate(
          [
            {
              transform: "translateX(107%)",
              opacity: 0.7,
              offset: 0,
            },
            {
              transform: "translateX(147%)",
              opacity: 0,
              offset: 0.25,
            },
            {
              transform: "translateX(-147%)",
              opacity: 0,
              offset: 0.5,
            },
            {
              transform: "translateX(-107%)",
              opacity: 0.7,
              offset: 1,
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel3.animate(
          [
            {
              transform: "translateX(-214%)",
              opacity: 0.7,
            },
            {
              transform: "translateX(-107%)",
              opacity: 1,
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel1.setAttribute("data-state", "hidden");
        panel2.setAttribute("data-state", "hidden");
        panel3.setAttribute("data-state", "active");
      } else {
        panel1.animate(
          [
            {
              transform: "translateX(0%)",
              opacity: 0.7,
              offset: 0,
            },
            {
              transform: "translateX(-90%)",
              opacity: 0,
              offset: 0.25,
            },
            {
              transform: "translateX(244%)",
              opacity: 0,
              offset: 0.5,
            },
            {
              transform: "translateX(214%)",
              opacity: 0.7,
              offset: 1,
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel2.animate(
          [
            {
              transform: "translateX(0)",
            },
            {
              transform: "translateX(-107%)",
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel3.animate(
          [
            {
              transform: "translateX(0)",
              opacity: 1,
            },
            {
              transform: "translateX(-107%)",
            },
          ],
          { duration: 400, fill: "forwards", easing: "ease-in-out" }
        );
        panel1.setAttribute("data-state", "hidden");
        panel2.setAttribute("data-state", "hidden");
        panel3.setAttribute("data-state", "active");
      }
      header.textContent = "BE the Fastest EVER!!";
      header2.textContent = "Strive for speed";
      text.textContent =
        "Experience speed like never before --get RWS deluxe edition";
      gradiant.style.backgroundImage = "var(--gradiant2)";
      image.setAttribute("src", img2);
    }
  });
});

search.addEventListener("click", () => {
  bar.getAttribute("class").includes("slideIn")
    ? bar.classList.toggle("slideOut")
    : bar.classList.toggle("slideIn");
});
if (gradiant.getAttribute("class").includes("close")) {
  gradiant.classList.toggle("close");
}
