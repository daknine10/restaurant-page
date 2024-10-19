import img from "./images/team.jpg"

function renderAbout() {
    const content = document.querySelector("#content")
    const headline = document.createElement("h2");
    const about = document.createElement("p");
    about.className = "about";
    const teamImage = document.createElement("img");
    const teamPhrase = document.createElement("p");

    headline.textContent = "About Us"
    about.textContent = "At Cluckin' Bell, we’re all about serving up the freshest, finger-lickin' chicken in San Andreas! Established in 1982 by the ambitious and creative Charlie “Cluck” Bell, our fast-food haven was born from a simple vision: to bring bold flavors and fun to the streets. After working in his family's diner, Charlie realized there was a gap in the market for high-quality, affordable chicken. With a secret blend of spices and a passion for great food, he opened the first Cluckin' Bell in a small corner of Los Santos, quickly turning it into a local sensation. Today, Cluckin' Bell continues to thrive, offering a menu packed with delicious options—from crispy chicken to our famous Cluckin' burgers. Join us for a meal and see why Cluckin' Bell is the ultimate destination for chicken lovers everywhere!"
    teamImage.src = img;
    teamImage.className = "team";
    teamPhrase.textContent = "Our team is commited to making cluckin' good chicken!"
    content.appendChild(headline);
    content.appendChild(about);
    content.appendChild(teamImage);
    content.appendChild(teamPhrase);

}

export default renderAbout