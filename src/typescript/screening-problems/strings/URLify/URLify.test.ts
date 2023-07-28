import { URLify } from './URLify';

describe('URLify', () => {
  it('should convert spaces to %20', () => {
    const inputString = 'Mr John Smith';
    const input = inputString.split('');
    const inputLength = input.length;
    const expected = 'Mr%20John%20Smith';

    URLify(input, inputLength);

    const result = input.join('');

    expect(result).toEqual(result);
  });
});
