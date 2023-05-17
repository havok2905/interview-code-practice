import { isRotatedString } from './string-rotation';

describe('isRotatedString', () => {
  it('should check for inequal strings',  () => {
    const target = 'abcd';
    const rotated = 'xbcd';
    const result = isRotatedString(target, rotated);

    expect(result).toBe(false);
  });

  it('should check for empty strings',  () => {
    const target = '';
    const rotated = '';
    const result = isRotatedString(target, rotated);

    expect(result).toBe(true);
  });

  it('should check for equal strings',  () => {
    const target = 'waterbottle';
    const rotated = 'waterbottle';
    const result = isRotatedString(target, rotated);

    expect(result).toBe(true);
  });

  it('should check for a rotation',  () => {
    const target = 'waterbottle';
    const rotated = 'erbottlewat';
    const result = isRotatedString(target, rotated);

    expect(result).toBe(true);
  });
});
