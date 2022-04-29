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

    //build out list items for ul for nav
    let homeButton = document.createElement("li");
    homeButton.classList.add("navItem");
    homeButton.id = "homeBtn";
    homeButton.innerHTML = "Home";
    ulElement.appendChild(homeButton);

    let menuButton = document.createElement("li");
    menuButton.classList.add("navItem");
    menuButton.innerHTML = "Menu";
    menuButton.id = "menuBtn";
    ulElement.appendChild(menuButton);

    let contactButton = document.createElement("li");
    contactButton.classList.add("navItem");
    contactButton.innerHTML = "Contact";
    contactButton.id = "contactBtn";
    ulElement.appendChild(contactButton);
}

function buildMainSection(){
    let mainSectionDiv = document.createElement("div");
    mainSectionDiv.classList.add("mainSection");
    mainSectionDiv.id = "mainSection"
    contentDiv.appendChild(mainSectionDiv);

    let innerContent = document.createElement("div");
    innerContent.classList.add("innerContent");
    mainSection.appendChild(innerContent);
}




function initalPageLoad(){
    buildHeader();
    buildNavBar();
    buildMainSection();
}

export default initalPageLoad;