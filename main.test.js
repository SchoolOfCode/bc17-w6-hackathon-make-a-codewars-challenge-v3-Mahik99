import { test, expect } from "vitest";
import { getCapitalCity } from "./main.js";

// Check that the country returns the correct Capital

test("Check that the correct capital of country is returned", (async) => {
  expect(getCapitalCity("Japan")).toBe("Tokyo");
});

test("Check that the correct capital of country is returned", (async) => {
  expect(getCapitalCity("France")).toBe("Paris");
});

// Check that if a country is not spelled correctly or does not exist in the list, the error message "Country not found" is returned.

test("Check if the incorrect country was selected", (async) => {
  expect(getCapitalCity("USA")).toBe("Country not found");
});
