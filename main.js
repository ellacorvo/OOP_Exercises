

//...............exercise 1.................//


// var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
	
// 	this.name       = name;
// 	this.calories   = calories;
// 	this.vegan      = vegan;
// 	this.glutenFree = glutenFree;
// 	this.citrusFree = citrusFree;

// }

// var FoodItem2 = new FoodItem('Tofu', 40, true, true, true);
// var FoodItem3 = new FoodItem('Steak Sandwhich', 500, false, false, false);
// var FoodItem4 = new FoodItem('Salad', 300, true, true, false);

//  FoodItem.prototype.toString = function() {

//  	return (this.name + " has " + this.calories + " calories " + " is it vegan? " + this.vegan + " how about gluten free? " + this.glutenFree + " does it have citrus? " + this.citrusFree);

// }

// console.log(FoodItem3.toString());

// var Soda = new Drink("coke", "super-sweet", "$5.00", ["sugar", "water", "food-coloring"])

// Drink.prototype.toString = function() {

//  return ("This " + this.name + " is " + this.description + " and costs " + this.price + " and is made of " + this.foodItems);
// }

// console.log(Soda.toString());

//Prototype Methods to search for food allergies
// Plate.prototype.isVegan = function() {
// 	var count = 0 
// 	this.foodItems.forEach(function(element) { 
// 		if (element === 'meat') {
//         count++
//     	}
//     	})
//     	if (count > 0) {
//     		return "it is not vegan"
//     	}
//     	else {
//         return "it is vegan"
//    		}
// }

// Plate.prototype.isGlutenFree = function() {
// 	var count = 0 
// 	this.foodItems.forEach(function(element) { 
// 		if (element === 'bread') {
//         count++
//     	}
//     	})
//     	if (count > 0) {
//     		return "it is not GlutenFree"
//     	}
//     	else {
//         return "it is GlutenFree"
//    		}
// }

// Plate.prototype.isCitrusFree = function() {
// 	var count = 0 
// 	this.foodItems.forEach(function(element) { 
// 		if (element === 'citrus') {
//         count++
//     	}
//     	})
//     	if (count > 0) {
//     		return "it is not citrus free"
//     	}
//     	else {
//         return "it is citrus free"
//    		}
// }
// test
// console.log(Burrito.isGlutenFree());

//................exercise 2...........................//

//Drink Class Constructor
var Drink = function(name, description, price, foodItems){	
	this.name          = name;
	this.description   = description;
	this.price         = price;
	this.foodItems     = foodItems;
}
//Plate class Constructor
var Plate = function(name, description, price, foodItems){
	this.name = name || " ";
	this.description = description || " ";
	this.price = price || " ";
	this.foodItems = foodItems;	
}
//Order Class Constructor
var Order = function(array) {
	this.order = array;
}
//Create Plate and Drink Class Instances to be passed to Order
var Burrito = new Plate("Burrito", "tasty", 10.75, ["meat", " beans", " queso", " pico", " bread"])
var Guacomole = new Plate("Guacomole", "green", 8, ["citrus", " avocado", " onions"])
var Marg = new Drink("Margarita", "super-sweet", 5.25, ["sugar", " water", " tequila"])

//Create new Order instance, passing in Drink and Plate objects as an array
var nextOrder = new Order([Burrito, Guacomole, Marg]);

//Prototype method for Plate to create DOM elements
Plate.prototype.create = function() {
	var menuItem = $('<div id=' + this.name + ' class="menuItem"></div>');
	menuItem.text("This " + this.name + " is " + this.description + " and costs $" + this.price + ", and is made of " + this.foodItems);
	return menuItem;
}
//Prototype method for Drink to create DOM elements
Drink.prototype.create = function() {
	var menuItem = $('<div id=' + this.name + ' class="menuItem"></div>');
	menuItem.text("This " + this.name + " is " + this.description + " and costs $" + this.price + ", and is made of " + this.foodItems);
	return menuItem;
}
//Call create methods and append to DOM
$('.plate-container').append(Burrito.create());
$('.plate-container').append(Guacomole.create());
$('.plate-container').append(Marg.create());

//Click handlers to prices to order total
$('body').on('click', '#Burrito', function( event ) {
	var price = $('<div class="itemPrice">"price"</div>');
	price.text(Burrito.price);
	$('.order-container').append(price);
});
$('body').on('click', '#Guacomole', function( event ) {
	var price = $('<div class="itemPrice">"price"</div>');
	price.text(Guacomole.price);
	$('.order-container').append(price);
});
$('body').on('click', '#Marg', function( event ) {
	var price = $('<div class="itemPrice">"price"</div>');
	price.text(Marg.price);
	$('.order-container').append(price);
});

//Click handler for button that will total all prices added to order
$('body').on('click', '.getTotal', function ( event ) {
	var sum = 0;
	$('.itemPrice').each(function()
	{
	    sum += parseFloat($(this).text());
	});
	$('.displayTotal').append(sum);
});
//Create prototype method to display objects properties in menu
Plate.prototype.toString = function() {
	return ("This " + this.name + " is " + this.description + " and costs " + this.price + " and is made of " + this.foodItems);
}
Drink.prototype.toString = function() {
	return ("This " + this.name + " is " + this.description + " and costs " + this.price + " and is made of " + this.foodItems);
}
//test//
console.log(Burrito.toString());
console.log(Marg.toString());

//Class Constructor for Menu
var Menu = function(array){
	this.menu = array;
}
//Create new instance of Menu
var newMenu = new Menu([Burrito, Guacomole, Marg])
//Method to display menu's properties as string
Menu.prototype.toString = function(){
	return this.menu.join('\n');
}
//test//
console.log(newMenu.toString());
//Class constructor for restaurant
var Restaurant = function(name, description, menu) { 
	this.name  = name;
	this.description = description;
	this.menu = menu;
}
//New instance of Restaurant with menu object passed in
var newRest = new Restaurant("Picos", "Tex-Mex", newMenu)
//Display restaurant and menu prototypr method
Restaurant.prototype.toString = function(){
	return this.name + '\n' + this.description + '\n' + this.menu;
}
//test//
console.log(newRest.toString());




