//this is for modifying the current array without pushing elements onto a new array and returning that one
//this uses a temp var to swap elements 
///this iterates through half of the array because if it went all the way through it would reverse it back again since the values are swapped halfway through

function reverseArrayInPlace(array){
    
    for(let i = 0; i < array.length / 2; i++){   
        var tempVar = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = tempVar
    }
    
    return array
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]))