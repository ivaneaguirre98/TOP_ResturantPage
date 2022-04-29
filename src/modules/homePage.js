import luigiJumping from "../images/luigi_jumpingImage.png"

function init(){

    if(document.body.contains(document.querySelector(".innerContent"))){
        let innerContent = document.querySelector(".innerContent");
        innerContent.remove();
    }
}


function createHomePageArea(){
    let innerContentDiv = document.createElement("div");
    innerContentDiv.classList.add("innerContent");
    mainSection.appendChild(innerContentDiv);


    let innerContent = document.querySelector(".innerContent");


    //add Luigi picture
    const luigiJumpImage = new Image();
    luigiJumpImage.src = luigiJumping;
    luigiJumpImage.classList.add("luigiJumpImage");
    innerContent.appendChild(luigiJumpImage);

    //create paragraph
    let welcomePara = document.createElement("div");
    welcomePara.classList.add("welcomePara");
    welcomePara.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Et netus et malesuada fames ac turpis. Nulla aliquet enim tortor at. Sagittis purus sit amet volutpat. Elementum curabitur vitae nunc sed velit. Amet est placerat in egestas. Sed risus ultricies tristique nulla aliquet enim tortor. Et ultrices neque ornare aenean euismod. Pellentesque habitant morbi tristique senectus et. Lacus luctus accumsan tortor posuere ac ut. Eget arcu dictum varius duis. Nam at lectus urna duis convallis convallis. Donec pretium vulputate sapien nec sagittis aliquam. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Pharetra pharetra massa massa ultricies mi quis. Tincidunt tortor aliquam nulla facilisi. Id donec ultrices tincidunt arcu non sodales neque."
    innerContent.appendChild(welcomePara);

    console.log("homepageCreated");
}


function homePage(){
    init();
    createHomePageArea();
}

export default homePage;