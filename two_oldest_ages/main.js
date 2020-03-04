/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items.

For example:

    twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]
90
*/


function twoOldestAges(age){
  let nArr = []
  age.sort((a,b) => a - b)
     for(let j = 0; j <= 1; j++){
           result = age.pop()
           nArr.push(result)
         }

         nArr.reverse()
  }




  twoOldestAges([1,2,3,4])
  
  twoOldestAges([13,67,12,23,8,45])
  
  twoOldestAges([9,34, 26, 90])

//   let nArr = []
//   for (let i = 0; i <= age.length; i++){
//      for(let j = 0; j <= 2; j++){
//            result = Math.max.apply( Math, age )

//          }
//          age.
//           nArr.push(result)
 
//     }
//     console.log(nArr)








