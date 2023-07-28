/**
 * Matrix Rotation
 * 
 * Given an image represented by a NxN matrix, where each pixel
 * is 4 bytes, write a method to rotate the image by 90 degrees.
 * 
 * Can you do this in place?
 */

/**
 * Data Structure
 * 
 * [
 *     [1,  2,  3,  4 ],
 *     [5,  6,  7,  8 ],
 *     [9,  10, 11, 12],
 *     [13, 14, 15, 16]
 * ]
 * 
 * bytes are a red herring, ignoring for the problem.
 * 
 */

export const rotateMatrix = (arr: number[][]): number[][] => {
  if (
    [...new Set(arr.map(row => row.length))].length > 1 ||
    arr.length !== arr[0].length
  ) {
    throw new Error();
  }

  const size = arr.length;
  const layers = size / 2;

  for (let layer=0; layer<layers; layer++) {
    const first = layer;
    const last = size - 1 - layer;

    for (let i = first; i<last; i++) {
      const offset = i - first;

      const top = arr[first][i];

      // left to top
      arr[first][i] = arr[last-offset][first];

      // bottom to left
      arr[last-offset][first] = arr[last][last-offset];

      // right to bottom
      arr[last][last-offset] = arr[i][last];

      // top to right
      arr[i][last] = top;
    }
  }

  return arr;
};
