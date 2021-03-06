//search for a given value (key) inside of a list (numArray)
//runs in O(log n)  run time - very fast
//can be written iterative or recursive

function binarySearch (array, num) {

    var midIndex = Math.floor(array.length / 2)
    var midElement = array[midIndex]
    
    
    if(midElement === num){
        return midIndex
    }else if(array[array.length - 1] === num){
        return array.length - 1
    }else if(array[0] === num){
        return 0
    }else if(midElement < num && array.length > 1){  
        return binarySearch(array.splice(midIndex, array.length), num)
    }else if(midElement > num && array.length > 1){
        return binarySearch(array.splice(0, midIndex), num)
    } else return -1

}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 71))

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 11))

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 5))