// Codewars Kata: "String ends with?" (7 kyu)
// Problem link: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
//
// Description:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Example:
//   solution('abc', 'bc') => true
//   solution('abc', 'd')  => false

/**
 * Checks if the string `str` ends with the substring `ending`.
 * @param str - The main string to check.
 * @param ending - The substring to look for at the end of `str`.
 * @returns True if `str` ends with `ending`, false otherwise.
 */
export function solution(str: string, ending: string): boolean {
  let isValid: boolean = true;

  for (let i = ending.length - 1; i > -1; i--) {
    const pointer: number = ending.length - i;

    if (ending[i] !== str[str.length - pointer]) {
      isValid = false;
      break;
    }
  }

  return isValid;
}
