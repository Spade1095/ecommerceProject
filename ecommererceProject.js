const items = [
    { name: "Green Bananas (6)", price: 1.99,id:0 ,catagorys: ["Fruit", "Fresh Produce", "Unripe", "Firm"], image: "./img/greenBananas.jpg", stock: 10 },
    { name: "Yellow Bananas (6)", price: 2.29,id:1 ,catagorys: ["Fruit", "Fresh Produce", "Everyday Snacks", "Classic"], image: "./img/yellowBananas.jpg" , stock: 10 },
    { name: "Ripe Bananas with Spots (6)", price: 1.49,id:2 ,catagorys: ["Fruit", "Fresh Produce", "Sweet & Soft", "Quick Energy"], image: null, stock: 10 },
    { name: "Overripe/Baking Bananas (Bunch of 6)", price: 1.29,id:3 ,catagorys: ["Fruit", "Baking Essentials", "Smoothie Ingredients", "Zero Waste"], image: null, stock: 10 },
    { name: "Baby Bananas (Bunch of 8)", price: 2.99,id:4 ,catagorys: ["Fruit", "Fresh Produce", "Kids Lunchbox", "Mini Portions"], image: null, stock: 10 },
    { name: "Red Bananas (Bunch of 4)", price: 3.49,id:5 ,catagorys: ["Fruit", "Exotic Produce", "Specialty Items", "Gourmet"], image: null, stock: 10 },
    { name: "Plantains / Green Cooking Bananas (3 pack)", price: 2.49,id:6 ,catagorys: ["Fruit", "Cooking Produce", "Savory & Fried", "Latin Cuisine"], image: null, stock: 10 },
    { name: "Organic Yellow Bananas (Bunch of 5)", price: 2.89,id:7 ,catagorys: ["Fruit", "Organic Produce", "Eco-Friendly", "Everyday Snacks"], image: null, stock: 10 },
    { name: "Single Large Yellow Banana", price: 0.59,id:8 ,catagorys: ["Fruit", "Grab-and-Go", "Single Serving", "On-the-Go"], image: null, stock: 10 },
    { name: "Single Green Banana", price: 0.49,id:9 ,catagorys: ["Fruit", "Grab-and-Go", "Low Sugar", "Meal Prep"], image: null, stock: 10 },
    { name: "Manzano Apple Bananas (Bunch of 5)", price: 3.19,id:10 ,catagorys: ["Fruit", "Exotic Produce", "Tropical Flavors", "Specialty Items"], image: null, stock: 10 },
    { name: "Frozen Banana Chunks (1 lb bag)", price: 3.99,id:11 ,catagorys: ["Fruit", "Frozen Foods", "Smoothie Ingredients", "Meal Prep"], image: null, stock: 10 },
    { name: "Blue Java Ice Cream Bananas (Bunch of 4)", price: 4.49,id:12 ,catagorys: ["Fruit", "Exotic Produce", "Gourmet", "Rare Finds"], image: null, stock: 10 },
    { name: "Slightly Underripe Bananas (Bunch of 7)", price: 2.59,id:13 ,catagorys: ["Fruit", "Fresh Produce", "High Resistant Starch", "Meal Prep"], image: null, stock: 10 },
    { name: "Ultra-Ripe Sweet Bananas (Bunch of 3)", price: 1.19,id:14 ,catagorys: ["Fruit", "Fresh Produce", "Dessert Ingredients", "Natural Sweetener"], image: null, stock: 10 },
    { name: "Bulk Box of Bananas (20 count)", price: 8.99,id:15 ,catagorys: ["Fruit", "Bulk Savings", "Large Families", "Event Catering"], image: null, stock: 10 },
    { name: "Mini Organic Bananas (Bunch of 6)", price: 3.29,id:16 ,catagorys: ["Fruit", "Organic Produce", "Kids Lunchbox", "Eco-Friendly"], image: null, stock: 10 },
    { name: "Half-Ripe Bananas (Bunch of 5)", price: 1.89,id:17 ,catagorys: ["Fruit", "Fresh Produce", "Transitioning", "Balanced Flavor"], image: null, stock: 10 },
    { name: "Ripe Bananas (Single Hand / 12 count)", price: 4.99,id:18 ,catagorys: ["Fruit", "Fresh Produce", "Family Size", "Bulk Savings"], image: null, stock: 10 },
    { name: "Dehydrated Banana Chips (Bag)", price: 2.79,id:19 ,catagorys: ["Fruit", "Pantry Snacks", "Pantry Stable", "Crunchy Snacks"], image: null, stock: 10 }
];
const codes =["JustinSmells", "mosekova", "kachow"];
let cart ={

}
let codeActive = false;
function addCart(add){
if (add.stock>0){
    if(cart[`${add.name}`]){
            cart[add.name].count++
    }else{
            cart[add.name] = add
            cart[add.name]["count"] = 1
        }
    items[add.id].stock = add.stock - 1
    }else{
        return false

}
}
// addCart(items[1])
console.log(cart)

function removeCart(initial, remove){
        for(i=0; i<remove.length; i++){
        if(items.some(item => item.name === remove[i])){
            initial.pop(items.find(item => item.name === remove[i]))
        } 
        else{
            console.log("Item isnt in list")
            return null
        }
    }
    return initial
}

// cart = removeCart(cart, ["Oats"])
// console.log(cart)

function findTotal(cart){
    let total = 0
    for( i=0; i<cart.length; i++){
        total = total + cart[i].price
    }
    return total
}
// console.log(findTotal(cart))

function filter(filter){
    let filteredItems = []
    for(i=0; i<items.length; i++){
        if(items[i].catagorys.includes(filter)){
            filteredItems.push(items[i])
        }
    }
    return filteredItems
}

// console.log(filter("Fruit"))

function applyCode(input){
    if(codes.some(item => item === input) && codeActive === false){
        codeActive = input;
    }else{
        console.log("Invalid Code");
        return "no"
    }
}
// applyCode("oiwerhtio")
// console.log(codeActive)
function removeCode(){codeActive = false}

//html stuff

function inject(item,num,con) {
  const container = document.querySelector(con);
  container.insertAdjacentHTML(
    "beforeend",
`    <div class ="card" data-item="${num}">
        <div clas="cardContainer">
        <img src="${item.image}" alt="img of item">
        </div>
        <h2 class = "card-header">${item.name}</h2>

        <h3 class = "card-price"> Price:${item.price} </h3>
       
        <button class = "card-btn">Add to Cart</button>

    </div>`,
  );
}
function injectList(con){
    const container = document.querySelector(con);
  container.insertAdjacentHTML(
      "beforeend",
` <p> ${cart}</p>`
);
console.log(cart);
}
//make cards
for (let i = 0; i < items.length; i++){
    inject(items[i],i,"#items")
}
//give button on cards 
const buttons = document.querySelectorAll("button.card-btn");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    const id = event.target.closest(".card").getAttribute("data-item");
    addCart(items[id]);
    console.log(cart);
  }),
);
const cartBtn = document.querySelector("button.cart-btn");
  cartBtn.addEventListener("click", function () {
    injectList("#cart");
  })




