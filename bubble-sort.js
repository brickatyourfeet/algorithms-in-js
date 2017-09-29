
//returns sorted array using bubble sort
//it takes array.length - 1 passes to sort

//it uses nested loops, the j inside of the i is saying: each time we get through one iteration, the next time will be one less
// i < 0 in the first loop, and j < i in the second makes sure it runs one less time

function bubbleSort (array){
    for(let i = array.length; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(array[j] > array[j + 1]){
                var temp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    
    return array
}


console.log(bubbleSort([5, 3, 8, 2, 1, 4]))

console.log(bubbleSort([20, 20, 23, 465, 0, -1, 44]))