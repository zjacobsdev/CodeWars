/*

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity

*/



function capitalize(s){
    let arr1 = []  // array for starting char is upper
    let arr2 = [] // array for starting char

   for(let i= 1; i <= s.length ;i++){ // iterate over the string lenght
        if (i%2 === 0){               // if the remaider of i/2 is 0, it even, change that char at index i to lowercase, else change to Uppercase
            arr2.push( s.charAt(i-1).toLowerCase())
        }else{
                arr2.push( s.charAt(i-1).toUpperCase())
        }
    }

    for(let i= 1; i <= s.length ;i++){  // the reverse of above
        if (i%2 === 0){
            arr1.push( s.charAt(i-1).toUpperCase())
        }else{
            arr1.push( s.charAt(i-1).toLowerCase())
        }
    return[arr2.join(""), arr1.join("")]

    }
}


capitalize("abcdef")//,['AbCdEf', 'aBcDeF']);
capitalize("codewars")//,['CoDeWaRs', 'cOdEwArS']);
capitalize("abracadabra")//,['AbRaCaDaBrA', 'aBrAcAdAbRa']);
capitalize("codewarriors")//,['CoDeWaRrIoRs', 'cOdEwArRiOrS']);

