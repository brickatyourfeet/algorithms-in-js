//make boolean for ifChanged and reprint array?
//


var grabbedArray = []

function arrayGrab(){
    var arrayLength = document.getElementById('hardcodedArray').rows[0].cells.length
    
    for(var i = 0; i < arrayLength; i++){
    grabbedArray.push(document.getElementById('hardcodedArray').rows[0].cells[i].innerHTML)
        console.log(i)
    }
    //console.log(grabbedArray)
}

console.log(grabbedArray)

function render(){
    grabbedArray[0].innerHTML.style.color = 'blue'
    
}



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