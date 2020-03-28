/* NOT SOLVED
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

*/

function findMissingLetter(array){
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    array = array.map((e) =>{ return e.toLowerCase()})

    console.log(array)

    for(let i = 0; i<= alpha.length; i++){
       // console.log(alpha[i])
       // console.log(array[0])
        if(alpha[i] === array[0]){

            for(let j =0; j <= array.length, j++){
                

            }










            // array.forEach(element => {
            //     if(alpha[i] === element){
            //         //letternnot missing
            //     }else{

            //         if (alpha[i + 1] === element){
            //             console.log(alpha[i])
            //         }else if(alpha[i-1] === element) {

            //             console.log(alpha[i+1])
            //         }else{
                        
            //             console.log(alpha[i+1])
            //         }

            //     }
            
            // });

        }else{
            continue
        }
    }

}


findMissingLetter(['a','b','c','d','f']) //, 'e');
findMissingLetter(['O','Q','R','S']) //, 'P')








