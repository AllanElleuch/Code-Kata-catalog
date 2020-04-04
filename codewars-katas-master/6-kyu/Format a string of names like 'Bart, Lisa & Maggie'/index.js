/*
  Title:
    Format a string of names like 'Bart, Lisa & Maggie'.

  Description:
    Given: an array containing hashes of names

    Return: a string formatted as a list of names separated by commas except
    for the last two names, which should be separated by an ampersand.

  Examples:
    list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
    // returns 'Bart, Lisa & Maggie'

    list([ {name: 'Bart'}, {name: 'Lisa'} ])
    // returns 'Bart & Lisa'

    list([ {name: 'Bart'} ])
    // returns 'Bart'

    list([])
    // returns ''

  Notes:
    All the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

  Kata Link:
    https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie

  Discuss Link:
    https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/discuss

  Solutions Link:
    https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/solutions
*/

// Long Solution
function list(names) {
  if (!names) return ''
  if (names.length === 2) return `${names[0].name} & ${names[1].name}`

  return names
    .map(({ name }) => name)
    .join(', ')
    .replace(/,(?!.*,)/g, ' &')
}

// Regex about matching the last ocurrence. Example: https://regexr.com/3i3iu
// https://frightanic.com/software-development/regex-match-last-occurrence

// Function Export
module.exports = list
