import { tripleStep } from './tripleStep';

describe('tripleStep', () => {
  it('should calculate the number of ways you can traverse up the stairs', () => {
    const steps = 3;
    const expected = 4;
    const result = tripleStep(steps);

    expect(result).toEqual(expected);
  });
});