/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.
 
Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"] 


IMPROVE:
 use map instead of creating new array
*/

var number = function (array) {

  newArr = []   

  if(array.length){

   for (i=0; i < array.length; i++){

    newArr.push(`${i+1}: ${array[i]}`)

    }

   return newArr
  //your awesome code here
  }else{

    return []
  }

 
};

number([]); //, [], 'Empty array should return empty array');
number(["a", "b", "c"]); //, ["1: a", "2: b", "3: c"], 'Return the correct line numbers');
