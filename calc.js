var cur = "";
var full = "";
var result;
var operator;

$(document).ready(function() {
	$(".number").click(function() {
		if (cur.length <= 12) {
			cur += $(this).html();
			$("#screen").html(cur);
		}	
	});

	$(".oper").click(function() {
		switch ($(this).html()) {
			case "+":
				operator = "+";
				break;
			case "-":
				operator = "-";
				break;
			case "x":
			  operator = "*";
			  break;
			case "\u00F7":
			  operator = "/";
		}

		if (full !== "") {
			full += cur;
			result = eval(full);
			$("#screen").html(result);
			cur = "";
			full += operator;
		}
		else {
			full += cur + operator;
			cur = "";
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
	});

	$(".clear").click(function() {
		cur = "";
		full = "";
		$("#screen").html("0");
	})
});
