// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//Answer:

function duplicateEncode(word){
    function containCount(l, w) {
      let n = 0;
      for(const item of w) {
        if(l.toUpperCase() === item.toUpperCase()) {
          n += 1;
        }
      }
      return n;
    }
    let newword = "";
    for(const item of word) {
      let x = containCount(item, word);
      if(x === 1) {
        newword += "(";
      } else {
        newword += ")";
      }
      
    }
    return newword;
  }