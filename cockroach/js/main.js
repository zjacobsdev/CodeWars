/*The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

cockroachSpeed(1.08) == 30

Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

*/

function cockroachSpeed(s) {
  speedCm = (s * 1e5)/3600  
 speedCm = Math.floor(speedCm)
 return speedCm
  
}




cockroachSpeed(1.08) //, 30);
cockroachSpeed(1.09) //, 30);
cockroachSpeed(0) //, 0);