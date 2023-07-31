/**
 * @description Fn = Fn-1 + Fn-2
 * @param {number} n number of numbers into the sequence we want to calculate
 * @returns {number} 
 */
export const fibonacci = (n: number): number => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
};