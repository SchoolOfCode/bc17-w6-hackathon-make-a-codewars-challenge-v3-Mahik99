# README

This project contains code katas to help you practice your skills.

## Instructions 📝

1. Clone the repository
2. Run `npm install` to install all the dependencies.
3. Have a read through the `main.js` file to find out what you need to do for each code kata and implement the solution.
4. Once you think you have the solution, run `npm test` to execute the test cases, if your solution is correct the tests should pass.
5. Share any feedback or improvements you have on the clarity of the instructions, the difficulty level, and effectiveness of the tests.

## Overview

# Code Kata: Get the capital city 🌍

- Description: Write a function that takes the Country name and returns its capital.
- Function name: `getCapitalCity`
- `Countries` variable: provided in main.js file.
  Examples:
- `(getCapitalCity('Japan'));` - It should return Tokyo
- `(getCapitalCity(’India’));` - It should return Country not found.
- Tests cases provided in the main.test.js file

# Bonus Code Kata 🚀:

- Description: Write a function called `isInEurope` that will return true if a country is in Europe and false if it isn't. If a country that isn't listed is entered it should give a message that says for example `sorry Algeria is not in the list of known countries`.
- Function name: `isInEurope`
- Variable: Create a variable that lists the countries from the previous countries variable that are in Europe eg `France`.
  Examples:
- `(isInEurope('Germany'));` // It should return true
- `(isInEurope('Australia'));` // It should return false
- `(isInEurope('Algeria'));` // It should return false and 'sorry Algeria is not in the list of known countries'
- Test cases are provided in the main.test.js file
