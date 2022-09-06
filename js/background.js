const images = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
]
// const chosenImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);
//appendChild()는 body에 html을 추가함 

const chosenImage = images[Math.floor(Math.random() * images.length)];
const imgSrc = "./img/" + chosenImage;

document.body.style.backgroundImage = "url(" + imgSrc + ")";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100vw 100vh";
