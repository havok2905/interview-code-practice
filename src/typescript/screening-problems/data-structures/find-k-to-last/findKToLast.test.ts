import { findKToLast } from './findKToLast';
import { LinkedList } from '../shared/LinkedList';

describe('findKToLast', () => {
  it('should return null for too low of a k value', () => {
    const k = 3;
    const linkedList = new LinkedList<number>();

    // 10 -> 7
    linkedList.append(10);
    linkedList.append(7);

    const expected = null;
    const result = findKToLast(linkedList, k);

    expect(result).toEqual(expected);
  });

  it('should find the kth to last item in a singly linked list', () => {
    const k = 3;
    const linkedList = new LinkedList<number>();

    // 10 -> 7 -> 21 -> 18 -> 109
    linkedList.append(10);
    linkedList.append(7);
    linkedList.append(21);
    linkedList.append(18);
    linkedList.append(109);

    const expected = 21;
    const result = findKToLast(linkedList, k).data;

    expect(result).toEqual(expected);
  });
});
