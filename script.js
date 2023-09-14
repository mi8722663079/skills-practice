const root = document.querySelector(":root");
const content = document.querySelector(".content");
const panels = document.querySelectorAll(".element");
const panel1 = document.querySelector(".e1");
const panel2 = document.querySelector(".e2");
const panel3 = document.querySelector(".e3");
const image = document.querySelector(".ad1");
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

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (panel.getAttribute("data-state") == "active") {
      return;
    }
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
      image.setAttribute("src", img2);
    }
  });
});
console.log(panel1);
