/**
 * Given a string, write a function to check if it is a permutation
 * of a palindrome. A palindrome is a word of phrase that is the same
 * forwards as it is backwards. A permutation is a rearrangement of
 * letters. The palindrome does not need to be limited to just dictionary
 * words.
 * 
 * EXAMPLE
 * 
 * Input: Tact Coa
 * Output: True ( permutations: "taco cat",  "atco cta", ect. )
 * 
 * QUESTIONS
 * 
 * - do spaces count in the palindrome detection? ( index of them? )
 *  - operate as if they don't
 * 
 * BRAINSTORMING
 * 
 * - Core of this is, what properties do palindrome have in the abstract
 *  - rotational ordering of letters is a given
 *  - mirroring
 *    - duplicates pivoted around a center point
 *      - pivot char: N = 1
 *        - pivot char can have dupes: N > 1 
 *      - other chars: N > 1
 *      - detection
 *         - Do we have more than one single occurring characters
 *            - Example: abcdba doesn't work, but abbba does.
 * 
 * RUNTIME
 * N number of chars in input + U number of unique characters in input
 * Roughly, linear time/
 */

export const isPalindromePermutation = (str: string): boolean => {
  const lookup: Record<string, number> = {};
  const trimmed = str.replace(/\s+/g, '').split('');

  trimmed.forEach((item) => {
    !lookup[item] ? lookup[item] = 1 : lookup[item]++;
  });

  return Object.entries(lookup).filter(([_key, value]) => value === 1).length > 1;
};
