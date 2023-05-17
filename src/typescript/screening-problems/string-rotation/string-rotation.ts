/**
 * String Rotation
 * 
 * Assume you have a method isSubString, which checks if one word is
 * a substring of another. Given two strings, s1 and s2, write code
 * to check if s2 is a rotation of s1 using only one call to isSubstring.
 * 
 * input: waterbottle, erbottlewat
 * output: true
 * 
 * input: abcd, xbcd
 * output: false
 */

/**
 * PLANNING
 * 
 * Uses Cases
 * - a & b are equal
 * - a & b are not equal, but rotated
 * - a & b are not equal, and not rotated
 */

const isSubString = (target: string, substring: string): boolean => {
  return target.includes(substring);
};

export const isRotatedString = (strA: string, strB: string): boolean => {
  if (strA.length !== strB.length) return false;
  const concat = strA + strA;
  return isSubString(concat, strB);
};

