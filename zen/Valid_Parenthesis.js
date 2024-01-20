/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const par = new Map();
    const st = [];

    par.set(')','(');
    par.set(']','[');
    par.set('}','{');

    for(let i=0;i<s.length;i++){
        const ch = s[i];
        if(par.has(ch)){
            if(st.length === 0){
                return false;
            } else if(st.pop() !== par.get(ch)){
                return false;
            }
        } else {
            st.push(ch);
        }
    }
    if(st.length === 0){
        return true;
    } else {
        return false;
    }
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));

