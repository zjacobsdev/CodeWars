/*

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number

*/
function persistence(num, i = 0) { 
  if(num.toString().length === 1) { console.log(i); return i }  // returns i if the number of digits in num is 1.
  let numArr = [...num +''].map(n => n*1)            // Using ES6 syntax spread operator: Add the digits of num in an array as strings. then map each digit into a new array back into a integer.  
  let arr = numArr.reduce((sum,i)=> sum*i)             // multiply the digits to one another
  i++
   persistence(arr,i)   // recursion 
}

persistence(39)//,3);
persistence(4)//,0);
persistence(25)//,2);
persistence(999)//,4);

