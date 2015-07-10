


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
	var stars = $('<div class="rating"><span class ="star" id="1">☆</span><span class ="star" id="2">☆</span><span class ="star" id="3">☆</span><span class ="star" id="4">☆</span><span class ="star" id="5">☆</span></div>');


	$('.text-box').append(newEntry.create().append(button).append(stars));

	return false;

});

$('body').on('click', '.delete', function( event ) {
	$(this).parent().remove();
});

$('body').on('click', '.star', function( event) {
	$(this).text('★');
	$(this).closest('.new-box').attr('id', $(this).attr('id'));
});






