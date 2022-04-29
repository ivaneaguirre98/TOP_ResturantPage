
function init(){

    if(document.body.contains(document.querySelector(".innerContent"))){
        let innerContent = document.querySelector(".innerContent");
        innerContent.remove();
    }
}

function createMenuPage(){
    console.log("This came from MenuPage.js");

    let innerContentDiv = document.createElement("div");
    innerContentDiv.classList.add("innerContent");
    mainSection.appendChild(innerContentDiv);


    let innerContent = document.querySelector(".innerContent");
}

function menuPage(){
    init();
    createMenuPage();

}
export default menuPage;