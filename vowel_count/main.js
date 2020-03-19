/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.


*/
function getCount(str) {

    var count = 0  // initializing count to 0

    var vowels = 'a e i o u' // the vowels that need s to be searched in the string

    for(var i = 0; i < str.length; i++){ // iterate over the str parm length and check if vowels ar included
      if(vowels.includes(str[i])){
        count ++
      }
    }
    //console.log(count)
    return count;
  }

  getCount("abracadabra") //, 5







