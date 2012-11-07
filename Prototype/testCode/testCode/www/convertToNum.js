/*This function will convert the letters to numbers 
Where A is 1 and Z is 26*/

var currentLetter;
function converToNum(letter) {
    this.currentLetter = letter;
    var numbers = 0;
    switch (currentLetter) {
        case ("A"): numbers = 1; break;
        case ("B"): numbers = 2; break;
        case ("C"): numbers = 3; break;
        case ("D"): numbers = 4; break;
        case ("E"): numbers = 5; break;
        case ("F"): numbers = 6; break;
        case ("G"): numbers = 7; break;
        case ("H"): numbers = 8; break;
        case ("I"): numbers = 9; break;
        case ("J"): numbers = 10; break;
        case ("K"): numbers = 11; break;
        case ("L"): numbers = 12; break;
        case ("M"): numbers = 13; break;
        case ("N"): numbers = 14; break;
        case ("O"): numbers = 15; break;
        case ("P"): numbers = 16; break;
        case ("Q"): numbers = 17; break;
        case ("R"): numbers = 18; break;
        case ("S"): numbers = 19; break;
        case ("T"): numbers = 20; break;
        case ("U"): numbers = 21; break;
        case ("V"): numbers = 22; break;
        case ("W"): numbers = 23; break;
        case ("X"): numbers = 24; break;
        case ("Y"): numbers = 25; break;
        case ("Z"): numbers = 26; break;
        default: document.writeln("Letter: " + letter);
    }
    return numbers;
}