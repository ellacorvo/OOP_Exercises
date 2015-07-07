


var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
	
	this.name       = name;
	this.calories   = calories;
	this.vegan      = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;

}

var FoodItem2 = new FoodItem('Tofu', 40, true, true, true);
var FoodItem3 = new FoodItem('Steak Sandwhich', 500, false, false, false);
var FoodItem4 = new FoodItem('Salad', 300, true, true, false);

 FoodItem.prototype.toString = function() {

 	return (this.name + " has " + this.calories + " calories " + " is it vegan? " + this.vegan + " how about gluten free? " + this.glutenFree + " does it have citrus? " + this.citrusFree);

}

console.log(FoodItem3.toString());



var Drink = function(name, description, price, foodItems){
	
	this.name          = name;
	this.description   = description;
	this.price         = price;
	this.foodItems     = foodItems;

}

// var Soda = new Drink("coke", "super-sweet", "$5.00", ["sugar", "water", "food-coloring"])

// Drink.prototype.toString = function() {

//  return ("This " + this.name + " is " + this.description + " and costs " + this.price + " and is made of " + this.foodItems);
// }

// console.log(Soda.toString());


var Plate = function(name, description, price, foodItems){

	this.name = name || " ";
	this.description = description || " ";
	this.price = price || " ";
	this.foodItems = foodItems;
	
}

var Order = function(array) {
	this.order = array;
}

var Burrito = new Plate("Burrito", "tasty", 10.75, ["meat", " beans", " queso", " pico", " bread"])
var Guacomole = new Plate("Guacomole", "green", 8, ["citrus", " avocado", " onions"])
var Marg = new Drink("Margarita", "super-sweet", 5.25, ["sugar", " water", " tequila"])

var plates = [Burrito, Guacomole]

var nextOrder = new Order([Burrito, Guacomole, Marg]);

Plate.prototype.create = function() {
	var menuItem = $('<div id=' + this.name + ' class="menuItem"></div>');
	menuItem.text("This " + this.name + " is " + this.description + " and costs $" + this.price + ", and is made of " + this.foodItems);
	return menuItem;
}
Drink.prototype.create = function() {
	var menuItem = $('<div id=' + this.name + ' class="menuItem"></div>');
	menuItem.text("This " + this.name + " is " + this.description + " and costs $" + this.price + ", and is made of " + this.foodItems);
	return menuItem;
}

$('.plate-container').append(Burrito.create());
$('.plate-container').append(Guacomole.create());
$('.plate-container').append(Marg.create());

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

var totalprice = 0;

$('body').on('click', '.getTotal', function ( event ) {
	var sum = 0;
	$('.itemPrice').each(function()
	{
	    sum += parseFloat($(this).text());
	});
	$('.displayTotal').append(sum);
});



Plate.prototype.toString = function() {

	return ("This " + this.name + " is " + this.description + " and costs " + this.price + " and is made of " + this.foodItems);
}

console.log(Burrito.toString());


Plate.prototype.isVegan = function() {
	var count = 0 
	this.foodItems.forEach(function(element) { 
		if (element === 'meat') {
        count++
    	}
    	})
    	if (count > 0) {
    		return "it is not vegan"
    	}
    	else {
        return "it is vegan"
   		}
}

Plate.prototype.isGlutenFree = function() {
	var count = 0 
	this.foodItems.forEach(function(element) { 
		if (element === 'bread') {
        count++
    	}
    	})
    	if (count > 0) {
    		return "it is not GlutenFree"
    	}
    	else {
        return "it is GlutenFree"
   		}
}

Plate.prototype.isCitrusFree = function() {
	var count = 0 
	this.foodItems.forEach(function(element) { 
		if (element === 'citrus') {
        count++
    	}
    	})
    	if (count > 0) {
    		return "it is not citrus free"
    	}
    	else {
        return "it is citrus free"
   		}
}


console.log(Burrito.isGlutenFree());


var Menu = function(array){
	this.menu = array;
}

var newMenu = new Menu([Burrito, Guacomole, Marg])

Menu.prototype.toString = function(){

	return this.menu.join('\n');
}

console.log(newMenu.toString());

var Restaurant = function(name, description, menu) { 

	this.name  = name;
	this.description = description;
	this.menu = menu;
}

var newRest = new Restaurant("Picos", "Tex-Mex", newMenu)


Restaurant.prototype.toString = function(){

	return this.name + '\n' + this.description + '\n' + this.menu;
}

console.log(newRest.toString());


var Customer = function(dietaryPreference){
	this.dietaryPreference = dietaryPreference
}


