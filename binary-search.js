//search for a given value (key) inside of a list (numArray)
//runs in O(log n)  run time - very fast
//can be written iterative or recursive

function binarySearch(numArray, key){
    var midIndex = Math.floor(numArray.length / 2)
    var midElement = numArray[midIndex]
    //have to add the or in the if statement to check for last element
    if(midElement === key || numArray[numArray.length]){
        return true
    }else if(midElement < key && numArray.length > 1){  //includes length must be more than one because if it were one and didn't get returned by the first check, it will not be found in the array - then the splice returns second half of array into the funciton again
        return binarySearch(numArray.splice(midIndex, numArray.length), key)
    }else if(midElement > key && numArray.length > 1){
        return binarySearch(numArray.splice(0, midIndex), key)
    } else return false
    
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 71))

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 11))

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 5))