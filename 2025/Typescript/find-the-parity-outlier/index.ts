// Codewars Kata: "Find The Parity Outlier" (6 kyu)
// Problem link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc
//
// Description:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.
//
// Example:
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
//
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

/**
 * Find the outlier in an array of integers.
 * @param integers - An array of integers.
 * @returns The outlier integer.
 */
export function findOutlier(integers: number[]): number {
  const sortedNumArrays: number[][] = [[], []];

  for (let num of integers) {
    if (num % 2 === 0) sortedNumArrays[0].push(num);
    else sortedNumArrays[1].push(num);
  }

  return sortedNumArrays[0].length === 1
    ? sortedNumArrays[0][0]
    : sortedNumArrays[1][0];
}
