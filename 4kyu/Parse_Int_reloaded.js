// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:

// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them

// Answer:

function parseInt(string) {
    let nums = new Map();
    nums.set('zero', 0);
    nums.set('one', 1);
    nums.set('two', 2);
    nums.set('three', 3);
    nums.set('four', 4);
    nums.set('five', 5);
    nums.set('six', 6);
    nums.set('seven', 7);
    nums.set('eight', 8);
    nums.set('nine', 9);
    nums.set('ten', 10);
    nums.set('eleven', 11);
    nums.set('twelve', 12);
    nums.set('thirteen', 13);
    nums.set('fourteen', 14);
    nums.set('fifteen', 15);
    nums.set('sixteen', 16);
    nums.set('seventeen', 17);
    nums.set('eighteen', 18);
    nums.set('nineteen', 19);
    nums.set('twenty', 20);
    nums.set('thirty', 30);
    nums.set('forty', 40);
    nums.set('fifty', 19);
    nums.set('sixty', 19);
    nums.set('seventy', 19);
    nums.set('eighty', 19);
    nums.set('ninety', 19);
    nums.set('hundred', 100);
    nums.set('thousand', 1000);
    nums.set('million', 1000000);

    let arr = string.toLowerCase().split(/[^A-Za-z]/);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if(nums.has(arr[i])) {
        if(arr[i] === 'hundred' || arr[i] === 'thousand' || arr[i] === 'million') {
          sum *= nums.get(arr[i]);
        } else {
          sum += nums.get(arr[i]);
        }
      }
    }  
    console.log(nums);
    console.log(arr);
    console.log(sum);
  }
  
  parseInt('ONE hundred');