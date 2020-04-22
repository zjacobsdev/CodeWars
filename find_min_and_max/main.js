/*
Implement a function that returns the minimal and the maximal value of a list (in this order).
*/

function getMinMax(arr){

  return [Math.min.apply(Math,arr), Math.max.apply(Math,arr)]
    
  };


getMinMax([1])//,[1,1]
getMinMax([1,2])//,[1,2]
getMinMax([2,1])//,[1,2]