import './style.css';
// import Headshot from './images/Luigi-Head-removebg-preview.png';

// getting contentDiv from html
let contentDiv = document.getElementById("content");

//creating a text content div to store text box
let textContent = document.createElement("div");
textContent.classList.add("textContent");
contentDiv.appendChild(textContent);

// //add headshot to page
// // let headshotImg = document.createElement("img");
// // headshotImg.src = Headshot;
// // let contentDiv = document.getElementById("content");
// // contentDiv.appendChild(headshotImg);
// console.log("This works");

