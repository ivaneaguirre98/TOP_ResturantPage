import LuigiHeadshot from '../images/Luigi-Head-removebg-preview.png';

//get content div and assign it a variable
let contentDiv = document.getElementById("content");

//function to build header
function buildHeader(){
    //builds header section and sets background image
    let headerDiv = document.createElement("div");
    headerDiv.classList.add("headerSection");
    contentDiv.appendChild(headerDiv);

    //create div for headshot and title
    let innerHeaderContent = document.createElement("div");
    innerHeaderContent.classList.add("headerContent");
    headerDiv.appendChild(innerHeaderContent);

    //adding headshot
    const headshotImage = new Image();
    headshotImage.src = LuigiHeadshot;
    innerHeaderContent.appendChild(headshotImage);
    headshotImage.classList.add("luigiHeadshot");

    //adding title
    let headerTitleDiv = document.createElement("h1");
    headerTitleDiv.innerHTML = "Luigi's Pizzeria"
    headerTitleDiv.classList.add("headerTitle");
    innerHeaderContent.appendChild(headerTitleDiv);
};

function buildNavBar(){
    let navDiv = document.createElement("div");
    navDiv.classList.add("navbarSection");
    contentDiv.appendChild(navDiv);

    //build out nav element
    let navElement = document.createElement("nav");
    navDiv.appendChild(navElement);

    //build out UL element for nav
    let ulElement = document.createElement("ul");
    ulElement.classList.add("navContent");
    navElement.appendChild(ulElement);
}

function buildMainSection(){
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("mainSection");
    contentDiv.appendChild(mainDiv);
}


function initalPageLoad(){
    buildHeader();
    buildNavBar();
    buildMainSection();
}

export default initalPageLoad;