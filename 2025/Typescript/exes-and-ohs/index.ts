// Codewars Kata: "Exes and Ohs" (7 kyu)
// Problem link: https://www.codewars.com/kata/55908aad6620c066bc00002a
//
// Description: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// Example:
//   XO("ooxx") => true
//   XO("xooxx") => false
//   XO("ooxXm") => true

/**
 * Checks if the input string has an equal number of 'x's and 'o's, case insensitive.
 * @param str - input string
 * @returns boolean indicating if the number of 'x's and 'o's are equal
 */
export function xo(str: string): boolean {
  return str.match(/x/gi)?.length === str.match(/o/gi)?.length;
}
