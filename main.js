$(document).ready(function(){

	$("#output").hide();
	$("#start").click(startGame);
	$("#checkLock").click(openLock);
	var ourSecretNum = "";

	function startGame(){
		ourSecretNum = Math.floor(Math.random() * (999-100+1) + 100).toString();
		console.log(ourSecretNum);
		$("#start").hide();
		$("#output").show();
		for(i = 0; i < $("input[type='number']").length; i++) {
			$("input[type='number']").eq(i).val("5");
		}

		$("small").html("Red Background guess in low : Blue Background guess in high");
	}

	function openLock(){
		var win = 0;

		for(i = 0; i < $("input[type='number']").length; i++){
			var guessNumber = $("input[type='number']").eq(i);
			var result = checkNumber(guessNumber.val(), ourSecretNum[i]);
			guessNumber.css({
				backgroundColor: result.backgrd
			})
			if(result.checker) {
				win++
			}
		}

		if(win == 3) {
			$("#start").show();
			$("small").html("You got it " + ourSecretNum);
		}
	}


	function checkNumber(a, b) {
		var response = {};
			if(a < b) {
				response.checker = false;
				response.backgrd = "red";

			}
			if(a > b) {
				response.checker = false;
				response.backgrd = "blue";
				
			}
			if(a == b) {
				response.checker = true;
				response.backgrd = "green";
				
			}
			return response;
	}










	$("input[type='number']").css({
		color: "white",
		fontSize: "3rem",
		width: "60px",
		border: "1px solid black",
		backgroundColor: "black"
	});

	$(".btn").css({
		backgroundColor: "black",
		color: "white",
		width: "160px",
		fontSize: "1.5em",
		padding: "15px",
		margin: "25px auto 0px",
		border: "1px solid black",
		textAlign: "center"
	});

	$("#output").css({
		backgroundColor: "#333",
		width: "300px",
		padding: "15px",
		border: "1px solid black",
		textAlign: "center"
	});

	$("small").css({
		color: "white",
		fontSize: "1em",
		padding: "15px",
		marginBottom: "15px",
		display: "block"
	});

	$("#start").css({
		marginLeft: "70px"
	});



});