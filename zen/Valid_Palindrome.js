/**
 * @param {string} s
 * @return {boolean}
 */

const nums = new Set(['0','1','2','3','4','5','6','7','8','9']);

const isAlpha = (c) => {
    if(nums.has(c)){
        return true;
    } else if(c.toUpperCase() === c.toLowerCase()){
        return false;
    } else {
        return true;
    }
}

var isPalindrome = function(s) {
    let lo = 0;
    let hi = s.length - 1;

    while(lo < hi) {
        if(!isAlpha(s[lo])){
            lo++;
            continue;
        }
        if(!isAlpha(s[hi])){
            hi--;
            continue;
        }
        if(s[lo].toLowerCase() !== s[hi].toLowerCase()){
            return false;
        }
        lo++;
        hi--;
    }
    return true;
};

console.log(isPalindrome("0p"));