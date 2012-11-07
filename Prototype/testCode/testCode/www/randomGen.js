var str;
var letters = new Array();
var letter;
var randomLetterArray = new Array(6);
var randomLetterArrayDrop = new Array(6);
var randomLetterArrayDropPercent = new Array(10);
var globalRandomCounter = 6;
var globalRandomCounterPercent = 10;
var tenArray = new Array(10);
var percentLetter = new Array();
//var percent;
var type;
var testCounter = 6;
var tempCounter = 0;
var ten = 10;

var NeedCorrectLetterInArray = false;
var AccidentHitOfCorrectLetter = 0;



function setRandomPercent(percent) {

    var random1 = Math.floor((Math.random() * 26) + 1);
    var random2 = Math.floor((Math.random() * 26) + 1);
    var random3 = Math.floor((Math.random() * 26) + 1);
    var random4 = Math.floor((Math.random() * 26) + 1);
    var random5 = Math.floor((Math.random() * 26) + 1);
    var random6 = Math.floor((Math.random() * 26) + 1);
    var random7 = Math.floor((Math.random() * 26) + 1);
    var random8 = Math.floor((Math.random() * 26) + 1);
    var random9 = Math.floor((Math.random() * 26) + 1);
    var random10 = Math.floor((Math.random() * 26) + 1);


    tenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    ten = 10;
    percentLetter = new Array();
    for (i = 0; i < percent; i++) {
       
        //should be 0-  > current array size...

        // var randomPositionInArray = tenArray[Math.floor((Math.random()*(tenArray.length-1))+0)];
        tValue = Math.floor((Math.random() * ten) + 0);
        var randomPositionInArray = tenArray[tValue];

        ten--;

        percentLetter.splice(0, 0, randomPositionInArray);

        //splice takes position, then number of elements to delete, then elements to add...
        tenArray.splice(tValue, 1);
           

        tempCounter++;
        
        //debug
        //    context.fillText("tenArray[randomPositionInArray] " +tenArray[randomPositionArray, 20, 450);
 

    }

    var tempPosition;
    randomLetterArrayDropPercent = [random1, random2, random3, random4, random5, random6, random7, random8, random9, random10];
    //debug
    // context.fillText(percentLetter.length, 100, 450); 

    for (i = 0; i < percentLetter.length; i++) {
        
        tempPosition = percentLetter[i];
    
        //changed numWord.length to numWord.length-1 which should fix it randoming 0 - > 4 and now random 0->3
        var randomPositionInNumWord = Math.floor((Math.random() * (numWord.length)));
        var letterToAdd = numWord[randomPositionInNumWord];

        randomLetterArrayDropPercent[tempPosition - 1] = letterToAdd;

    }
    percentLetter = []
}

function getRandomPercent(percent) {

    if ((globalRandomCounterPercent - 1) == 9) {
        setRandomPercent(percent);
        globalRandomCounterPercent = 0;
    }
    globalRandomCounterPercent++;
    //Should return the letter within the LetterDrop array not the whole array.

    return randomLetterArrayDropPercent[globalRandomCounterPercent - 1];
    //check this

}

function getRandom() {
    var random1 = Math.floor((Math.random() * 26) + 1);
    var random2 = Math.floor((Math.random() * 26) + 1);
    var random3 = Math.floor((Math.random() * 26) + 1);
    var random4 = Math.floor((Math.random() * 26) + 1);
    var random5 = Math.floor((Math.random() * 26) + 1);
    var random6 = Math.floor((Math.random() * 26) + 1);

    var randomPositionInArray = Math.floor((Math.random() * 5));

    randomLetterArray = [random1, random2, random3, random4, random5, random6];

    randomLetterArray[randomPositionInArray] = numWord[LetterCounters];

    //Will return the whole array as it is at the initial start up
    return randomLetterArray;
}


function setRandomDrop() {
    var random1 = Math.floor((Math.random() * 26) + 1);
    var random2 = Math.floor((Math.random() * 26) + 1);
    var random3 = Math.floor((Math.random() * 26) + 1);
    var random4 = Math.floor((Math.random() * 26) + 1);
    var random5 = Math.floor((Math.random() * 26) + 1);
    var random6 = Math.floor((Math.random() * 26) + 1);

    var randomPositionInArray = Math.floor((Math.random() * 5));

    randomLetterArray = [random1, random2, random3, random4, random5, random6];

    //Will only replace the array with a correct letter when the previous correct letter has reached the bottom
    if (NeedCorrectLetterInArray == true) {
        NeedCorrectLetterInArray = false;
        /*
        //debug
        debugcontext.clearRect(0, 0, can.width, can.height);
        debugcontext.fillText(numWord + " Length " + numWord.length, 100, 450);
        debugcontext.fillText(word1 +" Length " + word1.length, 100, 400);

        //debug*/

        randomLetterArray[randomPositionInArray] = numWord[LetterCounters];
    }
}


/*Will give the correct letter in the word to the player after the initial letter has reached the bottom*/
function getRandomDrop(CorrectLetterAtBottom) {

    if (CorrectLetterAtBottom == true) {
        NeedCorrectLetterInArray = true;
    }
    if (AccidentHitOfCorrectLetter > 0) {
        AccidentHitOfCorrectLetter = 0;
        NeedCorrectLetterInArray = true;
    }
    if ((globalRandomCounter - 1) == 5) {
        setRandomDrop();
        globalRandomCounter = 0;
    }
    globalRandomCounter++;
    //Should return the letter within the LetterDrop array 
    return randomLetterArray[globalRandomCounter - 1];
}



//test function....
function testDrop(type) {

    if (type == 1) {

        if (testCounter >= 6) {
            testCounter = 0;
        }

        getRandomDrop();
        //get random drop was called we set some counter...

    }

    if (type == 2) {
        if (testCounter >= 6) {
            getRandomPercent(5);
        }
        else {
            getRandomDrop();
        }

    }



}





