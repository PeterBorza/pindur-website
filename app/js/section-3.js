const newImages = [
	{ src: "/pexels/s7.jpg", alt: "Sewing Wheel" },
	{ src: "/pexels/s8.jpg", alt: "Materials" },
	{ src: "/pexels/s3.jpg", alt: "Measure Tape" },
	{ src: "/pexels/s5.jpg", alt: "Sewing" },
	{ src: "/pexels/14.jpg", alt: "Manequin" },
	{ src: "/pexels/s2.jpg", alt: "Thread" },
	{ src: "/pexels/s6.jpg", alt: "Thread And Buttons" },
	{ src: "/pexels/s1.jpg", alt: "Sigma" },
	{ src: "/pexels/s4.jpg", alt: "Adjusting The Thread" },
	{ src: "/pexels/13.jpg", alt: "Scissors" }
];

const section = document.getElementById("contact");

const renderSection3 = () => {
	const renderImages = createImages();
	const container = document.createElement("div");
	container.classList.add("section3-container");
	renderImages.forEach((item) => container.appendChild(item));
	section.appendChild(container);
	
};

const createImages = () => newImages.map(createImage);

const createImage = (item) => {
	const img = document.createElement("img");
	img.classList.add('section3-img');
	img.setAttribute("src", item.src);

	const spanText = document.createElement("span");
	spanText.textContent = item.alt;

	const imageBox = document.createElement("div");
	imageBox.classList.add("image-box3");
	imageBox.prepend(img);
	imageBox.append(spanText);

	return imageBox;
};

renderSection3();







