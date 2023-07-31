import { makeChange } from './makingChange';

describe('makeChange', () => {
  it('should need one coin for one cent', () => {
    const input = 1;
    const expected = 1;
    const result = makeChange(input, 0);

    expect(result).toEqual(expected);
  });

  it('should need three coins for three cents', () => {
    const input = 3;
    const expected = 3;
    const result = makeChange(input, 0);

    expect(result).toEqual(expected);
  });

  it('should need three coins for seven cents', () => {
    const input = 7;
    const expected = 3;
    const result = makeChange(input, 0);

    expect(result).toEqual(expected);
  });

  it('should need four coins for thirty two cents', () => {
    const input = 32;
    const expected = 4;
    const result = makeChange(input, 0);

    expect(result).toEqual(expected);
  });
});
