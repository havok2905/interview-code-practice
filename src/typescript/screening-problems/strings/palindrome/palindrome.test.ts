import {isPalindromePermutation} from './palindrome';

describe('isPalindromePermutation', () => {
  it('should detect a permutation of a palindrome', () => {
    const str = 'Tact Coa';
    const result = isPalindromePermutation(str);
    expect(result).toEqual(true);
  });
});
