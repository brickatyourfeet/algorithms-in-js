//takes array of prices as parameter and returns the max possible profit for the day
//if no profit is possible, should return -1 - and a zero can be returned
// O(n) runtime - not using nested loops

function maxStockProfit(pricesArr){
    var maxProfit = -1 //preset to -1 so if no profit, will return correctly
    var buyPrice = 0
    var sellPrice = 0
    
    var changeBuyPrice = true
    
    for(let i = 0; i < pricesArr.length; i++){
        if(changeBuyPrice) {
            buyPrice = pricesArr[i]
        }
        sellPrice = pricesArr[i + 1]
        
        if(sellPrice < buyPrice){
            changeBuyPrice = true
        }else{
            var tempProfit = sellPrice - buyPrice
            if(tempProfit > maxProfit){
                maxProfit = tempProfit
            }
            changeBuyPrice = false
        }
    }
    
    return maxProfit
}


console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42]))

console.log(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]))