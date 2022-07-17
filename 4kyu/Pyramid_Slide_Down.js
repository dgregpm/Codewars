// DESCRIPTION:
// Lyrics...
// Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

//    /3/
//   \7\ 4 
//  2 \4\ 6 
// 8 5 \9\ 3
// Here comes the task...
// Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

// Your task is to write a function that takes a pyramid representation as argument and returns its' largest 'slide down'. For example:

// * With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
// * Your function should return `23`.
// By the way...
// My tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

// Answer:

function longestSlideDown(pyramid) {
    // start from the bottom of pyramid and find largest slides for each cell node, one level at a time
    for(let i=pyramid.length-2;i>=0;i--) {
      // replace cells with largest slide up to current level
      for(let j=0;j<pyramid[i].length;j++){
        let n = pyramid[i][j];
        let l = pyramid[i+1][j];
        let r = pyramid[i+1][j+1];
        // largest slide for simplest pyramid of height = 1
        pyramid[i][j] = n + r > n + l ? n + r : n + l;                
      }
    }
    // largest slide
    return pyramid[0][0];
}