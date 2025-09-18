// Codewars Kata: "Descending Order" (7 kyu)
// Problem link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155
//
// Description:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// Example:
//   solution(42145) => 54421
//   solution(145263) => 654321

/**
 * Rearranges the digits of a non-negative integer `n` in descending order.
 * @param n - A non-negative integer to be rearranged.
 * @returns The integer formed by the digits of `n` in descending order.
 */
export function solution(n: number): number {
  const numStr: string = String(n) ?? "";
  const sortedNumArray =
    numStr.split("").sort((a, b) => Number(b) - Number(a)) ?? [];

  return Number(sortedNumArray.join(""));
}
