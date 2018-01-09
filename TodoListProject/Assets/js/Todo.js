// Strike-through Specific Todos By Clicking
// $("li").on("click", function() {
// 	// if li is gray 
// 	if ($(this).css("color") === "rgb(128, 128, 128)") {
// 		// turn it black 
// 		$(this).css({
// 		color 				: "black",
// 		textDecoration		: "none" 
// 		}); 
// 	} else { 
// 		// turn it gray
// 		$(this).css({
// 		color 				: "gray",
// 		textDecoration		: "line-through" 
// 		});
// 	} 
// });

// Alternate Solution
// When an "li" is clicked inside the ul, 
// run the code inside the call back function.
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
// When an "span" is clicked inside the ul, 
// run the code inside the call back function. 
$("ul").on("click", "span", function(event){
	// removing its parent's element (i.e., an li)
	$(this).parent().fadeOut(1000, 
		// apply callback function to remove this span's parent li
		function() {
			$(this).remove();
		});

	// stop event calls propagating up
	event.stopPropagation(); 
});

$("input[type='text']").keypress(function(event) {
	// check if the key pressed is an enter key 
	if (event.which === 13) {
		// get the text value from the input box
		var todoText = $(this).val();
		// create a new li and add to ul element 
		// remember to use "on" instead of "click" in the <li> and <ul>
		$("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span> "+ todoText +"</li>");
		$(this).val("");
	}
});

// add click listener to edit button 
$(".fa-edit").on("click", function() {
	$("input[type='text']").fadeToggle(100);
});








