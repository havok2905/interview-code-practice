import { rotateMatrix } from './matrix-rotation';

describe('rotateMatrix', () => {
  it('should rotate', () => {
    const input = [
      [1,  2,  3,  4 ],
      [5,  6,  7,  8 ],
      [9,  10, 11, 12],
      [13, 14, 15, 16]
    ];

    const expected = [
      [13, 9,  5, 1 ],
      [14, 10, 6, 2 ],
      [15, 11, 7, 3 ],
      [16, 12, 8, 4 ]
    ];

    expect(rotateMatrix(input)).toEqual(expected);
  });

  it('should not rotate MxN arrays', () => {
    const input = [
      [1,  2,  3,  4 ],
      [5,  6,  7,  8 ],
      [9,  10, 11, 12]
    ];

    expect(() => rotateMatrix(input)).toThrowError();
  });

    it('should not rotate arrays with unequal rows', () => {
    const input = [
      [1,  2,  3,  4 ],
      [5,  6,  7 ],
      [8,  9]
    ];

    expect(() => rotateMatrix(input)).toThrowError();
  });
});