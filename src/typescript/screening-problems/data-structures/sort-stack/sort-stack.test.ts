import { sortStack } from './sort-stack';
import { Stack } from '../shared/Stack';

describe('sortStack', () => {
  it ('should sort stacks in ascending order; 0 - 9', () => {
    const stack = new Stack<number>();

    stack.push(5);
    stack.push(3);
    stack.push(1);
    stack.push(4);
    stack.push(2);
    
    sortStack(stack);

    expect(stack.peek()).toEqual(1);
    stack.pop();

    expect(stack.peek()).toEqual(2);
    stack.pop();

    expect(stack.peek()).toEqual(3);
    stack.pop();

    expect(stack.peek()).toEqual(4);
    stack.pop();

    expect(stack.peek()).toEqual(5);
    stack.pop();

    expect(stack.isEmpty()).toEqual(true);
  });
});