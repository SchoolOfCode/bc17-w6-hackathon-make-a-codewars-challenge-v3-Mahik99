import { test, expect } from "vitest";
import { getCapitalCity, isInEurope } from "./main.js";

// Check that the country returns the correct Capital

test("Check that the correct capital of country is returned", () => {
  expect(getCapitalCity("Japan")).toBe("Tokyo");
});

test("Check that the correct capital of country is returned", () => {
  expect(getCapitalCity("France")).toBe("Paris");
});

// Check that if a country is not spelled correctly or does not exist in the list, the error message "Country not found" is returned.

test("Check if the incorrect country was selected", () => {
  expect(getCapitalCity("USA")).toBe("Country not found");
});

test("Check if the incorrect country was selected", () => {
  expect(getCapitalCity("Denmark")).toBe("Country not found");
});

// BONUS CHALLENGE

// Check if the country is in Europe, should return true

test("Check if the country is in Europe", () => {
  expect(isInEurope("Spain")).toBe(true);
});

test("Check if the country is in Europe", () => {
  expect(isInEurope("Germany")).toBe(true);
});

// Check if the country is not in Europe, should return false

test("Check if the country is not in Europe", () => {
  expect(isInEurope("Nigeria")).toBe(false);
});

test("Check if the country is not in Europe", () => {
  expect(isInEurope("Pakistan")).toBe(false);
});

// Check if the country doesn't exist in the list of countries or if it was spelt incorrectly

test("Check to see that the country entered doesn't match the countries listed", () => {
  expect(isInEurope("Turkey")).toBe(
    false,
    "sorry Turkey is not in the list of known countries"
  );
});

test("Check to see that the country entered doesn't match the countries listed", () => {
  expect(isInEurope("Algeria")).toBe(
    false,
    "sorry Algeria is not in the list of known countries"
  );
});
