/*
You were camping with your friends far away from home, but when it's time to go back, you realize that you fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.




*/


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
              
    yourDist = mpg * fuelLeft
    
    return (yourDist >= distanceToPump ? true : false)
    
};



zeroFuel(50,25,2) //true
zeroFuel(100,15,3) //true
zeroFuel(78,18,2) //false
zeroFuel(163,20,7.5) //false


console.log(zeroFuel(50,25,2))
console.log(zeroFuel(50,25,2))
console.log(zeroFuel(78,18,2))
console.log(zeroFuel(163,20,7.5))







