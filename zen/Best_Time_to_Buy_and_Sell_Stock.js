/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
     let ptr = 0;
     let profit = 0;

     for(let i=1; i<prices.length;i++){
         if(prices[ptr] < prices[i]){
             profit = Math.max(profit, prices[i] - prices[ptr]);
         } else {
             ptr = i;
         }
     }
     return profit;
}

console.log(maxProfit([2,7,5,6,1,9]));;
