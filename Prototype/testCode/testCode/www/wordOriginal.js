//Type in a new word. Make Sure CAPS ARE ON, as ConverToNum only takes in Uppercase letters
var NextWord = 0;
function newWord() {
    var words = ["WORD", "HELLO", "CAT", "DOG", "FATE", "CHARACTER", "FATHER", "MOTHER"];
    var str = words[NextWord];
    if (NextWord == words.length + 1) {
        alert("Congrats on Beating the Demo");
    }
   /* //Debug
    if (NextWord == words.length-1) {
        NextWord = 0;
    }
    //Debug*/
    return str;
}