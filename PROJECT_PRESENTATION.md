# Code Kata ideas

![Alt text](./Code%20Kata.png)

# Plan 📝:

## MVP 1 🌍:

Write a function that takes the Country name and returns its capital.

- User will be provided with some countries and their capitals as a variable above the function, they need to be able to create a function that will take in the country name and return its capital. If the country doesn't exist/ is not found then they need to return a message saying 'Country not found'.

- List of countries will vary, some will be in Europe and others won't (relevant for bonus task). Countries will be objects (key value pairs - the name of the country : its Capital) For example:

`const countries =  {
    France : "Paris",
    Italy: "Rome",
    Japan : "Tokyo",
    Nigeria : "Abuja",
    Spain : "Madrid",
    Australia : "Canberra",
    Pakistan : "Islamabad",
    Germany: "Berlin",
  }`

- Users need to be able to access the object countries, and extract the value from the key value pair which would be the capital of the city. This would be inputted as a parameter into the function and then they would need to use the square brackets to access the property of countries object in the function body. They can do this with an if statement, returning the capital of the city, else it will retrun the error message 'Country not found'.

- To test using Vitest, I need to be able to check that the name of the country is expected to match the correct capital. For example, expect Japan to be Tokyo. I also need a test to account for a country that isn't found where the expected output would be 'Country not found'.

# Bonus Challenge 🚀:

## MVP 2 🤯:

- For the bonus challenge, users need to be able to create a function that will be able to return true if a country is in Europe and false if it isn't. They should also account for typo's and countries which arent listed by returning a message which says `sorry `${...}` is not in the list of known countries`.

- First users will need to create a variable which will store a list of the countries in Europe from the variable that was created for the first MVP.

- Inside the function, users will need to input a parameter. Next they should use an if statement to check if the 'country' doesn't in the countries variable (this accounts for typo's, any countries that aren't lsited etc). If it doesn't exist it needs to console log an error message. Else it should return true/ false.

- Since the variable for the countries in Europe should be an array, users can use the `includes()` method to check if all the countries in the countries variable are included in the countries in Europe array. This method will return true if the country is in Europe and false if it isn't.

- Testing: I need to create a test that will expect the value to be true if the country eg France is in Europe and a test to expect the value to be false if the country eg Pakistan is not in Europe. I also need to test for an invalid input eg a typo or a country not listed.
