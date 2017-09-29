



///////////////
//merge sort takes in a single unsorted array as a parameter and splits it into two halves
//its helper function merge takes in two sorted arrays as parameters, merges them into one and returns sorted array


function mergeSort(arr){
    if(arr.length < 2) return arr
    //below here is an implied else block, because we don't reach that unless the if above is not true
    var midIndex = Math.floor(arr.length / 2)
    var firstHalf = arr.slice(0, midIndex)
    var secondHalf = arr.slice(midIndex) //slicing with one argument gives you everything after the specified index
    
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}


function merge(array1, array2){
    var result = []
    while(array1.length && array2.length){
        var minElement
        if(array1[0] < array2[0]){
            minElement = array1.shift()
        }else{
            minElement = array2.shift()
        }
        result.push(minElement)
    }
    
    if(array1.length){
        result = result.concat(array1);   //the concat is adding on array 1 to the end of result - and it is a new combined array
    }else {
        result = result.concat(array2)    //if array1 has elements in it, then array2 must have 1 or more in it, so add those to the result
    }
    
    return result
}


console.log(mergeSort([6000, 34, 203, 3, 746, 200, 967, 234, 654, 1, 0, -22]))