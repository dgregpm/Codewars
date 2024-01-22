/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Array(26).fill(0);
    s = s.toUpperCase();
    t = t.toUpperCase();
    if(s.length !== t.length){
        return false;
    }
    for(let i=0;i<s.length;i++){
        map[s.charCodeAt(i) - 65]++;
        map[t.charCodeAt(i) - 65]--;
    }
    for(let j=0;j< map.length;j++){
        if(map[j] !== 0){
            return false;
        }
    }
    return true;
};

console.log(isAnagram("anagram","nagaram"));
