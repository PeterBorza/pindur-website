const sec_1images = [
	"sources/1.jpg",
	"sources/2.jpg",
	"sources/3.jpg",
	"sources/4.jpg"
];

function x(tag, className, source) {
	let element = document.createElement(tag);
	element.classList.add(className);
	element.setAttribute("src", source);

	return element;
}


const section1 = document.getElementById("models");

const renderSection1 = () => {
	const picturesDiv = x("div", "span2-pictures");
    const sloganDiv = x("div", "span1-slogan");
    
    sloganDiv.innerHTML = `<h1 class="slogan">Clothing for open minds</h1>`;

	const renderPictures = sec_1images.map((item) => {
		const img = x("img", "picture", item);
        picturesDiv.append(img);
        
        return picturesDiv;
    });
    
    section1.append(sloganDiv, picturesDiv);
};

renderSection1();