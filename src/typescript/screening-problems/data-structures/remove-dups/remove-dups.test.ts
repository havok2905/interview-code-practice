import { LinkedList } from '../../shared/LinkedList';
import { removeDups } from '../remove-dups/remove-dups';

describe('removeDups', () => {
  it ('should remove duplicate', () => {
    const linkedList = new LinkedList<number>();

    // Test: 1 2 6 4 6 6 2 7
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(6);
    linkedList.append(4);
    linkedList.append(6);
    linkedList.append(6);
    linkedList.append(2);
    linkedList.append(7);

    removeDups(linkedList);

    // Expected: 1 2 6 4 7
    let current = linkedList.head;

    expect(current.data).toEqual(1);
    current = current.next;

    expect(current.data).toEqual(2);
    current = current.next;

    expect(current.data).toEqual(6);
    current = current.next;

    expect(current.data).toEqual(4);
    current = current.next;

    expect(current.data).toEqual(7);
    current = current.next;

    expect(current).toBeFalsy();
  });
});
