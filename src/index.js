import initalPageLoad from "./modules/pageLoad.js";
import './style.css';

const run = (() =>{
    initalPageLoad();
})();

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", ()=>{
    console.log("homeBtn");
})

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () =>{
    console.log("menu btn");
})

const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () =>{
    console.log("contact button");
})


