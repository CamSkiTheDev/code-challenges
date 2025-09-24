// Codewars Kata: "Sum of two lowest positive integers" (7 kyu)
// Problem link: https://www.codewars.com/kata/558fc85d8fd1938afb000014/
//
// Description:
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//
// Example:
// sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]) // return 3453455
// sumTwoSmallestNumbers([2,9,6,-1]) // return 8

/**
 * Sums the two smallest positive integers in an array.
 * @param numbers - An array of at least four positive integers.
 * @returns The sum of the two smallest positive integers.
 */
export function sumTwoSmallestNumbers(numbers: Array<number>): number {
  const sortedNums = numbers.sort((a, b) => a - b);

  return sortedNums[0] + sortedNums[1];
}
