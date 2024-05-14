function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()


var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
  clutter += `<span>${dets}</span>`

  document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
  scrollTrigger:{
      trigger:`#page2>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})



function canvas(){
  const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./assets/frames00007.png
./assets/frames00010.png
./assets/frames00013.png
./assets/frames00016.png
./assets/frames00019.png
./assets/frames00022.png
./assets/frames00025.png
./assets/frames00028.png
./assets/frames00031.png
./assets/frames00034.png
./assets/frames00037.png
./assets/frames00040.png
./assets/frames00043.png
./assets/frames00046.png
./assets/frames00049.png
./assets/frames00052.png
./assets/frames00055.png
./assets/frames00058.png
./assets/frames00061.png
./assets/frames00064.png
./assets/frames00067.png
./assets/frames00070.png
./assets/frames00073.png
./assets/frames00076.png
./assets/frames00079.png
./assets/frames00082.png
./assets/frames00085.png
./assets/frames00088.png
./assets/frames00091.png
./assets/frames00094.png
./assets/frames00097.png
./assets/frames00100.png
./assets/frames00103.png
./assets/frames00106.png
./assets/frames00109.png
./assets/frames00112.png
./assets/frames00115.png
./assets/frames00118.png
./assets/frames00121.png
./assets/frames00124.png
./assets/frames00127.png
./assets/frames00130.png
./assets/frames00133.png
./assets/frames00136.png
./assets/frames00139.png
./assets/frames00142.png
./assets/frames00145.png
./assets/frames00148.png
./assets/frames00151.png
./assets/frames00154.png
./assets/frames00157.png
./assets/frames00160.png
./assets/frames00163.png
./assets/frames00166.png
./assets/frames00169.png
./assets/frames00172.png
./assets/frames00175.png
./assets/frames00178.png
./assets/frames00181.png
./assets/frames00184.png
./assets/frames00187.png
./assets/frames00190.png
./assets/frames00193.png
./assets/frames00196.png
./assets/frames00199.png
./assets/frames00202.png

`;
return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page3`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page3",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas()


var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})







function canvas1(){
  const canvas = document.querySelector("#page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./assets/bridges00004.png
./assets/bridges00007.png
./assets/bridges00010.png
./assets/bridges00013.png
./assets/bridges00016.png
./assets/bridges00019.png
./assets/bridges00022.png
./assets/bridges00025.png
./assets/bridges00028.png
./assets/bridges00031.png
./assets/bridges00034.png
./assets/bridges00037.png
./assets/bridges00040.png
./assets/bridges00043.png
./assets/bridges00046.png
./assets/bridges00049.png
./assets/bridges00052.png
./assets/bridges00055.png
./assets/bridges00058.png
./assets/bridges00061.png
./assets/bridges00064.png
./assets/bridges00067.png
./assets/bridges00070.png
./assets/bridges00073.png
./assets/bridges00076.png
./assets/bridges00079.png
./assets/bridges00082.png
./assets/bridges00085.png
./assets/bridges00088.png
./assets/bridges00091.png
./assets/bridges00094.png
./assets/bridges00097.png
./assets/bridges00100.png
./assets/bridges00103.png
./assets/bridges00106.png
./assets/bridges00109.png
./assets/bridges00112.png
./assets/bridges00115.png
./assets/bridges00118.png
./assets/bridges00121.png
./assets/bridges00124.png
./assets/bridges00127.png
./assets/bridges00130.png
./assets/bridges00133.png
./assets/bridges00136.png
./assets/bridges00139.png
./assets/bridges00142.png
./assets/bridges00145.png
./assets/bridges00148.png
./assets/bridges00151.png
./assets/bridges00154.png
./assets/bridges00157.png
./assets/bridges00160.png
./assets/bridges00163.png
./assets/bridges00166.png
./assets/bridges00169.png
./assets/bridges00172.png
./assets/bridges00175.png
./assets/bridges00178.png
./assets/bridges00181.png
./assets/bridges00184.png
./assets/bridges00187.png
./assets/bridges00190.png
./assets/bridges00193.png
./assets/bridges00196.png
./assets/bridges00199.png
./assets/bridges00202.png

`;
return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page5`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page5",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas1()




var clutter = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span",{
  scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})




