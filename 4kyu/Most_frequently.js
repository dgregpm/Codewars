// DESCRIPTION:
// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]
// Bonus points (not really, but just for fun):
// Avoid creating an array whose memory footprint is roughly as big as the input text.
// Avoid sorting the entire array of unique words.


// Answer:

function topThreeWords(text) {
  let arrObj = {};
  let word = "";
  let result = [];
  for(let i=0;i<text.length;i++) {
    if(text[i].toUpperCase() !== text[i].toLowerCase() || text[i] === '\'') {
      word += text[i].toLowerCase();
      if(i === text.length - 1) {
        arrObj[word] ? arrObj[word]++ : arrObj[word] = 1;
      }
    } else if(word.length > 0) {
      arrObj[word] ? arrObj[word]++ : arrObj[word] = 1;
      word = "";
    }
  }
  for(let j=3;j>0;j--){
    let max = 0;
    let maxProp = "";
    for(const c in arrObj) {
      if(arrObj[c]>max){
        max = arrObj[c];
        maxProp = c;
      }
    }
    delete arrObj[maxProp];
    result.push(maxProp);
  }
  return result;
}

function topThreeWords2(text) {
    let arr = [];
    let word = "";
    let textArr = text.split('');
    
    for(const [i, c] of textArr.entries()) {
      if(c.toUpperCase() !== c.toLowerCase() || c === '\'') {
        word += c.toLowerCase();
    
        if(i === text.length-1) {
            arr.push(word);
        }
      } else if(word.length > 0){
        arr.push(word);
        word = "";
      }    
    }
  
    let n = 0;
    let wordList = arr.reduce((acc,cval) => {
        
        acc[cval] ? acc[cval]++ : acc[cval] = 1;
        return acc;
        
    },{});

   
    let arrSort = [];
    for(const item in wordList) {
        if(item !== '\'')
            arrSort.push([item, wordList[item]]);
    }
    arrSort.sort((a,b)=>{
        return b[1] - a[1];
    });
   
    let cnt=0;
    let arr2 = [];
    while(cnt<arrSort.length && cnt < 3) {
        arr2.push(arrSort[cnt][0]);
        cnt++;
    }
    return arr2;
  }

  console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));