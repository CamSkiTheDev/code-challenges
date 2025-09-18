// Codewars Kata: "Highest and Lowest" (7 kyu)
// Problem link: https://www.codewars.com/kata/554b4ac871d6813a03000035
//
// Description:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
// Example:
//   Kata.highAndLow('1 2 3 4 5') => '5 1'
//   Kata.highAndLow('1 2 -3 4 5')  => '5 -3'

/**
 * Class containing a method to find the highest and lowest numbers in a space-separated string.
 */
export class Kata {
  /**
   * Finds the highest and lowest numbers in a space-separated string.
   * @param numbers - A string of space-separated numbers.
   * @returns A string containing the highest and lowest numbers.
   */
  static highAndLow(numbers: string): string {
    const sortedNumArray = numbers
      .split(" ")
      .sort((a, b) => parseInt(a) - parseInt(b));

    return `${sortedNumArray[sortedNumArray.length - 1]} ${sortedNumArray[0]}`;
  }
}
