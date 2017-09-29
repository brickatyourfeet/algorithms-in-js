function countUpIterative (num) {
  var i = 1
  while (i <= num) {
    console.log('Iterative:', i)
    i++
  }
}

function countUpRecursive (num, i) {
  console.log('Recursive:', i)
  if (i < num) countUpRecursive(num, i + 1)
}

//countUpIterative(10)
//countUpRecursive(10, 1)

function loopThroughArray (array, i) {
  console.log(array[i])
  if (i < array.length - 1) loopThroughArray(array, i + 1)
}

//loopThroughArray(['a', 'b', 'c'], 0)

//same as above but setting a default for i 
function loopThroughArray (array, i) {
  if (i === undefined) i = 0

  console.log(array[i])
  if (i < array.length - 1) loopThroughArray(array, i + 1)
}

loopThroughArray([undefined,'a', 'b', 'c'])

//same as above BUT logging i before starting recursion
function loopThroughArray (array, i) {
  if (i === undefined) i = 0

  if (i < array.length - 1) loopThroughArray(array, i + 1)
  console.log(array[i])
}

loopThroughArray([undefined,'a', 'b', 'c'])
