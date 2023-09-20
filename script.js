const root = document.querySelector(":root");
const content = document.querySelector(".content");
const content2 = document.querySelector(".content2");
const panels = document.querySelectorAll(".element");
const panels2 = document.querySelectorAll(".element2");
const panel1 = document.querySelector(".e1");
const panel2 = document.querySelector(".e2");
const panel3 = document.querySelector(".e3");
const panel4 = document.querySelector(".e4");
const panel5 = document.querySelector(".e5");
const panel6 = document.querySelector(".e6");
const image = document.querySelector(".ad1");
const image2 = document.querySelector(".offer img");
const search = document.querySelector(".navigate .fa-search");
const barBtn = document.querySelector(".navigate .fa-bars");
const bar = document.querySelector(".search-box");
const header = document.querySelector(".buynow h1");
const header2 = document.querySelector(".buynow h2");
const text = document.querySelector(".buynow p");
const btn1 = document.querySelector(".buynow button");
const header3 = document.querySelector(".ps h1");
const text3 = document.querySelector(".ps p");
const btn3 = document.querySelector(".ps .btn1");
const btn4 = document.querySelector(".ps .btn2");
const gradiant = document.querySelector(".gradiant");
const menu = document.querySelector(".menu-box");
const chosen = document.querySelectorAll(".chosen");
const g1 = getComputedStyle(gradiant);
const rs = getComputedStyle(root);
const p1 = getComputedStyle(panel1);
const p2 = getComputedStyle(panel2);
const p3 = getComputedStyle(panel3);
const p4 = getComputedStyle(panel4);
const p5 = getComputedStyle(panel5);
const p6 = getComputedStyle(panel6);
const ads = [
  "https://gmedia.playstation.com/is/image/SIEPDC/DualSense-Edge-image-block-01-en-24aug22?$800px$",
  "https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-horizontal-product-shot-01-ps5-en-23nov20?$800px$",
  "https://gmedia.playstation.com/is/image/SIEPDC/3d-pulse-headset-range-image-block-03-en-13sep22?$800px$",
];
const img2 =
  "https://gmedia.playstation.com/is/image/SIEPDC/NBA2K24-hero-mobile-01-en-28jun23?$800px$";
const img3 =
  "https://gmedia.playstation.com/is/image/SIEPDC/ps-portal-remote-player-homepage-hero-banner-mobile-01-en-18aug23?$800px$";
const img1 =
  "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg";

if (gradiant.getAttribute("class").includes("close")) {
  gradiant.classList.toggle("close");
}

window.addEventListener("load", () => {
  gradiant.classList.add("open1");
  header.classList.add("opacity1");
  header2.classList.add("opacity2");
  text.classList.add("opacity3");
  btn1.classList.add("opacity4");
  image2.classList.add("opacity5");
  header3.classList.add("opacity6");
  text3.classList.add("opacity7");
  btn3.classList.add("opacity8");
  btn4.classList.add("opacity9");
});
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (panel.getAttribute("data-state") == "active") {
      return;
    }
    setTimeout(() => {
      header.classList.toggle("opacity1");
      header2.classList.toggle("opacity2");
      text.classList.toggle("opacity3");
      btn1.classList.toggle("opacity4");
    }, 1);
    header.classList.toggle("opacity1");
    header2.classList.toggle("opacity2");
    text.classList.toggle("opacity3");
    btn1.classList.toggle("opacity4");
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
      }
      setTimeout(() => {
        header.textContent = "PS Portable Remote Player";
        header2.textContent = "Easier than Ever Before";
        text.textContent =
          "Feel the power of PlayStation® in the palm of your hand";
        btn1.style.backgroundColor = "#00439c";
        btn1.textContent = "Buy now";
        image.setAttribute("src", img3);
        btn1.classList.add("blue-outline");
        btn1.classList.remove("red-outline");
        btn1.classList.remove("yellow-outline");
      }, 200);
      panel1.setAttribute("data-state", "active");
      panel2.setAttribute("data-state", "hidden");
      panel3.setAttribute("data-state", "hidden");
      gradiant.style.backgroundImage = "var(--gradiant1)";
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
      }
      setTimeout(() => {
        header.textContent = "BE Greater, Together";
        header2.textContent = "Play like Never Before";
        text.textContent =
          "get Playstation 5 spider-man edition -- get marevl's spider man 2 gold edition";
        btn1.style.backgroundColor = "#c90707";
        image.setAttribute("src", img1);
        btn1.textContent = "Pre-order now";
        btn1.classList.add("red-outline");
        btn1.classList.remove("blue-outline");
        btn1.classList.remove("yellow-outline");
      }, 200);
      panel2.setAttribute("data-state", "active");
      panel1.setAttribute("data-state", "hidden");
      panel3.setAttribute("data-state", "hidden");
      gradiant.style.backgroundImage = "var(--gradiant)";
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
      }
      setTimeout(() => {
        header.textContent = "NBA 2K24";
        header2.textContent = "See you on the court";
        text.textContent =
          "Experience hoops culture in NBA 2K24, avaliable now on ps4 & ps5";
        image.setAttribute("src", img2);
        btn1.style.backgroundColor = "#b006ca";
        btn1.textContent = "Buy now";
        btn1.classList.add("yellow-outline");
        btn1.classList.remove("red-outline");
        btn1.classList.remove("blue-outline");
      }, 200);
      panel3.setAttribute("data-state", "active");
      panel1.setAttribute("data-state", "hidden");
      panel2.setAttribute("data-state", "hidden");
      gradiant.style.backgroundImage = "var(--gradiant2)";
    }
  });
});
panels2.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (panel.getAttribute("data-state") == "active") {
      return;
    }
    setTimeout(() => {
      image2.classList.toggle("opacity5");
      header3.classList.toggle("opacity6");
      text3.classList.toggle("opacity7");
      btn3.classList.toggle("opacity8");
      btn4.classList.toggle("opacity9");
    }, 1);
    image2.classList.toggle("opacity5");
    header3.classList.toggle("opacity6");
    text3.classList.toggle("opacity7");
    btn3.classList.toggle("opacity8");
    btn4.classList.toggle("opacity9");
    if (panel == panel4) {
      if (panel6.getAttribute("data-state") == "active") {
        panel4.animate(
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
        panel5.animate(
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
        panel6.animate(
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
      } else {
        panel4.animate(
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
        panel5.animate(
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
        panel6.animate(
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
      }
      setTimeout(() => {
        header3.textContent = "DualSense Edge™ Wireless Controller";
        text3.textContent =
          "Get an edge in gameplay with remappable buttons, tunable triggers and sticks, changeable stick caps, back buttons, and more.";
        image2.setAttribute("src", ads[0]);
      }, 200);
      panel4.setAttribute("data-state", "active");
      panel5.setAttribute("data-state", "hidden");
      panel6.setAttribute("data-state", "hidden");
    } else if (panel == panel5) {
      if (panel6.getAttribute("data-state") == "active") {
        panel4.animate(
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
        panel5.animate(
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
        panel6.animate(
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
      } else {
        panel4.animate(
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
        panel5.animate(
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
        panel6.animate(
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
      }
      setTimeout(() => {
        header3.textContent = "PlayStation 5 Console";
        text3.textContent =
          "Experience an all-new generation of incredible PlayStation games. PS5 consoles are currently in stock.";
        image2.setAttribute("src", ads[1]);
      }, 200);
      panel5.setAttribute("data-state", "active");
      panel4.setAttribute("data-state", "hidden");
      panel6.setAttribute("data-state", "hidden");
    } else if (panel == panel6) {
      if (panel4.getAttribute("data-state") == "active") {
        panel4.animate(
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
        panel5.animate(
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
        panel6.animate(
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
      } else {
        panel4.animate(
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
        panel5.animate(
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
        panel6.animate(
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
      }
      setTimeout(() => {
        header3.textContent = "PULSE 3D™ Wireless Headset";
        text3.textContent =
          "Enjoy a seamless wireless experience with a headset fine-tuned for 3D Audio on PS5 consoles.";
        image2.setAttribute("src", ads[2]);
      }, 200);
      panel6.setAttribute("data-state", "active");
      panel4.setAttribute("data-state", "hidden");
      panel5.setAttribute("data-state", "hidden");
    }
  });
});
search.addEventListener("click", () => {
  if (bar.getAttribute("class").includes("slideIn")) {
    bar.classList.remove("slideIn");
    bar.classList.add("slideOut");
  } else if (bar.getAttribute("class").includes("slideIn") === false) {
    bar.classList.remove("slideOut");
    bar.classList.add("slideIn");
  } else {
    return;
  }
  if (menu.getAttribute("class").includes("slideIn2")) {
    menu.classList.add("slideOut2");
    menu.classList.remove("slideIn2");
  } else {
    return;
  }
});

barBtn.addEventListener("click", () => {
  if (menu.getAttribute("class").includes("slideIn2")) {
    menu.classList.remove("slideIn2");
    menu.classList.add("slideOut2");
  } else if (menu.getAttribute("class").includes("slideIn2") === false) {
    menu.classList.add("slideIn2");
    menu.classList.remove("slideOut2");
  } else {
    return;
  }
  if (bar.getAttribute("class").includes("slideIn")) {
    bar.classList.toggle("slideOut");
    bar.classList.remove("slideIn");
  } else {
    return;
  }
});

// if (gradiant.getAttribute("class").includes("close")) {
//   gradiant.classList.toggle("close");
// }

menu.onmousemove = (e) => {
  chosen.forEach((chose) => {
    const rect = chose.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    chose.style.setProperty("--mouse-x", `${x}px`);
    chose.style.setProperty("--mouse-y", `${y}px`);
  });
};
