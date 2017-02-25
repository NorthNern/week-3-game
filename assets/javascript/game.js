

		var computerChoices = ["one","two","three","four","five","six"];
		// TODO: Insert more hangman words.  Maybe even allow a second player to input word?

		// TODO: Try using jquery like below?
		// var newDiv = $("<div>");
		// $(newDiv).html("Would you like to play a game? (press y/n)");
		// $("#empty-div").append(newDiv);

		document.getElementById("game-text").innerHTML = "Would you like to play a game? (press y/n)";

		document.onkeyup = function(event) {
			var userPlay = event.key;
			if (userPlay === "y"){
				var computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
				var computerWordDisplay = computerWord;
				var userGuessRemaining = 6;
				var imageHangman = document.createElement("IMG");
				imageHangman.src = "assets/images/6CheerfulPuppy.jpg"
				document.getElementById("game-picture").appendChild(imageHangman)
				document.getElementById("game-guesses").innerHTML = "Letters Guessed:"

				for (var i =0; i<computerWord.length; i++)	{
					computerWordDisplay = computerWordDisplay.substr(0,i) + "_" + computerWordDisplay.substr(i+1);
				}
				

				document.getElementById("game-text").innerHTML = "<br>The word is:  " + computerWordDisplay + ".  You have " + userGuessRemaining + " guesses remaining to guess the word.";
				// for (var userGuessRemaining = 6; userGuessRemaining > 0; userGuessRemaining--) {
				// while (userGuessRemaining > 0) {
				// TODO: Figure out why neither of the above (commented) loops worked within keyup function.

					document.onkeyup = function(event) {

        	// Determine which key was pressed
     	   			var userGuess = event.key;
					var userGuessRight = false;
					document.getElementById("game-guesses").innerHTML += " " + userGuess;
					for (var i = 0; i < computerWord.length; i++)	{
						if (userGuess === computerWord[i])	{
							computerWordDisplay = computerWordDisplay.substr(0,i) + userGuess + computerWordDisplay.substr(i+1);
							userGuessRight = true;	
						} 
					}
					if (userGuessRight === true) {
						document.getElementById("game-text").innerHTML = "That is correct!  The word does contain the letter " + userGuess + ".<br>";
					}
					else {
							document.getElementById("game-text").innerHTML = "That is incorrect!  The word does not contain the letter " + userGuess + ".<br>";
							userGuessRemaining--;
					} 
					//below is behavior when guesses run out, showing victory/defeat and reloading page after time delay or button push.
					if (userGuessRemaining === 0) {
						if (computerWordDisplay === computerWord) {
							document.getElementById("game-text").innerHTML = "<br>Congratulations!! You won the game!  Please enjoy the awesome sense of victory and then try a new word!";
							// TODO: Ask why timeout refresh function isn't working.
							function refresh() {
								setTimeout(function() {
									window.location.reload()
								}, 5000);
							refresh();
							}
						} else {
							var newImg = document.createElement("IMG");
							newImg.src = "assets/images/0PlayDeadPuppy.jpg";
							// var oldImg = document.getElementById("game-picture");
							// document.getElementById("game-picture").replaceChild(newImg, oldImg);
							// TODO:  the above wasn't working, not sure how to get it to work.would rather replace than append
							document.getElementById("game-picture").appendChild(newImg);
							document.getElementById("game-text").innerHTML = "<br>Sorry, you lost the game.  The word was " + computerWord + ".  Please enjoy the humiliating sense of defeat and then try a new word!";
							function refresh() {
								setTimeout(function() {
									location.reload()
								}, 5000);
							refresh();
							}

						}
					} else if (userGuessRemaining < 0) {
						location.reload();
					} else if (computerWordDisplay === computerWord) {
							var newImg = document.createElement("IMG");
							newImg.src = "assets/images/7WinnerPuppy.jpg";
							//uncomment the following couple of lines to try sound:
							//var audio = new Audio('audio_file.mp3');
							//audio.play()
							
							// var oldImg = document.getElementById("game-picture");
							// document.getElementById("game-picture").replaceChild(newImg, oldImg);
							// TODO:  the above wasn't working, not sure how to get it to work.would rather replace than append
							document.getElementById("game-picture").appendChild(newImg);
							document.getElementById("game-text").innerHTML = "<h1>Congratulations!! You won the game!  Please enjoy the awesome sense of victory and then try a new word!";
							// TODO: Ask why timeout refresh function isn't working.
							function refresh() {
								setTimeout(function() {
									window.location.reload()
								}, 5000);
							refresh();
							}
					} else {
						if (userGuessRemaining === 5) {
							var newImg = document.createElement("IMG");
							newImg.src = "assets/images/5HappyPuppy.jpg";
							// var oldImg = document.getElementById("game-picture");
							// document.getElementById("game-picture").replaceChild(newImg, oldImg);
							// TODO:  the above wasn't working, not sure how to get it to work.would rather replace than append
							document.getElementById("game-picture").appendChild(newImg); 
						}
						if (userGuessRemaining === 4) {
							var newImg = document.createElement("IMG");
							newImg.src = "assets/images/4BewilderedPuppy.jpg";
							// var oldImg = document.getElementById("game-picture");
							// document.getElementById("game-picture").replaceChild(newImg, oldImg);
							// TODO:  the above wasn't working, not sure how to get it to work.would rather replace than append
							document.getElementById("game-picture").appendChild(newImg); 
						}
						if (userGuessRemaining === 3) {
							var newImg = document.createElement("IMG");
							newImg.src = "assets/images/3MopeyPuppy.jpg";
							// var oldImg = document.getElementById("game-picture");
							// document.getElementById("game-picture").replaceChild(newImg, oldImg);
							// TODO:  the above wasn't working, not sure how to get it to work.would rather replace than append
							document.getElementById("game-picture").appendChild(newImg); 
						}
						if (userGuessRemaining === 2) {
							var newImg = document.createElement("IMG");
							newImg.src = "assets/images/2SulkyPuppy.jpg";
							// var oldImg = document.getElementById("game-picture");
							// document.getElementById("game-picture").replaceChild(newImg, oldImg);
							// TODO:  the above wasn't working, not sure how to get it to work.would rather replace than append
							document.getElementById("game-picture").appendChild(newImg); 
						}
						if (userGuessRemaining === 1) {
							var newImg = document.createElement("IMG");
							newImg.src = "assets/images/1AngryPuppy.jpg";
							// var oldImg = document.getElementById("game-picture");
							// document.getElementById("game-picture").replaceChild(newImg, oldImg);
							// TODO:  the above wasn't working, not sure how to get it to work.would rather replace than append
							document.getElementById("game-picture").appendChild(newImg); 
						}
						// var img = document.createElement("IMG");
						// img.src = "images/1.gif";
						// var oldImg = document.getElementById('oldImg');
						// document.getElementById('imgDiv').replaceChild(img, oldImg);
							document.getElementById("game-text").innerHTML += "<br>The word is:  " + computerWordDisplay + ".  You have " + userGuessRemaining + " guesses remaining to guess the word.";
							}
					} // document.onkeyup endbracket
				// } //end bracket of while loop which was removed since it wasn't working







		} else {
			document.getElementById("game-text").innerHTML = "Please press 'y' if you'd like to play a game."
		}
		}

		

		

