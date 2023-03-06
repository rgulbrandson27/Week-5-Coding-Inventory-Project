// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

console.log("----------QUESTION 1 (ages)----------")

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages)

// // 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// // •	Do not use numbers to reference the last element, find it programmatically, 
// // •	ages[7] – ages[0] is not allowed!

function subtractFirstFromLast(arrayData)  {
    let subtractedData = arrayData[arrayData.length-1] - arrayData[0]   // declares a variable, "subtractedData", that subtracts the first element of ArrayData from the last element of the ArrayData 
    return subtractedData        //stores the new variable to be used later if needed
}

console.log(subtractFirstFromLast(ages))

// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

    ages.push(30)   

    console.log(ages)

    console.log(subtractFirstFromLast(ages))        //reusable function now takes any array and prints first subtracted from last

// 1c.	Use a loop to iterate through the array and calculate the average age. 

let sumTotal = 0
for (i = 0; i < ages.length; i++) {
     sumTotal += ages[i]
}
console.log(sumTotal)       //note: if this is inside the function, it will print each number separately as it is adding

average = sumTotal / ages.length

console.log(average)
console.log("")               //just adding a space between each question here


console.log("----------QUESTION 2 (names)----------")


// 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names)

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 

let totalLetterCount = 0

for(let i = 0; i < names.length; i++) {
    totalLetterCount = totalLetterCount + names[i].length
}
console.log(totalLetterCount)
console.log(totalLetterCount / names.length)

// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let joinedNames = ""
for(let i = 0; i < names.length; i++) {
    joinedNames = joinedNames.concat(" ", names[i])
}
console.log(joinedNames)
console.log("")

console.log("----------QUESTION 3 (last el)----------")

// 3.  How do you access the last element of any array?

let anyArray = ['I am the first element', 2, 3, 4, 5, 'Bob', 'Sally', 'I am the last element']
console.log(anyArray)

console.log(anyArray[0])
console.log("")

console.log("----------QUESTION 4 (first el)----------")

// 4.  How do you access the first element of any array?

console.log(anyArray[anyArray.length - 1])
console.log("")


console.log("----------QUESTION 5 (new array)----------")

// // 5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

const nameLengths = [];             // instantiate a new array to hold the numbers
console.log(nameLengths)            // console wil show the array is  empty

for(i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
}

console.log(nameLengths)
console.log("")


console.log("----------QUESTION 6 (sum)----------")

// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

let sumTotal2 = 0                              //create a new variable to hold the total
for (i = 0; i < nameLengths.length; i++) {
    sumTotal2 += nameLengths[i]                //don't need a "return" here unless I wanted to use the sumTotal2 later (like in the averaging question above)
}
console.log(sumTotal2)
console.log("")

console.log("----------QUESTION 7 (repeat)----------")

// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function repeatWord(word, n) {
    let repeatingWord = ""
    let customIndex = 0
    while (customeIndex < n) {
        repeatingWord += word
        customIndex++
        console.log('index: ', customIndex)
    }

    // for (let i = 0; i <n; i++) {
    // repeatingWord += word 
    // }
    // return repeatingWord
}


//now let's test this
let word = "Coding"
let n = 4

console.log(repeatWord(word, n))
console.log("")

console.log("----------QUESTION 8 (full name)----------")
// 8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
function createFullName(firstName, lastName) {
    return firstName + " " + lastName
}
//let's test this function out...
console.log(createFullName("Raina", "Gulbrandson"))
console.log("")

console.log("----------QUESTION 9 (>100)----------")
 // 9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let myNewArray = [42, 53, 6, 24, 8]

function sumGreaterThan100(array) {
     let sum = 0
 for (let i = 0; i < array.length; i++) {
    sum += array[i]
}   
    if (sum > 100) {
        return true
    }   else   {
 }      return false
}
    console.log(sumGreaterThan100(myNewArray))
     console.log("")

console.log("----------QUESTION 10 (average)----------")

//10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.

function addArrayNumbers(myNewArray) {   
    let sum = 0                          //create a new variable to hold the total
    for (i = 0; i < myNewArray.length; i++) {
    sum += myNewArray[i]       
}   return (sum/myNewArray.length)
}
console.log(addArrayNumbers(myNewArray))
console.log("")

console.log("----------QUESTION 11 (greaterArray)----------")

// 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function greaterArrayAverage(array1, array2) {
    let array1Sum = addArrayNumbers(array1)
    let array2Sum = addArrayNumbers(array2)
    if (array1Sum > array2Sum) {
        return true
    }  else {
        return false
    }
};
//lets call the function using the two number arrays above

console.log(greaterArrayAverage(ages, myNewArray))
console.log("")

console.log("----------QUESTION 12 (buyDrink)----------")

//12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if ((isHotOutside === true) && (moneyInPocket > 10.50)) {
        return true
    }   else   {
        return false
    }
}

console.log(willBuyDrink(true, 15))
console.log("")


console.log("----------QUESTION 13 (feed the dog)----------")

// 13.  Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it

// This function will let someone know if it is time to feed their dog
// It first looks at whether there is already food in the bowl.  
// If there is already food in the bowl, then the dog does not need to be fed
// If there is not food in the bowl, then the owner needs to know how long it has been since they have last filled the bowl
// If both the bowl is empty, and, it has been more than 6 hours since the dog bowl has been filled, then it is time to feed the dog
function feedTheDog(foodInBowl, hoursSinceFed) {             
    if((foodInBowl === false) && hoursSinceFed > 6) {
        return true 
    }   else    {
        return false
    }
}

// A few test cases
console.log(feedTheDog(true, 5))
console.log(feedTheDog(false, 8))
console.log(feedTheDog(false, 9))
console.log(feedTheDog(true, 0))