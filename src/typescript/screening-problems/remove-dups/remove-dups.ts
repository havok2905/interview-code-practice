/**
 * Remove dups
 * 
 * Write code to remove duplicates from an unsorted linked list.
 * 
 * How would you write this if a temporary buffer was not allowed?
 */

import { LinkedList } from '../../shared/LinkedList';

export const removeDups = (linkedList: LinkedList<number>): void  => {
  const lookupSet = new Set();

  let current = linkedList.head;
  let previous;

  while(current) {
    if (lookupSet.has(current.data)) {
      previous.next = current.next;
    } else {
      lookupSet.add(current.data);
      previous = current;
    }

    current = current.next;
  }
};
