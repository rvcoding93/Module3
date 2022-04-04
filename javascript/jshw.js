// Create a FUNCTION that: takes in a number and returns the sum of all numbers up to and including the number passed in.


/*  1) create array with sring of numbers
    2) 


numbers = [1,2,3,4,5,6,7,7,8,9]

function takeInNumber (number) {
    for (i = 0; i<= number; ++i)
    
    
}
*/

// function binarySearch(arr, item) {
//     let startIndex = 0;                                             // first value in the array = start index
//     let endIndex = arr.length - 1;                                  // last value in the array = end index

//     while (startIndex < endIndex) {
//         let middleIndex = Math.floor((startIndex + endIndex) / 2);  // middle index is determined by adding first and last index / 2

//         if (arr[middleIndex] === item) {                            // if the middle index in the array = item, pint out FOUND...
//             return `Found at index ${middleIndex}`;
//         }

//         if (arr[middleIndex] < item) {                              // if middle index is less than the item, it becomes the new start index +1
//             startIndex = middleIndex + 1;
//         } else {
//             endIndex = middleIndex - 1;                             // if above condition does not apply, middle index is = to the item, it becomes the new start index +1
//         }
//     }

//     return "Not Found";
// }

//console.log(binarySearch([1905, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000], 1960));
//output: Found at index 3



//let fibArr = [0,1,1,2,3,5,8,13,21]


//=====ITERATIVE FIB ALGORITHM=======================================================================================================
function fibonacci (n) {
    let arr = [0,1];
    for (let i = 2; i < n + 1; i++ ) {
        arr.push( arr [i-2] + arr [i-1] )
    }
    return arr[n]
}

console.log (fibonacci(8))
//=====RECURSIVE FIB ALGORITHM=======================================================================================================
function fib(n) {
    if (n < 2){
      return n
    }
    return fib(n - 1) + fib (n - 2)
  }

  console.log (fib(8))

  