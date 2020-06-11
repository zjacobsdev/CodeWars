/*
Write a function named sumDigits which takes a number as input and returns the
sum of the absolute value of each of the number's decimal digits. For example:

  sumDigits(10);  // Returns 1 
  sumDigits(99);  // Returns 18 
  sumDigits(-32); // Returns 5
  
  Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {


  
  let numArr = number.toString().split('').map(Number) // array of numbers

  let sum  = numArr.reduce((current, num , i ) => {
     if (isNaN(i)){

       console.log(i)

      numArr.splice(i,1)

     }

     return  current + num
  })
   
  
  console.log(sum)

}

sumDigits(10); //, 1);
sumDigits(99); //, 18);
sumDigits(-32); //, 5);
