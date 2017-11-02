//backend


//frontend
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var splitSentences = sentence.split("");

    splitSentences.forEach(function(letter) {
      if (letter === "a" || letter === "o") {
        alert("this is a vowel");
      }
      else {
        alert("this is not a vowel");
      }
    });

    // var results = [];
    // for (var currentLetter = 0; currentLetter < splitSentences.length; currentLetter += 1) {
    //   alert(currentLetter);
    // };

    //this isn't working because the for loop is evaluating currentLetter as a number and not an array of strings (letters)

    //console.log(results);
    });

  });
