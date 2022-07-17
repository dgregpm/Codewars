// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Answer:

function pigIt(str){
    let pigArr = str.split(' ').map((x,i)=>{
        if(x.toLowerCase() != x.toUpperCase()) {
            return x = x.substring(1)+x.charAt(0)+'ay';
        } else {
            return x;
        }
    }).join(' ');
    return pigArr;
}