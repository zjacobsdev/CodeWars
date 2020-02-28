/* There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

*/
function betterThanAverage(classPoints, yourPoints) {
  
  classSum = classPoints.reduce (classAverage, 0 ) // get the sum of the array elements
  classAvg = classSum / classPoints.length // take the class sum and divide by the number of people in the class

  if (classAvg < yourPoints){
     return true
  }else{
     return false

  }
  // Calculate class average
function classAverage(total,amt){
  let sum = total + amt
  return sum
}


}

betterThanAverage([2, 3], 5);      //, true);

betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);  // true);

betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9); // false);
