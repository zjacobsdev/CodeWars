/* NOT SOLVED
Write a function that returns true if the number is a "Very Even" number.

If a number is a single digit, then it is simply "Very Even" if it itself is even.

If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".

#Examples:

input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 

input(222) => returns true

input(5) => returns false

input(841) => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
Note: The numbers will always be positive!



*/
function isVeryEvenNumber(n) {
   let numStr = n.toString()
    if (numStr.length === 1){
       let num = Number(numStr)
        if(num %2 === 0){
            console.log(true)
            return true
        }else{
            console.log(false)
            return false
        }
    }else{
      let numStrings = numStr.split('')
      let e = numStrings.map((l) => { return l*1 })
        console.log(e)
      let num = e.reduce((sum,n) =>{  return sum + (n*1)})
      console.log(num)
      if(num %2 === 0){
        console.log(true)  
        return true
    }else{
        console.log(false)
        return false
    }

    }
  }


  isVeryEvenNumber(0) // true
  isVeryEvenNumber(4) // true
  isVeryEvenNumber(12) // false
  isVeryEvenNumber(222) // true
  isVeryEvenNumber(4554) // false
  isVeryEvenNumber(1234) // false
  isVeryEvenNumber(400000220) //true
//   const inputs =    [0,    4,    12,    222,  5,     45,    4554,  1234,  88,    24,   400000220];
//   const expecteds = [true, true, false, true, false, false, false, false, false, true, true     ];

// * use while loop to check string length.









