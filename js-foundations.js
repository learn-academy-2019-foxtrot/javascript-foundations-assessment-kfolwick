// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 
//15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble 
//by three".

const divisableThree = (number) => {
    if (number % 3 === 0){
        return `${number} is divisible by three.`
    } else {
        return `${number} is not divisible by three.`
    }
}
console.log(divisableThree(3))
console.log(divisableThree(0))
console.log(divisableThree(385))
console.log(divisableThree(-7))

// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will 
//return a sentence using the object properties to describe you.

var helloMe = {
    firstName: "Kayla",
    lastName: "Folwick",
    eyeColor: "blue",
    hairColor: "blonde",
    getData: function () {
        return `My name is ${this.firstName} ${this.lastName}. My eyes are ${this.eyeColor} and my hair is ${this.hairColor}.`
    }
}
console.log(helloMe.getData())
// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

const getEveryOtherItem = (array) => {
  let everyOtherItem = array.filter((word, index) => {
    return index % 2 === 0
  })
  return everyOtherItem.join(" ")
}

console.log(getEveryOtherItem(randomNouns));


// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const capitalizedArray = (array) => {
  let capFirstLetter = array.map((word, index) => {
    let wordArray = word.split("")
    return wordArray[0].toUpperCase() + word.substring(1)
  })
  return capFirstLetter
}

console.log(capitalizedArray(randomNouns));


// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]




// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

const alphabetSoup = (string) => {
  return string.split('').sort().join("")
}
console.log(alphabetSoup(testString1));
console.log(alphabetSoup(testString2));
console.log(alphabetSoup(testString3));


// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

const alphabetSoup2 = (string1, string2, string3) => {
  let newStr = string1 + string2 + string3
  return newStr.split('').sort().join("")
}
console.log(alphabetSoup2(testString1,testString2, testString3));


// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

const indexMatch = (array1, array2) => {
  let comboStr = ""
  for (let i = 0; i < array1.length; i ++) {
    comboStr = comboStr + array1[i].toString() + " " + array2[i].toString() +" "
  }
  return comboStr
}
console.log(indexMatch(amounts, animals));


// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"
