import fowlImg from "./images/fowlwrap.png"
import eggyImg from "./images/eggypie.png"
import bucketImg from "./images/bucket.png"
import filletImg from "./images/fillet.png"

function getFood() {
    class Food {
        constructor (image, name, price, description) {
            this.image = image;
            this.name = name;
            this.price = price;
            this.description = description;
        }
    };

    const fowlWrap = new Food(fowlImg, "Fowl Wrap", "$0.99", "This excellent Fowl Wrap is a true classic, that sure won't leave you hungry.")
    const eggyPie = new Food(eggyImg, "Eggy Pie", "$1.49", "Just like your grandma used to make it, only even better!")
    const bucket = new Food(bucketImg, "Chicken Bucket", "$1.99", "Everything that's great in a chicken, freshly fried!")
    const filletBurger = new Food(filletImg, "Fillet Burger", "$0.99", "The OG burger filled with love, passion, and of course, chicken!")

    return [fowlWrap, eggyPie, bucket, filletBurger]
}

function renderMenu() {
    const food = getFood();
    let foodIndex = 0;


    const content = document.querySelector("#content");

    const container = document.createElement("div")
    container.className = "menuContainer"
    content.appendChild(container)

    const leftArrow = document.createElement("button")
    leftArrow.textContent = "<"
    
    const rightArrow = document.createElement("button")
    rightArrow.textContent = ">"

    const mainWindow = document.createElement("div")
    container.appendChild(leftArrow);
    container.appendChild(mainWindow)
    container.appendChild(rightArrow);

    const foodImg = document.createElement("img");
    foodImg.className = "food"
    const name = document.createElement("p");
    const price = document.createElement("price");
    const description = document.createElement("p");

    function renderFood(food) {
        foodImg.src = food.image;
        name.textContent = food.name;
        price.textContent = food.price;
        description.textContent = food.description;

        mainWindow.appendChild(foodImg);
        mainWindow.appendChild(name);
        mainWindow.appendChild(price);
        mainWindow.appendChild(description);
    }
    renderFood(food[0]);

    rightArrow.addEventListener("click", () => {
        if (foodIndex != food.length - 1) {
            foodIndex++;
        }
        else {
            foodIndex = 0;
        }
        renderFood(food[foodIndex]);
    })

    leftArrow.addEventListener("click", () => {
        if (foodIndex === 0) {
            foodIndex = food.length - 1
        }
        else {
            foodIndex--
        }
        renderFood(food[foodIndex])
    })
}

export default renderMenu