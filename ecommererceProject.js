const items = [
    { name: "Green Bananas (6)", price: 1.99,id:0 ,catagorys: ["Fruit", "Fresh Produce", "Unripe", "Firm"], image: "./img/greenBananas.jpg", stock: 10 },
    { name: "Yellow Bananas (6)", price: 2.29,id:1 ,catagorys: ["Fruit", "Fresh Produce", "Everyday Snacks", "Classic"], image: "./img/yellowBananas.jpg" , stock: 10 },
    { name: "Ripe Bananas with Spots (6)", price: 1.49,id:2 ,catagorys: ["Fruit", "Fresh Produce", "Sweet & Soft", "Quick Energy"], image: "./img/bananaSpot.jpg", stock: 10 },
    { name: "Overripe/Baking Bananas (Bunch of 6)", price: 1.29,id:3 ,catagorys: ["Fruit", "Baking Essentials", "Smoothie Ingredients", "Zero Waste"], image: "./img/overripeBanana.jpg", stock: 10 },
    { name: "Baby Bananas (Bunch of 8)", price: 2.99,id:4 ,catagorys: ["Fruit", "Fresh Produce", "Kids Lunchbox", "Mini Portions"], image: "./img/babyBanana.jpg", stock: 10 },
    { name: "Red Bananas (Bunch of 4)", price: 3.49,id:5 ,catagorys: ["Fruit", "Exotic Produce", "Specialty Items", "Gourmet"], image: "./img/redBanana.jpg", stock: 10 },
    { name: "Plantains / Green Cooking Bananas (3 pack)", price: 2.49,id:6 ,catagorys: ["Fruit", "Cooking Produce", "Savory & Fried", "Latin Cuisine"], image: "./img/plantains.jpg", stock: 10 },
    { name: "Organic Yellow Bananas (Bunch of 5)", price: 2.89,id:7 ,catagorys: ["Fruit", "Organic Produce", "Eco-Friendly", "Everyday Snacks"], image: "./img/organicBanana.jpg", stock: 10 },
    { name: "Single Large Yellow Banana", price: 0.59,id:8 ,catagorys: ["Fruit", "Grab-and-Go", "Single Serving", "On-the-Go"], image: "./img/largeBanana.jpg", stock: 10 },
    { name: "Single Green Banana", price: 0.49,id:9 ,catagorys: ["Fruit", "Grab-and-Go", "Low Sugar", "Meal Prep"], image: "/.img/singleGreenBanana.jpg", stock: 10 },
    { name: "Manzano Apple Bananas (Bunch of 5)", price: 3.19,id:10 ,catagorys: ["Fruit", "Exotic Produce", "Tropical Flavors", "Specialty Items"], image: "./img/manzanoBanana.jpg", stock: 10 },
    { name: "Frozen Banana Chunks (1 lb bag)", price: 3.99,id:11 ,catagorys: ["Fruit", "Frozen Foods", "Smoothie Ingredients", "Meal Prep"], image: "./img/bananaChuncks.jpg", stock: 10 },
    { name: "Blue Java Ice Cream Bananas (Bunch of 4)", price: 4.49,id:12 ,catagorys: ["Fruit", "Exotic Produce", "Gourmet", "Rare Finds"], image: "./img/blueBanana.jpg", stock: 10 },
    { name: "Slightly Underripe Bananas (Bunch of 7)", price: 2.59,id:13 ,catagorys: ["Fruit", "Fresh Produce", "High Resistant Starch", "Meal Prep"], image: "./", stock: 10 },
    { name: "Ultra-Ripe Sweet Bananas (Bunch of 3)", price: 1.19,id:14 ,catagorys: ["Fruit", "Fresh Produce", "Dessert Ingredients", "Natural Sweetener"], image: "./img/sweetBanana.jpg", stock: 10 },
    { name: "Bulk Box of Bananas (20 count)", price: 8.99,id:15 ,catagorys: ["Fruit", "Bulk Savings", "Large Families", "Event Catering"], image: "./", stock: 10 },
    { name: "Mini Organic Bananas (Bunch of 6)", price: 3.29,id:16 ,catagorys: ["Fruit", "Organic Produce", "Kids Lunchbox", "Eco-Friendly"], image: "./", stock: 10 },
    { name: "Half-Ripe Bananas (Bunch of 5)", price: 1.89,id:17 ,catagorys: ["Fruit", "Fresh Produce", "Transitioning", "Balanced Flavor"], image: "./", stock: 10 },
    { name: "Ripe Bananas (Single Hand / 12 count)", price: 4.99,id:18 ,catagorys: ["Fruit", "Fresh Produce", "Family Size", "Bulk Savings"], image: "./", stock: 10 },
    { name: "Dehydrated Banana Chips (Bag)", price: 2.79,id:19 ,catagorys: ["Fruit", "Pantry Snacks", "Pantry Stable", "Crunchy Snacks"], image: "./", stock: 10 }
];
const codes =["JustinSmells", "My naem is Mosekova and I need you to fix my printer", "kachow"];
let cart ={};
let stuffInCart=[];
let codeActive = false;
function addCart(add){
if (add.stock>0){
    if(cart[`${add.name}`]){
            cart[add.name].count++
    }else{
            cart[add.name] = add
            cart[add.name]["count"] = 1
            stuffInCart.push(add.name);
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
            return 0
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
//finish this
function cartToText(cart){
    let str = ""
   console.log(Object.entries(cart))
    for (let i = 0; i < Object.keys(cart).length; i++){
        // console.log(Object.entries(cart))
        str = str+ "/n "+ String(i+1)+ ": " +stuffInCart[i]+" "+cart[stuffInCart[i]].price + " "+cart[stuffInCart[i]].count +"x"
    };
    return str
};
//html stuff

function inject(item,num,con) {
  const container = document.querySelector(con);
  container.insertAdjacentHTML(
    "beforeend",
`    <div class ="card" data-item="${num}">
        <div clas="cardContainer">
        <img class ="card-img"src="${item.image}" alt="img of item">
        </div>
        <h2 class = "card-header">${item.name}</h2>

        <h3 class = "card-price"> Price:${item.price} </h3>
       
        <button class = "card-btn">Add to Cart</button>

    </div>`,
  );
};
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
    // console.log(cart);
    console.log(cartToText(cart));
  }),
);
//open cart
const cartBtn = document.querySelector("#open");
const popUp = document.querySelector("div.pop");
const reciet = document.querySelector("#reciet");
  cartBtn.addEventListener("click", function () {
    popUp.style.display = "flex";
    reciet.textContent= cartToText(cart);
  })
  //close cart
const cartBtnOpen = document.querySelector("#close");
cartBtnOpen.addEventListener("click", function(){
    popUp.style.display = "none";
})
//coupon code btn
document.querySelector("form").addEventListener("submit", function(event){

        event.preventDefault()
        console.log("submitted")
        let x = document.querySelector("#coupon")
        console.log(x.value)
        x.value = ""
});



