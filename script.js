

console.log("asdasdasd");

$("#dropdownimg")
.on("click", function () {

	$("#tableofcontentsdiv")
	.toggle("'slide', {direction: 'right' }, 1000");

	$("#dropdownimg")
	.toggleClass('flip');


});