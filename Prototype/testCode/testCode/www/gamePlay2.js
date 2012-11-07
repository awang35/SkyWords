             
var NumberWord = new Array();
function Mode2(DroppedLetter, index) {
   var LetterInWord = false;
    NumberWord = numWord;
    for (i = 0; i < NumberWord.length; i++) {
        if (NumberWord[i] == DroppedLetter) {
            HasLetterReachBottom = true;
            LetterInWord = true;
            word1[i] = "#";
            NumberWord[i] = -1;
            totalPoints += 10;
            LetterCounters++;
            numDrop[index] = getRandomDrop(true);
            break;
        }
    }
    if (LetterInWord == false) {
        totalPoints -= 1000;
        numDrop[index] = getRandomDrop(false);
    }
}