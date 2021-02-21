function x(tag, className, source) {
	let element = document.createElement(tag);
	element.classList.add(className);
	element.setAttribute("src", source);

	return element;
}

const tl = gsap.timeline({ defaults: { duration: 1 } });


tl.from(".logoimg", { y: -100, opacity: 0 })
  .from("li", { y: -100, stagger: 0.2, opacity: 0 }, "-=.4")
  .from(".slogan", { x: -800, duration: 1.5, opacity: 0 }, "-=2");


const navLiAnimation = () => {
	 const ul = document.querySelector('ul');
	 ul.addEventListener('click', () => {
		tl.from(".logo", { x: -200, duration: 0.8, opacity: 1 }, "-=.")
	  .to("li", { y: -100, duration: 0.5, opacity: 0 }, "-=.3")
	  .from("li", { y: -100, duration: 0.5, stagger: 0.1, opacity: 1 });
	 });
 };

// const scrollWin = (x, y) => window.scrollBy(x, y);

// set background for each section
// *******************************

const black = ["black", "#708090", "rgb(47, 79, 79)", "rgb(26, 0, 0)"];
const bcgColor = [
	"rgb(40, 15, 38)",
	"rgb(30, 24, 30)",
	"rgb(26, 30, 40)",
	"rgb(40, 40, 24)",
];

const sectionBcg = () => {
	const sections = document.querySelectorAll('.sections > div');
	sections.forEach((sec, i) => {
		sec.style.width = '100%';
		sec.style.height = '100vh';
		sec.style.backgroundColor = black[i];
		sec.style.backgroundColor = bcgColor[i];
	});
};

const scroll = new SmoothScroll('header a[href*="#"]', { speed: 800 });

const renderPage = () => {
	navLiAnimation();
	sectionBcg();
}

renderPage();