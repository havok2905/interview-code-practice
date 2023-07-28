/**
 * Description
 *  Given two strings. write a method to decide if one is a permutation of the other
 * 
 * Planning
 *  
 */

export const checkPermutation = (input: string, target: string): boolean => {
  if (input === target) return true;

  const inputSorted = input.replace(' ', '').split('').sort().join('');
  const targetSorted = target.replace(' ', '').split('').sort().join('');
1  
  return inputSorted === targetSorted;
};