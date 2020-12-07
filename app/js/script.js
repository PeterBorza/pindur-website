// GSAP LIBRARY---------------------------------------------------
// ************

// var rule = CSSRulePlugin.getRule(".slogan:after");
const tl = gsap.timeline({ defaults: { duration: 1 } });

// on page loading this happens
// ****************************

tl.from(".logoimg", { y: -100, opacity: 0 })
	.from("li", { y: -100, stagger: 0.2, opacity: 0 }, "-=.4")

	.from(".slogan", { x: -800, duration: 1.5, opacity: 0 }, "-=1.5");
// .from(".picture", {x: -2000, stagger: .8, duration: .4}, "-=1");
//   .to(rule, {duration: 1.8, cssRule: {x:-100}});

// li clicked nav disappears and appears when new page is loaded
// *****************************************************************

$("li").click(function () {
	tl.from(".logo", {x: -200, duration: 0.8, opacity: 1}, '-=.')
	.to("li", { y: -100, duration: 0.5, opacity: 0 }, '-=.3')
	.from("li", {y: -100, duration: 0.5, stagger: 0.1, opacity: 1})
});


// VANILLA JS-------------------------------------------

// const scrollWin = (x, y) => window.scrollBy(x, y);

// set background for each section
// *******************************

let black = ["black", "#708090", "rgb(47, 79, 79)", "rgb(26, 0, 0)"];
var bcgColor = [
    "rgb(40, 15, 38)",
    "rgb(30, 24, 30)",
    "rgb(26, 30, 40)",
    "rgb(40, 40, 24)",
];

const sectionBcg = () => {
	const sections = document.querySelectorAll(".bcg");
	sections.forEach((sec, i) => {
		// sec.style.backgroundColor = colorsSorted[i];
		sec.style.backgroundColor = black[i];
		sec.style.backgroundColor = bcgColor[i];
	});
};

sectionBcg();

// object array based SECTION 2
// ****************************

let images = [
	{ color: "/sources/11.jpg", bw: "/sources/11bw.jpg" },
	{ color: "/sources/15.jpg", bw: "/sources/15bw.jpg" },
	{ color: "/sources/12.jpg", bw: "/sources/12bw.jpg" },
	{ color: "/sources/16.jpg", bw: "/sources/16bw.jpg" },
];
const container2 = document.querySelector(".container2");

const secTwoPhotos = () => {
	const newArray = renderSectionTwoImages();
	newArray.forEach((item) => container2.append(item));
};

const renderSectionTwoImages = () => images.map(renderImages);

const renderImages = (item) => {
	const img = document.createElement("img");
	img.classList.add("box-img");
	img.setAttribute("src", item.bw);
	img.setAttribute("data-color", item.color);

	const imgBox = document.createElement("div");
	imgBox.classList.add("img-box");
	imgBox.append(img);

	return imgBox;
};

secTwoPhotos();

// section 2 images animation
// *************************

const section2PicturesMouseIn = () => {
	const container = document.querySelector(".container2");
	container.addEventListener("mouseover", (e) => {
		const x = e.target;
		const data = x.getAttribute("data-color");
		const src = x.getAttribute("src");
		x.setAttribute("src", data);
		x.setAttribute("data-color", src);
		// console.log(x.getAttribute('src'));
	});
};

section2PicturesMouseIn();

const section2PicturesMouseOut = () => {
	const container = document.querySelector(".container2");
	container.addEventListener("mouseout", (e) => {
		const x = e.target;
		const data = x.getAttribute("data-color");
		const src = x.getAttribute("src");
		x.setAttribute("src", data);
		x.setAttribute("data-color", src);
		// console.log(x.getAttribute('src'));
	});
};

section2PicturesMouseOut();

// ferdinandi smooth scroll. Npm in script.*************************
const scroll = new SmoothScroll('main a[href*="#"]', { speed: 800 });
// *****************************************************************