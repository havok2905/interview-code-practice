/**
 * Description
 *  - detect if we are one (DELETE, PATCH, or INSERT) action away from the target
 *  - detect if not changes are made.
 */

const oneEditReplace = (input: string, target: string): boolean => {
  let numOutOfPlace = 0;

  for(let x=0; x<input.length; x++) {
    if(input[x] !== target[x]) {
      numOutOfPlace++;
    }
  }

  return numOutOfPlace <= 1;
}

const oneEditInsert = (input: string, target: string): boolean => {
  let indexInput = 0;
  let targetInput = 0;

  while(indexInput < input.length && targetInput < target.length) {
    if(input[indexInput] !== target[targetInput]) {
      if(indexInput !== targetInput) {
        return false;
      }

      targetInput++;
    } else {
      indexInput++;
      targetInput++;
    }
  }

  return true;
};

export const oneAway = (input: string, target: string): boolean => {
  if (input === target) return true;
  if (input.length === target.length) return(oneEditReplace(input, target));
  if (input.length === target.length + 1) return oneEditInsert(target, input);
  if (input.length === target.length - 1) return oneEditInsert(input, target);
  return false;
};
