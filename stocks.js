const stockPrices= [10,7,5,8,11,22,55]


function getMaxProfit(stockPrices) {
    // calculate the max profit
    let maxProfit;
    for(let i=0; i<stockPrices.length;i++) {
  
        for(let j=i+1;j<stockPrices.length-1; j++) {
            if(stockPrices[i] < stockPrices[j]) {
                let difference= stockPrices[j] - stockPrices[i];
                if(maxProfit === undefined || difference > maxProfit) {
                    maxProfit = difference;
                }
            }
        }
    }
    return maxProfit;
}
