import { zeroMatrix } from './zero-matrix';

describe('zeroMatrix', () => {
  it('should set the column and row of a zero cell to all zeros', () => {
    const input = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];

    zeroMatrix(input);

    expect(input[0][0]).toEqual(1);
    expect(input[0][1]).toEqual(0);
    expect(input[0][2]).toEqual(1);

    expect(input[1][0]).toEqual(0);
    expect(input[1][1]).toEqual(0);
    expect(input[1][2]).toEqual(0);

    expect(input[2][0]).toEqual(1);
    expect(input[2][1]).toEqual(0);
    expect(input[2][2]).toEqual(1);
  });
});