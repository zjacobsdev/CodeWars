/*
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because
92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer


*/

function squareDigits(num){

    // turns num to str array then to a num array
    let numArr = (""+num).split('').map(Number)

    numArr.forEach((num , i) => 
    //Square num and replace it at the current index

        numArr[i] = num*num 
    )
    
    return Number(numArr.join(""))
  
    
  }

squareDigits(9119) //, 811181

