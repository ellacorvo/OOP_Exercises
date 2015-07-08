
var Quote = function(quote, author) {
	this.quote = quote || "Error: Quote is required";
	this.author = author || "Error: Author is required";
}
Quote.prototype.create = function() {
	var newBox = $('<div class="new-box"></div>');
	newBox.text("Quote: " + this.quote + " Author: " + this.author + " ");
	return newBox;
}

$('.text-form').on('submit', function() {
	var newQuote = $("#newQuote").val();
	var newAuthor = $("#newAuthor").val();
	var newEntry = new Quote(newQuote, newAuthor);

	var button = $('<button class="delete">Delete Entry</button>');
	var stars = $('<span class="starRating"><input id="rating5" type="radio" name="rating" value="5"><label for="rating5">5</label><input id="rating4" type="radio" name="rating" value="4"><label for="rating4">4</label><input id="rating3" type="radio" name="rating" value="3"><label for="rating3">3</label><input id="rating2" type="radio" name="rating" value="2"><label for="rating2">2</label><input id="rating1" type="radio" name="rating" value="1"><label for="rating1">1</label></span>');


	$('.text-box').append(newEntry.create().append(button).append(stars));

	return false;

});

$('body').on('click', '.delete', function( event ) {
	$(this).parent().remove()
});









