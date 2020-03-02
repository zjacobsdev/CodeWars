/*

Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

For Example:

[
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]
So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

Note: You will be always given non-empty array containing Positive values.

*/


function sumOfMinimums(arr) {
    let minArr = []                     // intialize an empty array
    let minNum

    for(let i= 0; i < arr.length; i++){   // loop over the number rows in arr1
        let arr2 = arr[i].length
        for(let j = 0; j < arr2; j++){         // loop elements in arr2
           minNum =  Math.min.apply(Math, arr[i])     // get the smallest number in arr2 in the i row 
        }
        minArr.push(minNum)                     // add minNum to empty minArr
    }
    
    result = minArr.reduce((sum,num)=> sum + num)  // add the minNums in minArr into one result
    // console.log(result)
     return result


}

sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]) //, 9));
sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]) //, 76));
  






