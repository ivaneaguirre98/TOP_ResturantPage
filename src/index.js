import initalPageLoad from "./modules/pageLoad.js";
import homePage from "./modules/homePage.js";
import './style.css';

const run = (() =>{
    initalPageLoad();
    homePage();
})();

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", homePage);

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () =>{
    console.log("menu btn");
})

const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () =>{
    console.log("contact button");
})


