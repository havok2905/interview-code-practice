import { oneAway } from './oneAway';

describe('oneAway', () => {
  it('should handle mirror inputs', () => {
    const input = 'pale';
    const target = 'pale';
    const expected = true;
    
    const result = oneAway(input, target);

    expect(result).toEqual(expected);
  });

  it('should handle one insert', () => {
    const input = 'ple';
    const target = 'pale';
    const expected = true;
    
    const result = oneAway(input, target);

    expect(result).toEqual(expected);
  });

  it('should handle one removal', () => {
    const input = 'pales';
    const target = 'pale';
    const expected = true;
    
    const result = oneAway(input, target);

    expect(result).toEqual(expected);
  });

  it('should handle one update', () => {
    const input = 'bale';
    const target = 'pale';
    const expected = true;
    
    const result = oneAway(input, target);

    expect(result).toEqual(expected);
  });

  it('should handle one removal', () => {
    const input = 'pale';
    const target = 'bake';
    const expected = false;
    
    const result = oneAway(input, target);

    expect(result).toEqual(expected);
  });
});
