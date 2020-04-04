/*
  Title:
    Exes and Ohs

  Description:
    Check to see if a string has the same amount of 'x's and 'o's.
    The method must return a boolean and be case insensitive.
    The string can contains any char.

  Examples:
    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false

  Kata Link:
    https://www.codewars.com/kata/exes-and-ohs

  Discuss Link:
    https://www.codewars.com/kata/exes-and-ohs/discuss

  Solutions Link:
    https://www.codewars.com/kata/exes-and-ohs/solutions
*/

// Long Solution
/*
function XO(str) {
  const totalX = str.split('').filter(char => /x/gi.test(char)).length
  const totalO = str.split('').filter(char => /o/gi.test(char)).length

  return totalX === totalO
}
*/

// Short Solution
const exesAndOhs = string =>
  (string.match(/x/gi) || []).length === (string.match(/o/gi) || []).length

// Function Export
module.exports = exesAndOhs
