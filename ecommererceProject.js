const items = [
    { name: "Apple", price: 0.99, catagorys: ["Fruit", "Produce", "Snack"],image: null, stock: 10 },
    { name: "Banana", price: 0.59, catagorys: ["Fruit", "Produce"], image: null, stock: 10},
    { name: "Chicken Breast", price: 6.99, catagorys: ["Meat", "Protein", "Fresh"], image: null, stock: 10},
    { name: "Whole Milk", price: 3.49, catagorys: ["Dairy", "Beverage"], image: null, stock: 10 },
    { name: "Cheddar Cheese", price: 4.99, catagorys: ["Dairy", "Snack"], image: null, stock: 10 },
    { name: "Bread", price: 4.29, catagorys: ["Bakery", "Grains"], image: null, stock: 10 },
    { name: "Brown Rice", price: 2.89, catagorys: ["Grains", "Pantry"], image: null, stock: 10 },
    { name: "Pasta", price: 1.99, catagorys: ["Grains", "Pantry"], image: null, stock: 10},
    { name: "Olive Oil", price: 8.99, catagorys: ["Pantry", "Cooking"], image: null, stock: 10 },
    { name: "Eggs", price: 3.99, catagorys: ["Dairy & Eggs", "Protein"], image: null, stock: 10 },
    { name: "Ground Beef", price: 7.49, catagorys: ["Meat", "Protein", "Fresh"], image: null, stock: 10 },
    { name: "Salmon Fillet", price: 9.99, catagorys: ["Seafood", "Protein", "Fresh"], image: null, stock: 10 },
    { name: "Broccoli", price: 2.29, catagorys: ["Vegetable", "Produce"], image: null, stock: 10},
    { name: "Spinach", price: 2.99, catagorys: ["Vegetable", "Produce", "Leafy Greens"] , image: null, stock: 10},
    { name: "Greek Yogurt", price: 4.49, catagorys: ["Dairy", "Breakfast"], image: null, stock: 10 },
    { name: "Almonds", price: 6.49, catagorys: ["Snack", "Nuts", "Pantry"], image: null, stock: 10 },
    { name: "Oats", price: 3.19, catagorys: ["Grains", "Breakfast", "Pantry"], image: null, stock: 10},
    { name: "Peanut Butter", price: 4.19, catagorys: ["Pantry", "Spread"], image: null, stock: 10 },
    { name: "Avocado", price: 1.49, catagorys: ["Fruit", "Produce"], image: null, stock: 10},
    { name: "Tomato", price: 1.99, catagorys: ["Vegetable", "Produce"], image: null, stock: 10}
];
const codes =["JustinSmells", "mosekova", "kachow"];
let cart ={}
    
let codeActive = false;
function addCart(add){
if (add.stock>0){
    if(Object.hasOwn(cart,add)){
            cart[add.name].count++
    }else{
            cart[add.name] = add
            cart[add.name]["count"] = 1
        }
    item => item
    //look for item in the list items and chang its stock
    }else{
        //give error message

}
}
addCart(items[1])
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



