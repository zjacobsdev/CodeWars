/*

There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

You are given money in nominal value of n with 1<=n<=1500.

Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

Good Luck!!!

*/

function solve(n) {
    //let minNotesFound = true

    if(n % 10 != 0){
        console.log(-1)
        return -1
    }


   let listOfNomValues = [ 10, 20 ,50, 100,200,500]
   let countOfNotes = 0


    for(let i = listOfNomValues.length - 1; i >= 0; i--){


        console.log(`%c ${listOfNomValues[i]}`, `color: orange;`)

        if(n < listOfNomValues[i]){ continue;}

        if (n % listOfNomValues[i] === 0){ 
            
            countOfNotes = countOfNotes + n/listOfNomValues [i] 
             break
        
        }

        let currentCountOfNotes = Math.floor(n / listOfNomValues[i]) 

        countOfNotes = countOfNotes + currentCountOfNotes 

        console.log(`%c ${currentCountOfNotes}`, 'color: green;')
       // console.log(countOfNotes)
        

       let amtTaken = currentCountOfNotes * listOfNomValues[i] 

       console.log(amtTaken)

       let amtLeft = n - amtTaken 

       console.log(`%c ${amtLeft}`,`color:red;`)
       n = amtLeft 
        console.log(n)
        console.log(`%c ${countOfNotes}`, `color: yellow`)
    }

    console.log(`%c ${countOfNotes}`, `color: yellow`)

    //console.log(countOfNotes)

    
  }















//  solve(770)//, 4, "Wrong result for 770");
//   solve(550)//, 2, "Wrong result for 550");
//   solve(10)//, 1, "Wrong result for 10");
   
 solve(1250)//, 4, "Wrong result for 1250

//  solve(125)//, -1, "Wrong result for 125");
 // solve(666)//, -1, "Wrong result for 666");
//solve(42)//, -1, "Wrong result for 42");