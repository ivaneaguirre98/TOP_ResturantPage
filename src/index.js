import './style.css';
// import Headshot from './images/Luigi-Head-removebg-preview.png';

// getting contentDiv from html
let contentDiv = document.getElementById("content");

//creating a text content div to store text box
let textContent = document.createElement("div");
textContent.classList.add("textContent");
contentDiv.appendChild(textContent);

//adding headline and landing paragraph to text box
let headline = document.createElement("div");
headline.classList.add("headline");
headline.textContent = "Luigi's Pizzera";
let landingPara = document.createElement("div");
landingPara.classList.add("paragraph");
landingPara.textContent = "After a hard day of helping Mario rescue Princess Peach from his nemesis Bowser, Luigi likes to come home to a nice hot pizza. However, after a couple of bad pies, Luigi felt that nobody should come home to a disappointing pizza. So Luigi decided to show the world how a pizza should be made."
textContent.appendChild(headline);
textContent.appendChild(landingPara);

// //add headshot to page
// // let headshotImg = document.createElement("img");
// // headshotImg.src = Headshot;
// // let contentDiv = document.getElementById("content");
// // contentDiv.appendChild(headshotImg);
// console.log("This works");

