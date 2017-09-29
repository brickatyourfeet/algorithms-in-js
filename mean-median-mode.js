

function meanMedianMode(array){
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    }
}


function getMean(array){
    var sum = 0;
    
    array.forEach(num => {
        sum += num
    })
    
    var mean = sum / array.length
    return mean
}

function getMedian(array){
    array.sort(function(a, b) {
        return a-b
    })
    var median
    
    if(array.length % 2 !== 0){
        median = array[Math.floor(array.length / 2)]
    } else {
        var mid1 = array[array.length / 2 - 1]
        var mid2 = array[array.length / 2] 
        median = (mid1 + mid2) / 2
    }
    
    return median
}

//use an object as a hash table
function getMode(array){
    var modeObject = {}
    
    array.forEach(num => {
        if(!modeObject[num]){
            modeObject[num] = 0
        }
        modeObject[num]++
    })
    
    var maxFrequency = 0
    var modes = []
    for (var num in modeObject){
        if(modeObject[num] > maxFrequency){
            modes = [ num ]
            maxFrequency = modeObject[num]
        }else if(modeObject[num] === maxFrequency){
            modes.push(num)
        }
        
    }
    //this is a check to see if all numbers are the same basically
    if(modes.length === Object.keys(modeObject).length) modes = []
    return modes
}

console.log(meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]))

console.log(meanMedianMode([9, 10, 23, 10, 23, 9]))














