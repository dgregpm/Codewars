// DESCRIPTION:
// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

// Answer:

snail = function(array) {
    let arr = [];
    if(array.length === 0)
        return arr;
    else if(array.length === 1)
        return array[0];
    while(true){
      for(let i=0;i<array[0].length;i++){
          arr.push(array[0][i]);
      }
      array.shift();
      if(array[0].length === 1 && array.length === 1){
          arr.push(array[0][0]);
          return arr;
      }

      for(let i=0;i<array.length;i++){
          arr.push(array[i][array[i].length-1]);
      }
      array.forEach((x,i)=> x.pop());
      if(array[0].length === 1 && array.length === 1){
          arr.push(array[0][0]);
          return arr;
      }

      for(let i=array[0].length-1;i>=0;i--){
          arr.push(array[array.length-1][i]);
      }
      array.pop();
      if(array[0].length === 1 && array.length === 1){
          arr.push(array[0][0]);
          return arr;
      }

      for(let i=array.length-1;i>=0;i--){
          arr.push(array[i][0]);
      }
      array.forEach((x,i)=> x.shift());
      if(array[0].length === 1 && array.length === 1){
          arr.push(array[0][0]);
          return arr;
      }
    }
}