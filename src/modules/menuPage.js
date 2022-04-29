
function init(){

    if(document.body.contains(document.querySelector(".innerContent"))){
        let innerContent = document.querySelector(".innerContent");
        innerContent.remove();
    }
}

function createMenuPage(){
    console.log("This came from MenuPage.js");

    //create innerContent Div for page content
    let innerContentDiv = document.createElement("div");
    innerContentDiv.classList.add("innerContent");
    mainSection.appendChild(innerContentDiv);

//get innerContent div assigned to variable
    let innerContent = document.querySelector(".innerContent");

    //menu title
    let menuTitle = document.createElement("h2");
    menuTitle.innerHTML = "Menu";
    menuTitle.classList.add("menuTitle");
    innerContent.appendChild(menuTitle);

    //createMenu
    let menuItem1 = document.createElement("div");
    menuItem1.innerHTML = "Super Pizza ....... $6.99"
    menuItem1.classList.add("menuItem");
    innerContent.appendChild(menuItem1);

    let menuItem2 = document.createElement("div");
    menuItem2.innerHTML = "Super Calzone ....... $6.99"
    menuItem2.classList.add("menuItem");
    innerContent.appendChild(menuItem2);

    let menuItem3 = document.createElement("div");
    menuItem3.innerHTML = "Super Bread ....... $3.99"
    menuItem3.classList.add("menuItem");
    innerContent.appendChild(menuItem3);

    let menuItem4 = document.createElement("div");
    menuItem4.innerHTML = "Super Wings ....... $9.99"
    menuItem4.classList.add("menuItem");
    innerContent.appendChild(menuItem4);
}

function menuPage(){
    init();
    createMenuPage();

}
export default menuPage;