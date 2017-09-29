//index: index of number in fibonacci sequence
//cache: an array used as memory

//MEMOIZATION:  
//check to see if number already exists in the cache
//if number is not in cache, calculate it and put it in the cache for multiple uses


function fibMemo(index, cache){
    cache = cache || []   //setting up the default cache arg
    if(cache[index]){ //checks to see if its already in the cache
        return cache[index]
    }else {
        if(index < 3 ){
            return 1
        }else {
            cache[index] = fibMemo(index -1, cache) + fibMemo(index - 2, cache)
        }
    }
    
    return cache[index]
}


console.log(fibMemo(12))