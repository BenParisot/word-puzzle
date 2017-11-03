//backend


//frontend
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var splitSentences = sentence.split("");
		var newSentence = [];

    splitSentences.forEach(function(letter) {
      if (letter === "a" || letter === "o" || letter === "e" || letter === "i" || letter === "u" || letter === "y") {
				//alert("this is a vowel");
				newSentence.push("-");

      }
      else {
        //alert("this is not a vowel");
				newSentence.push(letter);
      }
    });
		var finalSentence = newSentence.join("");
		document.getElementById("input").reset();

		//alert(finalSentence);



		$("#final").text(finalSentence);


		//console.log(finalSentence);

    // var results = [];
    // for (var currentLetter = 0; currentLetter < splitSentences.length; currentLetter += 1) {
    //   alert(currentLetter);
    // };

    //this isn't working because the for loop is evaluating currentLetter as a number and not an array of strings (letters)

    //console.log(results);
    });

  });
