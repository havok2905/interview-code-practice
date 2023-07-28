/**
 * Description
 *  Write a method to replace all spaces with %20, in place, using a character array.
 */

export const URLify = (input: string[], inputLength: number): string[] => {
  for(let x=0; x<inputLength; x++) {
    if(input[x] === ' ') {
      input[x] = '%20';
    }
  }

  return input;
};
