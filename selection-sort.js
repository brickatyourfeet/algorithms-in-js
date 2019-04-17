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

//two more examples

// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
function ssselectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

ssselectionSort([0,2,34,22,10,19,17]);
