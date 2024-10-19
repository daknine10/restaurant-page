import img from "./images/dealimage.jpg"

function renderHome() {
    const content = document.querySelector("#content")
    const headline = document.createElement("h2");
    const catchPhrase = document.createElement("p");
    const dealImage = document.createElement("img");
    const dealPhrase1 = document.createElement("p");
    const dealPhrase2 = document.createElement("p");

    headline.textContent = "Welcome to the home of the best chicken in San Andreas!"
    catchPhrase.textContent = "Why did the chicken cross the road? For these unbelievable hot deals, of course!"
    dealImage.src = img;
    dealImage.className = "deal";
    dealPhrase1.textContent = "COCK-A-DOODLE-DO! LESS THAN A DOLLAR FOR A MENU!?"
    dealPhrase2.textContent ="Yes, it's true! At Cluckin' Bell we offer full meals for half a price!"

    content.appendChild(headline);
    content.appendChild(catchPhrase);
    content.appendChild(dealImage);
    content.appendChild(dealPhrase1);
    content.appendChild(dealPhrase2);
}

export default renderHome