function selectionSort (array) {
    var min = 0
    for(let i = 0; i < array.length; i++){
        min = i
    for(let j = i + 1; j < array.length; j++){
        if(array[j] < array[min]){
            min = j
        }
    }
    if(i != min){
        swap(array, i, min)
    }

}
    return array
}

function swap(array, index1, index2){
    var temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
}

console.log(selectionSort([1,4,-1,0,5,7,8,0]))