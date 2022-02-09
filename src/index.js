import './style.css';
import Headshot from './images/Luigi-Head-removebg-preview.png';

//add headshot to page
let headshotImg = document.createElement("img");
headshotImg.src = Headshot;
let contentDiv = document.getElementById("content");
contentDiv.appendChild(headshotImg);

