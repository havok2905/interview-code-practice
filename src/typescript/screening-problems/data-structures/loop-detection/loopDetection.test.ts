import { LinkedList } from '../shared/LinkedList';
import { loopDetection } from './loopDetection';

describe('loopDetection', () => {
  it('should return true if the linked list contains a loop', () => {
    const linkedList = new LinkedList<string>();
    
    linkedList.append('A');
    linkedList.append('B');
    linkedList.append('C');
    linkedList.head.next.next.next = linkedList.head;

    const result = loopDetection(linkedList);

    expect(result).toEqual(true);
  });

  it('should return false if the linked list contains no loop', () => {
    const linkedList = new LinkedList<string>();
    
    linkedList.append('A');
    linkedList.append('B');
    linkedList.append('C');

    const result = loopDetection(linkedList);

    expect(result).toEqual(false);
  });
});