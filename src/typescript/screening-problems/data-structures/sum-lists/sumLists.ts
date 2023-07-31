import {LinkedList} from '../shared/LinkedList';

/**
 * Planning
 * 
 * Create a function to add two numbers, in which each digit of a number is represented
 * by a node in a linked list, in reverse order.
 * 
 * Input: ( 7 -> 1 -> 6 ) + ( 5 -> 9 -> 2 ), That is 617 + 295
 * Output: ( 2 -> 1 -> 9), That is 912
 */

const getNumberFromLinkedList = (linkedList: LinkedList<number>): number => {
  let current = linkedList.head;
  let sum = 0;
  let tens = 1;

  while(current) {
    sum = sum + current.data * tens;
    tens = tens * 10;
    current = current.next;
  }

  return sum;
}

const getLinkedListFromNumber = (num: number): LinkedList<number> => {
  const linkedList = new LinkedList<number>();
  const digits = String(num).split('');

  for(let x=digits.length-1; x>=0; x--) {
    linkedList.append(Number(digits[x]));
  }

  return linkedList;
};

export const sumLists = (a: LinkedList<number>, b: LinkedList<number>): LinkedList<number> => {
  const sum = getNumberFromLinkedList(a) + getNumberFromLinkedList(b);
  const linkedList = getLinkedListFromNumber(sum);
  return linkedList;
};
