import { LinkedList } from '../shared/LinkedList';
import { palindrome } from './palindrome';

describe('palindrome', () => {
  it('fulfils the test case', () => {
    // tacocat
    const a = new LinkedList<string>();
    a.append('t');
    a.append('a');
    a.append('c');
    a.append('o');
    a.append('c');
    a.append('a');
    a.append('t');

    const result = palindrome(a);

    expect(result).toEqual(true);
  });

  it('finds an error', () => {
    // tacocat
    const a = new LinkedList<string>();
    a.append('t');
    a.append('a');
    a.append('c');
    a.append('o');
    a.append('a');
    a.append('t');

    const result = palindrome(a);

    expect(result).toEqual(false);
  });
});