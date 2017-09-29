//fibonacci is the sequence of numbers where every number is the sum of the previous two numbers
// 1, 1, 2, 3, 5, 8, 13, 21, 34
//time complexity   O(2^n)   - because inside of the function - it calls itself two more times --very slow

function fibonacci(position){
    if(position < 3){
        return 1
    }else{
        return fibonacci(position - 1) + fibonacci(position - 2)
    }
}

console.log(fibonacci(6))

//so when this is first called - position is 6 -
//it checks to see if it is less than 3, it is not
//it then returns fibonacci(6-1) + fibonacci(5 - 2)   -- because at that point the position is one less
//on larger numbers this function is just a terrible mess -- it recalculates the same numbers over and over again


