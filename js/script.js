"use strict";
let music = document.getElementById("music");
let isPlaying = false;
music.volume = 0.9;
function togglePlay() {
  if (isPlaying) {
    music.pause();
  } else {
    music.play();
  }
}
music.onplaying = function () {
  isPlaying = true;
  document.getElementById("music-animation").classList.add("on");
};
music.onpause = function () {
  isPlaying = false;
  document.getElementById("music-animation").classList.remove("on");
};

let button = document.getElementById("toggle");
button.addEventListener(
  "click",
  function () {
    if (button.getAttribute("data-text-swap") == button.innerHTML) {
      button.innerHTML = button.getAttribute("data-text-original");
    } else {
      button.setAttribute("data-text-original", button.innerHTML);
      button.innerHTML = button.getAttribute("data-text-swap");
    }
  },
  false
);

// jump
// document.getElementById("tunnel").animate([
//   // keyframes
//   { transform: 'translateY(0px)' },
//   { transform: 'translateY(-300px)' }
// ], {
//   // timing options
//   duration: 1000,
//   iterations: Infinity
// });
let jumper = document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("jump-img").animate(
    [
      // keyframes
      { transform: "translateX(-30px)" },
      // { transform: "translateY(-20px)" },
      { transform: "rotate(350deg)" },
      { transform: "translateX(30px)" },
      { transform: "rotate(10deg)" },
      { transform: "translateX(-30px)" },

      // { transform: "translateY(20px)" },
      // { transform: "rotate(30deg)" },
    ],
    {
      // timing options
      duration: 2500,
      iterations: Infinity,
    }
  );
}
// печать
// Promise.delay = (ms) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });

// async function printer(cssSelector, text, r2l) {
//   let el = document.querySelector(cssSelector);
//   if (r2l)
//     for (let i = text.length - 1; i >= 0; i--) {
//       let c = text[i];
//       await Promise.delay(300);
//       el.textContent = c + el.textContent;
//     }
//   else
//     for (let c of text) {
//       await Promise.delay(300);
//       el.textContent = el.textContent + c;
//     }
// }

// (async function main() {
//   let str = "Galaxy";

//   await printer("#galaxy", str);
// })();
// work type
// let str = "<p>Galaxy</p>",
//   i = 0,
//   isTag,
//   text;

// (function type() {
//   text = str.slice(0, ++i);
//   if (text === str) return;

//   document.getElementById("typewriter").innerHTML = text;

//   var char = text.slice(-1);
//   if (char === "<") isTag = true;
//   if (char === ">") isTag = false;

//   if (isTag) return type();
//   setTimeout(type, 200);
// })();

// new
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
