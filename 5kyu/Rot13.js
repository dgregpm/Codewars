// DESCRIPTION:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// Answer:

function rot13(message){
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let arr = str.split('');
    let acc = 0;
    let result = arr.reduce(function(map, obj) {
      map[obj] = acc++;
      return map;
    }, {});

    let narr = message.split('');
    let final = narr.map((x,i) => {
      if(!arr.includes(x.toLowerCase()))
        return x;
      let idx = result[x.toLowerCase()];
      (idx + 13 > 25) ? idx = (idx + 13) - 26 : idx += 13;
      if(message[i] == message[i].toUpperCase())
        return arr[idx].toUpperCase();  
      return arr[idx];
    });
    return final.join('');
  }