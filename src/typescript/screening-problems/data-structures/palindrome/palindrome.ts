import { LinkedList } from '../shared/LinkedList';

/**
 * Palindrome
 *   - Reads forward the same as it does backwards
 *      - We mirror around a character pair or a single character
 *        - number of odd characters should not be more than one
 * 
 * 
 * Visble pivot point: o
 * tacocat
 * 
 * Invisible pivot point: undefined
 * tacoocat
 */
export const palindrome = (linkedList: LinkedList<string>): boolean => {
  const lookupTable: Record<string, number> = {};

  let current = linkedList.head;

  while(current) {
    if (lookupTable[current.data] === undefined) {
      lookupTable[current.data] = 1;
    } else {
      lookupTable[current.data]++;
    }

    current = current.next;
  }

  const oddCharacters = Object.entries(lookupTable).filter(([_key, value]) => value % 2 === 1);

  return oddCharacters.length <= 1;
};
