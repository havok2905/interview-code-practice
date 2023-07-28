/**
 * Function takes in a string input and returns if all characters are unique.
 * 
 * Planning:
 *  - Few possible solutions
 *    - alphabetical lookup table
 *      - potential huge lookup table for large texts; books, essays, emojis, multiple languages
 *        - We do not want to hardcode our lookup table
 *    - sorting and dupe check of neighbors
 *      - requires no data structure
 *      - less memory
 */

export const isUnique = (input: string): boolean => {
  const inputCharacters = input.replace(' ', '').split('').sort();

  if (inputCharacters.length <= 1) return true;

  for(let x = 1; x<inputCharacters.length; x++) {
    if(inputCharacters[x] === inputCharacters[x - 1]) return false;
  }

  return true;
};
