/**
 * Sort Stack
 * 
 * Write a program to sort a stack such that the smallest items are
 * always on top. You can use an additional temporary stack, but you
 * may not copy the elements into any other data structure ( such as 
 * an array ). The stack supports the following operations; push,
 * peek, and isEmpty.
 */

/**
 * NOTES
 * 
 * - Moving two items to one stack and back reverses their order
 */

import { Stack } from '../shared/Stack';

export const sortStack = (stack: Stack<number>): Stack<number> => {
  const tempStack = new Stack<number>();
  
  while(!stack.isEmpty()) {
    const temp = stack.pop();

    while(!tempStack.isEmpty() && temp < tempStack.peek()) {
      stack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  while(!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  return stack;
};
