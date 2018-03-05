const stockPrices= [10,7,5,8,11,22,55]


function getMaxProfit(stockPrices) {
    // calculate the max profit

    //O(n2) solution
    let maxProfit;
    for(let i=0; i<stockPrices.length;i++) {
  
        for(let j=i+1;j<stockPrices.length; j++) {
            let difference= stockPrices[j] - stockPrices[i];
            if(maxProfit === undefined || difference > maxProfit) {
            	maxProfit = difference;   
            }
        }
    }
    return maxProfit;
}

const stockPrices = [10, 7, 5, 4, 3,22];
console.log(getMaxProfit(stockPrices));