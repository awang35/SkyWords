//Type in a new word. Make Sure CAPS ARE ON, as ConverToNum only takes in Uppercase letters
var NextWord = 0;
var categoryMode = 0;


function newWord() {
    
    
    switch (categoryMode) {
            
            //fruits animals flowers verbs
        case (0): var words = ["WORD", "HELLO", "CAT", "DOG", "FATE", "CHARACTER", "FATHER", "MOTHER"]; break;
        case (1): var words = ["APPLE", "BANANA", "PEAR", "DATE", "BLACKBERRY", "CHERRY", "CURRANT", "KIWI"]; break;
        case (2): var words = ["AARDVARK", "BUFFALO", "CAMEL", "FOX", "KOALA", "MONGOOSE", "LEOPARD", "TIGER"]; break;
        case (3): var words = ["ROSE", "CARNATION", "DAISY", "TULIP", "ORCHID", "DAFFODIL", "LILY", "IRIS"]; break;
        case (4): var words = ["RUN", "JUMP", "SHOOT", "FLY", "WRITE", "SING", "TEACH", "SPEAK"]; break;            
    }
   
    
   
    
    var str = words[NextWord];
    if (NextWord == words.length + 1) {
        
        
        
    }
   /* //Debug
    if (NextWord == words.length-1) {
        NextWord = 0;
    }
    //Debug*/
    return str;
}