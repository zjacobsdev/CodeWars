/*
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

*/

function narcissistic(value) {
    let arr = []
    let strNum =value.toString()    
    for(let i = 0 ; i < strNum.length; i++){
       arr.push(parseInt(strNum[i]))
    }
    // console.log(arr)
    // console.log(strNum)

    for( nums of arr){
        Math.pow(nums,3)
    }
//   let newArr = arr.map( el=>{ 
//     console.log(el)
//     console.log(strNum.length) 

//     Math.pow(el,value.length)
// })

    console.log(arr)

   }
   
narcissistic( 7 )       //, true, "7 is narcissistic" 
    
narcissistic( 371 )   //, true, "371 is narcissistic"

    
narcissistic( 456 )   //, false, "456 is narcissistic"







