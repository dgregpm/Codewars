/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    const alpha = new Set("0123456789abcdefghijklmnopqrstuvwxyz".split(""));
    s = s.toLowerCase();
    let lo = 0;
    let hi = s.length - 1;

    while(lo < hi) {
        if(!alpha.has(s[lo])){
            lo++;
            continue;
        }
        if(!alpha.has(s[hi])){
            hi--;
            continue;
        }
        if(s[lo] !== s[hi]{
            return false;
        }
        lo++;
        hi--;
    }
    return true;
};

console.log(isPalindrome("0p"));
