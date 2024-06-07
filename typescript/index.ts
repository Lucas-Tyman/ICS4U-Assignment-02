/*
* This program blows up a string into letters.
*
* By: Lucas Tyman
* Version: 1.0
* Since:   2024-06-07
*/

import { createPrompt } from 'bun-promptx'

// Function determines whether a character represents a digit
function isDigit(checkCharacter: string): boolean {
  return !isNaN(parseInt(checkCharacter))
}

function blowUp(userInput) {
  let blownUpString = ""

  for (let counter1 = 0; counter1 < userInput.length; counter1++) {
    // Checks if value is a digit
    if (isDigit(userInput[counter1])) {
      // Checks if next digit is also a number
      if (isDigit(userInput[counter1 + 1])) { 
        // If yes it ignores the previous number
        continue 
      } else {
        // Multiplies letters by their respected values
        let multiplier = parseInt(userInput[counter1])
        for (let counter2 = 0; counter2 < multiplier; counter2++) {
          // Appends characters to a new string 
          // the same amount of times as the digit before it
          blownUpString += userInput[counter1 + 1] 
        }
        continue
      }
    } else { 
      // If value isn't a digit, go to the next value
      continue
    }
  }
  return blownUpString
}


const userInput = prompt("Enter a String that you want to blow up: ");
if (userInput.value !== null) {
  const finalString = blowUp(userInput)
  console.log(`The blown up string is: ${finalString}`)
} else {
  console.log('Invalid Input')
}

console.log('\nDone.')