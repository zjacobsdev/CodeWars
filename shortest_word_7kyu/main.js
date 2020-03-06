/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


*/
function findShort(s){
    var arr = s.split(' ')
      console.log(arr)
      var shortWord= arr[0].length
      for(var i=0; i<arr.length; i++){
        if(shortWord > arr[i].length){
          shortWord = arr[i].length
        }
      }
      return shortWord
    }




  
        findShort("bitcoin take over the world maybe who knows perhaps")//, 3);
        findShort("turns out random test cases are easier than writing out basic ones")//, 3); 


