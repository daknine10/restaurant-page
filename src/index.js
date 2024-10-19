import "./styles.css";
import cluckinLogo from "./images/logo.svg";
import renderHome from "./home";
import renderMenu from "./menu";
import renderAbout from "./about";

const content = document.querySelector("#content")
const header = document.querySelector("header");
const logo = document.createElement("img");
logo.className = "cluckin-logo"
logo.src = cluckinLogo

const home = document.querySelector("#home")
const menu = document.querySelector("#menu")
const about = document.querySelector("#about")

header.insertBefore(logo, header.firstChild);

home.addEventListener("click", () => {
    content.textContent =""
    renderHome()
})

menu.addEventListener("click", () => {
    content.textContent =""
    renderMenu()
})

about.addEventListener("click", () => {
    content.textContent =""
    renderAbout()
})


renderHome()