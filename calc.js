var cur = "";
var full = "";
var result;

$(document).ready(function() {
	$(".number").click(function() {
		if (cur.length <= 12) {
			cur += $(this).html();
			$("#screen").html(cur);
		}	
	});

	$(".oper").click(function() {
		if (full !== "") {
			full += cur;
			result = eval(full);
			$("#screen").html(result);
			cur = "";
			full += $(this).html()
		}
		else {
			full += cur + $(this).html();
			cur = "";
			console.log(full);
		}
	});

	$(".point").click(function() {
		if (cur.indexOf(".") < 0) {
			cur += ".";
			$("#screen").html(cur);
		}
	});

	$(".equals").click(function() {
		full += cur;
		result = eval(full);
		$("#screen").html(result);
		full = "";
		cur = "";
		console.log(result);
	});

	$(".clear").click(function() {
		cur = "";
		full = "";
		$("#screen").html("0");
	})
});
