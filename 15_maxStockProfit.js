function maxStockProfit(array) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;

  var changeBuyPrice = true;

  for(var i = 0; i < array.length; i++) {
    if(changeBuyPrice) buyPrice = array[i];
    sellPrice = array[i + 1];

    if(sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      var tempMaxProfit = sellPrice - buyPrice;
      if(tempMaxProfit > maxProfit) maxProfit = tempMaxProfit;
      changeBuyPrice = false;
    }
  }

  return maxProfit;
}

console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42]));
console.log(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]));
