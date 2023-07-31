/**
 * @description Design a function to calculate the number of ways you can
 * traverse up a stairwell taking: 1 step, 2 steps, or 2 steps at a time.
 * @param {number} steps the number of steps in a stairwell
 * @returns {number} the number of ways a stairwell can be climbed 
 */
export const tripleStep = (steps: number): number => {
  if (steps < 0) {
    return 0;
  } else if (steps == 0) {
    return 1;
  } else {
    return tripleStep(steps - 1) + tripleStep(steps - 2) + tripleStep(steps - 3);
  }
};
