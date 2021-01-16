

const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const slider = document.querySelector(".slider");
const textsection = document.querySelector(".text-section");
const logo = document.querySelector(".logo");
const navlink = document.querySelector(".nav-link");
const title = document.querySelector(".title");


const tl = new TimelineMax({});

tl.fromTo(text1,1.5,{ y : "100%" },{ y : "0%", ease: Power2.easeOut}),
tl.fromTo(text2,1.5,{ y : "100%" },{ y : "0%", ease: Power2.easeOut}, "-=1.3"),
tl.fromTo(text3,1.5,{ y : "100%" },{ y : "0%", ease: Power2.easeOut}, "-=1.3"),
tl.fromTo(slider,1.5,{ y : "100%" },{ y : "-100%", ease: Power2.easeOut}, "-=-1"),
tl.fromTo(textsection,1.5,{ y : "0%" },{ y : "-100%", ease: Power2.easeOut}, "-=1.2"),
tl.fromTo(logo,1.5,{ opacity : 0 },{ opacity : 1, ease: Power2.easeOut}, "-=0.5"),
tl.fromTo(navlink,1.5,{ opacity : 0 },{ opacity : 1, ease: Power2.easeOut}, "-=1.5"),
tl.fromTo(title,1.5,{ opacity : 0 },{ opacity : 1, ease: Power2.easeOut}, "-=1.5");

