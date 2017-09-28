//Constant runtime
// Big O Notation:  O(1)

function log(array) {
    console.log(array[0])
    console.log(array[1])
}

log([1, 2, 3, 4])
log([1, 2, 3, 4, 5, 6, 7, 8])

//Note: the time it takes to perform the operation does not change with larger inputs - this is constant runtime

/////////////////////////

//Linear Runtime
//Big O Notation: O(n)

function logAll(array){
    for ( let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

logAll([1, 2, 3, 4])
logAll([1, 2, 3, 4, 5, 6, 7, 8])

//Note: linear runtime - the runtime is proportional to the input

/////////////////////////

//Exponential Runtime
//Big O Notation: O(n^2)

function addAndLog(array){
    for(let i = 0; i < array.length; i++){
        for( var j= 0; j < array.length; j++){
            console.log(array[i] + array[j])
        }
    }
}

addAndLog(['A', 'B', 'C',]) //9 pairs logged
addAndLog(['A', 'B', 'C', 'D']) //16 pairs logged
addAndLog(['A', 'B', 'C', 'D', 'E']) //25 pairs logged

//////////////////////////

//Logarithmic runtime
//Big O Notation: O(log n)

function binarySearch(array, key){
    var low = 0
    var high = array.length -1
    var mid, element
    
    while(low <= high){
        mid = Math.floor((low + high) / 2, 10)
        element = array[mid]
        if(element < key){
            low = mid + 1
        } else if(element > key){
            high = mid -1
        } else {
            return mid
        }
    }
    return -1
}