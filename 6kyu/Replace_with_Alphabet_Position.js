// DESCRIPTION:
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

//Answer:

function alphabetPosition(text) {
    const code = new Map();
    code.set('a',1);
    code.set('b',2);
    code.set('c',3);
    code.set('d',4);
    code.set('e',5);
    code.set('f',6);
    code.set('g',7);
    code.set('h',8);
    code.set('i',9);
    code.set('j',10);
    code.set('k',11);
    code.set('l',12);
    code.set('m',13);
    code.set('n',14);
    code.set('o',15);
    code.set('p',16);
    code.set('q',17);
    code.set('r',18);
    code.set('s',19);
    code.set('t',20);
    code.set('u',21);
    code.set('v',22);
    code.set('w',23);
    code.set('x',24);
    code.set('y',25);
    code.set('z',26);
    
    let newtext = "";
    let n = "";
    
    for(const item of text) {
      n = item.toLowerCase();
      if(code.has(n)) {
        newtext += code.get(n);
        newtext += " ";      
      }
    }
    
    text = newtext.slice(0,-1);  
    
    return text;
  }