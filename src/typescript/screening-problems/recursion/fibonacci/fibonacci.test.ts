import { fibonacci } from './fibonacci';

describe('fibonacci', () => {
  it('should calculate the fibonacci result for 1', () => {
    const n = 1;
    const expected = 1;
    const result = fibonacci(n);

    expect(result).toEqual(expected);
  });

  it('should calculate the fibonacci result for 9', () => {
    const n = 9;
    const expected = 34;
    const result = fibonacci(n);
    
    expect(result).toEqual(expected);
  });

  it('should calculate the fibonacci result for 10', () => {
    const n = 10;
    const expected = 55;
    const result = fibonacci(n);
    
    expect(result).toEqual(expected);
  });
});