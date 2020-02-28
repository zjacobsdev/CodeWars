/* Given a random number:

You have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]

*/
function digitize(n) {

        numString = n.toString() // convert number to string
        let numArray = []       // create an array 
        
      for(i = numString.length; i>0; i--){  // add numString to numArray one character at a time
       
        let num = numString.slice(i-1,i) 
        num = parseInt(num)            
        numArray.push(num) 
        
    }
       return numArray    // returns filled array
    
}

  digitize(35231) //[1,3,2,5,3]
