//returns every pair of numbers from numarray that adds up to the sum
//result returned as array of arrays, any number in numArray can be used in multiple pairs
//O(n) time complexity

function twoSum(numArray, sum){
    var pairs = []
    var hashTable = []
    
    for(var i = 0; i < numArray.length; i++){
        var currentNum = numArray[i]
        var counterpart = sum - currentNum
        if(hashTable.indexOf(counterpart) !== -1) {   //boolean to check if it exists essentially
            pairs.push([currentNum, counterpart])
        }
        hashTable.push(currentNum);
    }
    return pairs
}

console.log(twoSum([1, 6, 4, 5, 3, 3], 7))

console.log(twoSum([40, 11, 19, 17, -12], 28))