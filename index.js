const slides1 = document.querySelectorAll ('.slide1')
for (const slide1 of slides1) {
  slide1.addEventListener ('click', () => {
    clearActive1Classes ()
    slide1.classList.add ('active1')
  })
}
function clearActive1Classes () {
  slides1.forEach((slide1) => {slide1.classList.remove ('active1')})
}
const slides2 = document.querySelectorAll ('.slide2')
for (const slide2 of slides2) {
  slide2.addEventListener ('click', () => {
    clearActive2Classes ()
    slide2.classList.add ('active2')
  })
}
function clearActive2Classes () {
  slides2.forEach((slide2) => {slide2.classList.remove ('active2')})
}
const slides3 = document.querySelectorAll ('.slide3')
for (const slide3 of slides3) {
  slide3.addEventListener ('click', () => {
    clearActive3Classes ()
    slide3.classList.add ('active3')
  })
}
function clearActive3Classes () {
  slides3.forEach((slide3) => {slide3.classList.remove ('active3')})
}

const slides4 = document.querySelectorAll ('.slide4')
for (const slide4 of slides4) {
  slide4.addEventListener ('click', () => {
    clearActive4Classes ()
    slide4.classList.add ('active4')
  })
}
function clearActive4Classes () {
  slides4.forEach((slide4) => {slide4.classList.remove ('active4')})
}
const container = document.querySelector(".container");
const content = document.querySelector(".content");
const heightOfContent = content.getBoundingClientRect().height;
const btn = document.querySelector(".trigger");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content.setAttribute("aria-hidden", "true");
}, 0);
btn.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content.setAttribute("aria-hidden", content.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content1 = document.querySelector(".content1");
const heightOfContent1 = content1.getBoundingClientRect().height;
const btn1 = document.querySelector(".trigger1");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content1.setAttribute("aria-hidden", "true");
}, 0);
btn1.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content1.setAttribute("aria-hidden", content1.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content2 = document.querySelector(".content2");
const heightOfContent2 = content2.getBoundingClientRect().height;
const btn2 = document.querySelector(".trigger2");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content2.setAttribute("aria-hidden", "true");
}, 0);
btn2.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content2.setAttribute("aria-hidden", content2.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content3 = document.querySelector(".content3");
const heightOfContent3 = content3.getBoundingClientRect().height;
const btn3 = document.querySelector(".trigger3");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content3.setAttribute("aria-hidden", "true");
}, 0);
btn3.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content3.setAttribute("aria-hidden", content3.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content4 = document.querySelector(".content4");
const heightOfContent4 = content4.getBoundingClientRect().height;
const btn4 = document.querySelector(".trigger4");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content4.setAttribute("aria-hidden", "true");
}, 0);
btn4.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content4.setAttribute("aria-hidden", content4.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content5 = document.querySelector(".content5");
const heightOfContent5 = content5.getBoundingClientRect().height;
const btn5 = document.querySelector(".trigger5");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content5.setAttribute("aria-hidden", "true");
}, 0);
btn5.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content5.setAttribute("aria-hidden", content5.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content6 = document.querySelector(".content6");
const heightOfContent6 = content6.getBoundingClientRect().height;
const btn6 = document.querySelector(".trigger6");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content6.setAttribute("aria-hidden", "true");
}, 0);
btn6.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content6.setAttribute("aria-hidden", content6.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content7 = document.querySelector(".content7");
const heightOfContent7 = content7.getBoundingClientRect().height;
const btn7 = document.querySelector(".trigger7");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content7.setAttribute("aria-hidden", "true");
}, 0);
btn7.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content7.setAttribute("aria-hidden", content7.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content8 = document.querySelector(".content8");
const heightOfContent8 = content8.getBoundingClientRect().height;
const btn8 = document.querySelector(".trigger8");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content8.setAttribute("aria-hidden", "true");
}, 0);
btn8.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content8.setAttribute("aria-hidden", content8.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content9 = document.querySelector(".content9");
const heightOfContent9 = content9.getBoundingClientRect().height;
const btn9 = document.querySelector(".trigger9");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content9.setAttribute("aria-hidden", "true");
}, 0);
btn9.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content9.setAttribute("aria-hidden", content9.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content10 = document.querySelector(".content10");
const heightOfContent10 = content10.getBoundingClientRect().height;
const btn10 = document.querySelector(".trigger10");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content10.setAttribute("aria-hidden", "true");
}, 0);
btn10.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content10.setAttribute("aria-hidden", content10.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content11 = document.querySelector(".content11");
const heightOfContent11 = content11.getBoundingClientRect().height;
const btn11 = document.querySelector(".trigger11");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content11.setAttribute("aria-hidden", "true");
}, 0);
btn11.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content11.setAttribute("aria-hidden", content11.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content12 = document.querySelector(".content12");
const heightOfContent12 = content12.getBoundingClientRect().height;
const btn12 = document.querySelector(".trigger12");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content12.setAttribute("aria-hidden", "true");
}, 0);
btn12.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content12.setAttribute("aria-hidden", content12.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content13 = document.querySelector(".content13");
const heightOfContent13 = content13.getBoundingClientRect().height;
const btn13 = document.querySelector(".trigger13");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content13.setAttribute("aria-hidden", "true");
}, 0);
btn13.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content13.setAttribute("aria-hidden", content13.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content14 = document.querySelector(".content14");
const heightOfContent14 = content14.getBoundingClientRect().height;
const btn14 = document.querySelector(".trigger14");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content14.setAttribute("aria-hidden", "true");
}, 0);
btn14.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content14.setAttribute("aria-hidden", content14.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content15 = document.querySelector(".content15");
const heightOfContent15 = content15.getBoundingClientRect().height;
const btn15 = document.querySelector(".trigger15");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content15.setAttribute("aria-hidden", "true");
}, 0);
btn15.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content15.setAttribute("aria-hidden", content15.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content16 = document.querySelector(".content16");
const heightOfContent16 = content16.getBoundingClientRect().height;
const btn16 = document.querySelector(".trigger16");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content16.setAttribute("aria-hidden", "true");
}, 0);
btn16.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content16.setAttribute("aria-hidden", content16.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content17 = document.querySelector(".content17");
const heightOfContent17 = content17.getBoundingClientRect().height;
const btn17 = document.querySelector(".trigger17");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content17.setAttribute("aria-hidden", "true");
}, 0);
btn17.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content17.setAttribute("aria-hidden", content17.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content18 = document.querySelector(".content18");
const heightOfContent18 = content18.getBoundingClientRect().height;
const btn18 = document.querySelector(".trigger18");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content18.setAttribute("aria-hidden", "true");
}, 0);
btn18.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content18.setAttribute("aria-hidden", content18.getAttribute("aria-hidden") === "true" ? "false" : "true");
})
const content19 = document.querySelector(".content19");
const heightOfContent19 = content19.getBoundingClientRect().height;
const btn19 = document.querySelector(".trigger19");
container.style.setProperty("--containerHeight", `${heightOfContent}px`);
setTimeout(e => {
    document.documentElement.classList.add("height-is-set");
    content19.setAttribute("aria-hidden", "true");
}, 0);
btn19.addEventListener("click", function(e) {
    container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
    content19.setAttribute("aria-hidden", content19.getAttribute("aria-hidden") === "true" ? "false" : "true");
})