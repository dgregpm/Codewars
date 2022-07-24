// function to determine if a number has a square root

var isSquare = function(n){
    if(n<0)
      return false;
    let sqr = Math.sqrt(n);
    return sqr > Math.floor(sqr) ? false : true;
}