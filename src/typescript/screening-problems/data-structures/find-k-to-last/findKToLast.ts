import { LinkedList, LinkedListNode } from '../shared/LinkedList';

/**
 * Planning
 * 
 *  We should never hit a null value as a success.
 *  Our target is Node at index of N(length of the linked list) - k
 */
export const findKToLast = <T>(linkedList: LinkedList<T>, k: number): LinkedListNode<T> | null => {
  let current = linkedList.head;

  /**
   * Success: If we look ahead 3 steps, we hit null
   * Continue: We do not hit null and hit a node
   * Failure:  We hit null before the 3rd step
   */

  while(current) {
    const first = current?.next;
    const second = first?.next;
    const third = second?.next;
    if (first && second && !third) return current;
    current = current.next;
  }

  return null;
};
