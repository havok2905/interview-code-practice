import { checkPermutation } from './checkPermutation';

describe('checkPermutation', () => {
  it('return true if one string is a permutation of the other', () => {
    const input = 'CBA';
    const target = 'ABC';
    const expected = true;
    const result = checkPermutation(input, target);

    expect(result).toEqual(expected);
  });

  it('return false if one string is not a permutation of the other', () => {
    const input = 'DBA';
    const target = 'ABC';
    const expected = false;
    const result = checkPermutation(input, target);

    expect(result).toEqual(expected);
  });

  it('return true if one string is a permutation of the other, with duplicates', () => {
    const input = 'CBAB';
    const target = 'ABBC';
    const expected = true;
    const result = checkPermutation(input, target);

    expect(result).toEqual(expected);
  });

  it('return false if one string is not a permutation of the other', () => {
    const input = 'DBDA';
    const target = 'ABC';
    const expected = false;
    const result = checkPermutation(input, target);

    expect(result).toEqual(expected);
  });
});
