var wordHold = new Array();
var highlightCounter = 0;

//For displaying the word onto the screen sequanitally 
function displayWord() {
    var image = new Image();
    
    image.src = "hubble.png";
    var pat=ctx.createPattern(image,"repeat");
    
    //Get the current word
    var wordhigh = newWord();
    wordhigh = wordhigh.split("");

    //Print the letters in the word onto the screen
    for (i = 0; i < wordhigh.length; i++) {
        wordHold[i] = wordhigh[i];

        //Based on the highlightCounter, highlight the letter starting at 0 only if the Letter counter increments
        if (LetterCounters > highlightCounter) {
            ctx.fillStyle = "White";
            ctx.fillText(wordHold[i], 100 + (i * 20), 475);

            /*Increment highlightCounter so that it will not keep highlight 
            all the words, during the highlighting process highlightCounter 
            should always be lower than the LetterCounters*/
            highlightCounter++;

        } else {
            //Just print the letter without highlight
            //ctx.fillStyle = "blue";
            ctx.fillStyle = pat;
            ctx.fillText(wordHold[i], 100 + (i * 20), 475);
        }
    }
    //Once the full word have been printed, reset the highlight counter to zero
    highlightCounter = 0;
}

//For gameplay2
function displayWord2() {
    
    var image = new Image();
    
    image.src = "hubble.png";
    var pat=ctx.createPattern(image,"repeat");
    
    var wordhigh = newWord();
    wordhigh = wordhigh.split("");

    //run through all the letters within the word and highlight based on the "#"
    for (i = 0; i < wordhigh.length; i++) {
        wordHold[i] = wordhigh[i];
        if (word1[i] != "#") {
           ctx.fillStyle = pat;
            // ctx.fillStyle = "blue";
            ctx.fillText(wordHold[i], 100 + (i * 20), 475);
        }
        else {
            ctx.fillStyle = "White";
            ctx.fillText(wordHold[i], 100 + (i * 20), 475);
        }
    }
}