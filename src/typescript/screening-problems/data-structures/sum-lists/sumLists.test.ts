import { LinkedList } from '../shared/LinkedList';
import { sumLists } from './sumLists';

describe('sumLists', () => {
  it('fulfils the test case', () => {
    
    // 617
    const a = new LinkedList<number>();
    a.append(7);
    a.append(1);
    a.append(6);
    
    // 295
    const b = new LinkedList<number>();
    b.append(5);
    b.append(9)
    b.append(2);

    // 912
    const expected = new LinkedList<number>();
    expected.append(2);
    expected.append(1);
    expected.append(9);

    const result = sumLists(a, b);

    expect(result.head.data).toEqual(expected.head.data);
    expect(result.head.next.data).toEqual(expected.head.next.data);
    expect(result.head.next.next.data).toEqual(expected.head.next.next.data);
  });
});