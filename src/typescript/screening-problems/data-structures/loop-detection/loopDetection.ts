import { LinkedList } from '../shared/LinkedList'

/**
 * Build a function to determine if a linked list contains a loop.
 */

export const loopDetection = (linkedList: LinkedList<string>): boolean => {
  const visited: Record<string, boolean> = {};
  let current = linkedList.head;

  while(current) {
    if (visited[current.data]) return true;
    if (!visited[current.data]) visited[current.data] = true;
    current = current.next;
  }

  return false;
};
