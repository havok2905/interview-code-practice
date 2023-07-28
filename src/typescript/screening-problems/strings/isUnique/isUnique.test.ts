import { isUnique } from './isUnique';

describe('isUnique', () => {
  it('should determine if a string has all unique characters', () => {
    const input = 'abefgcd';
    const expected = true;
    const result = isUnique(input);

    expect(result).toEqual(expected);
  });

  it('should determine if a string has all unique characters, ignoring whitespace', () => {
    const input = 'bc a defg';
    const expected = true;
    const result = isUnique(input);

    expect(result).toEqual(expected);
  });

  it('should determine if a string has all unique characters, ignoring dupe whitespace', () => {
    const input = 'abc  defg';
    const expected = true;
    const result = isUnique(input);

    expect(result).toEqual(expected);
  });

  it('should treat an empty string as unqiue', () => {
    const input = '';
    const expected = true;
    const result = isUnique(input);

    expect(result).toEqual(expected);
  });


  it('should treat a single character string as unqiue', () => {
    const input = '';
    const expected = true;
    const result = isUnique(input);

    expect(result).toEqual(expected);
  });

  it('should be false for duplicate characters', () => {
    const input = 'dabcdefdg';
    const expected = false;
    const result = isUnique(input);

    expect(result).toEqual(expected);
  });
});