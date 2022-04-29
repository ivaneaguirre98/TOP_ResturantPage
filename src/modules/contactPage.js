function init(){

    if(document.body.contains(document.querySelector(".innerContent"))){
        let innerContent = document.querySelector(".innerContent");
        innerContent.remove();
    }
}

function createContactPage(){
    console.log("ContactPage Created");

    //create innerContent Div for page content
    let innerContentDiv = document.createElement("div");
    innerContentDiv.classList.add("innerContent");
    mainSection.appendChild(innerContentDiv);
    
    //get innerContent div assigned to variable
    let innerContent = document.querySelector(".innerContent");

    //add title
    let contactTitle = document.createElement("h2");
    contactTitle.innerHTML = "Contact Us";
    contactTitle.classList.add("contactTitle");
    innerContent.appendChild(contactTitle);

    //create form item
    let formDiv = document.createElement("form");
    innerContent.appendChild(formDiv);

    //create nameInput
    let nameInput = document.createElement("input");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Name");
    nameInput.classList.add("feedback-input");
    formDiv.appendChild(nameInput);

    //create emailInput
    let emailInput = document.createElement("input");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("type", "text");
    emailInput.setAttribute("placeholder", "Email");
    emailInput.classList.add("feedback-input");
    formDiv.appendChild(emailInput);

    //create paragraphInput
    let paragraphInput = document.createElement("textarea");
    paragraphInput.setAttribute("name", "paragraph");
    paragraphInput.setAttribute("type", "text");
    paragraphInput.setAttribute("placeholder", "Comment");
    paragraphInput.classList.add("feedback-input");
    formDiv.appendChild(paragraphInput);

    //create submit button
    let submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "SUBMIT");
    formDiv.appendChild(submitButton);    
}

function contactPage(){
    init();
    createContactPage();
}

export default contactPage;