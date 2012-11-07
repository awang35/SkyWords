/*This function does the opposite of convertToNum*/

var currentNum;
function convertToLetters(number) {
    this.currentNum = number;
    var letter;
    switch (currentNum) {
        case (1): letter = "A"; break;
        case (2): letter = "B"; break;
        case (3): letter = "C"; break;
        case (4): letter = "D"; break;
        case (5): letter = "E"; break;
        case (6): letter = "F"; break;
        case (7): letter = "G"; break;
        case (8): letter = "H"; break;
        case (9): letter = "I"; break;
        case (10): letter = "J"; break;
        case (11): letter = "K"; break;
        case (12): letter = "L"; break;
        case (13): letter = "M"; break;
        case (14): letter = "N"; break;
        case (15): letter = "O"; break;
        case (16): letter = "P"; break;
        case (17): letter = "Q"; break;
        case (18): letter = "R"; break;
        case (19): letter = "S"; break;
        case (20): letter = "T"; break;
        case (21): letter = "U"; break;
        case (22): letter = "V"; break;
        case (23): letter = "W"; break;
        case (24): letter = "X"; break;
        case (25): letter = "Y"; break;
        case (26): letter = "Z"; break;
        default: document.writeln("number: " + number);
    }
    return letter;
}