/*

There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

You are given money in nominal value of n with 1<=n<=1500.

Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

Good Luck!!!

*/

function solve(n) {
    //let minNotesFound = true


   let listOfNomValues = [ 10, 20 ,50, 100,500]
   let countOfNotes




    for(let i = listOfNomValues.length; i >= 0; i--){

        if (n % listOfNomValues[i] == 0){

            return n/listOfNomValues [i]

        }

        currentCountOfNotes = Math.round(n / i) 
       let amtTaken = countOfNotes * listOfNomValues[i] 

       let amtLeft = n - amtTaken 
       n = amtLeft 


        countOfNotes = countOfNotes + currentCountOfNotes 



    }

    console.log(countOfNotes)


  }















  solve(770)//, 4, "Wrong result for 770");
  solve(550)//, 2, "Wrong result for 550");
  solve(10)//, 1, "Wrong result for 10");
   
  solve(1250)//, 4, "Wrong result for 1250

  solve(125)//, -1, "Wrong result for 125");
  solve(666)//, -1, "Wrong result for 666");
solve(42)//, -1, "Wrong result for 42");