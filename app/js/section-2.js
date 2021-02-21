const images = [
	  "sources/11.jpg", 
	  "sources/15.jpg",
	  "sources/12.jpg", 
	  "sources/16.jpg"
];
const section2 = document.getElementById("workshop");

const renderSection2 = () =>{
	const container2 = x('div', 'container2');
	const renderImages = images.map(imageMaker);
	renderImages.forEach(image => container2.append(image));
	section2.append(container2);
};
	
const imageMaker = (item) => {
	const img = x('img','box-img', item);
	const imgBox = x('div', 'img-box');
	imgBox.append(img);
	
	return imgBox;
}

renderSection2();
