// Hello challenger! Your task is to write a function named `getCapitalCity` that takes the Country and returns its capital. If the country doesn't exist/is not found or even if it is not spelled correctly then it needs to return a message saying 'Country not found'. You will be provided with a variable containing countries and their capitals that was already created:

export const countries = {
  France: "Paris",
  Italy: "Rome",
  Japan: "Tokyo",
  Nigeria: "Abuja",
  Spain: "Madrid",
  Australia: "Canberra",
  Pakistan: "Islamabad",
  Germany: "Berlin",
};

// For example when you console.log:
// (getCapitalCity('Japan')); // It should return Tokyo
// (getCapitalCity(’India’)); // It should return Country not found.

export function getCapitalCity(country) {
  //   Good luck! :)
}

// BONUS CHALLENGE!

// Are you up for another challenge? This time you need to create a function called isInEurope that will return true if a country is in Europe and false if it isn't. But first you'll need to create a variable called `countriesInEurope` that lists all of the countries above which are in Europe. Within your function you should account for countries which aren't listed or recognised and return false and the message `sorry ` name of country ` is not in the list of known countries`.

// For example when you console.log:
// (isInEurope('Germany')); // It should return true
// (isInEurope('Australia')); // It should return false
// (isInEurope('Algeria')); // It should return sorry Algeria is not in the list of known countries

export function isInEurope(country) {
  // Good luck! :)
}
