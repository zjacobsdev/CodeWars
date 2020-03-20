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
    let arr1 = []
    //let arr2 = []
   // let result

   for(let i= 1; i <= s.length ;i++){
    if (i%2 === 0){
        arr2.push( s.charAt(i-1).toLowerCase())
    }else{
        arr2.push( s.charAt(i-1).toUpperCase())
  
   // console.log(arr2)
}

    for(let i= 1; i <= s.length ;i++){
        if (i%2 === 0){
            arr1.push( s.charAt(i-1).toUpperCase())
        }else{
            arr1.push( s.charAt(i-1).toLowerCase())
      
       // console.log(arr2)
    }
   // console.log(arr1)
//   return [];
}
console.log(arr1)
console.log(arr2)
}
}


capitalize("abcdef")//,['AbCdEf', 'aBcDeF']);
capitalize("codewars")//,['CoDeWaRs', 'cOdEwArS']);
capitalize("abracadabra")//,['AbRaCaDaBrA', 'aBrAcAdAbRa']);
capitalize("codewarriors")//,['CoDeWaRrIoRs', 'cOdEwArRiOrS']);

