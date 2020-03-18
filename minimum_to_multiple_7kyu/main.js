/*
Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.

minimum(10, 6)  //= 2

10+2 = 12 which is a multiple of 6
Note
0 is always a multiple of x
Constraints
1 <= a <= 106

1 <= x <= 105


*/
function minimum(a, x) {
    for (var i = 0; i < x ; i++){  // iterate x times

        if(( a - i ) % x === 0 || ( a + i ) % x === 0){     // the condition is true, when the remainder of the difference and sum of and i equal 0

        return i;  // return i, the num to add/sub to make a mutiple of x
        }
    }
   
  }







