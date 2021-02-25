/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
  Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/*
First attempt:
const maxProfit = (prices) => {
  //find lowest purchase price
  let buyPrice;
  //highest following price
  let sellPrice = 0;

  //iterate over prices array
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      if (buyPrice === undefined || prices[i] < buyPrice) {
        buyPrice = prices[i];
      }
    }

    if (buyPrice && prices[i] > buyPrice && prices[i] > sellPrice) {
      sellPrice = prices[i];
    }
  }
  //return difference, max profit
  return (sellPrice - buyPrice) ? sellPrice - buyPrice : 0;
};
*/

//second pass 2 pointers approach:
var maxProfit = function(prices) {
  let p1 = 0;
  let p2 = 0;
  let max = 0;
  while (p2 < prices.length && p1 < prices.length) {
    max = Math.max(max, prices[p2] - prices[p1]);
    p2++;
    if (prices[p2] <= prices[p1]) p1 = p2;
  }
  return max;
};

//OPTIMIZED
const maxProfit = prices => {
  if (prices.length < 1) {
    return 0;
  }

  let profit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    buy = Math.min(buy, prices[i]);
    profit = Math.max(profit, prices[i] - buy);
  }

  return profit;
};