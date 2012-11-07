/*This function shall split the word for you*/

var whold;
function SplitWord(DaWord) {
    var letter = DaWord.split("");
    this.whold = new Array(letter.length);
    for (i = 0; i < letter.length; i++) {
        var cal = ChangeToNum(letter[i]);
        this.whold[i] = cal;
    }
}