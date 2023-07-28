/**
 * Description
 *    Write an algorithm such that if an element in an MXN matrix is zero, it's entire row and column is also zero.
 */

export const zeroMatrix = (input: number[][]): void => {
  const rowsWithZeros: Array<boolean> = new Array(input.length).fill(false);
  const colsWithZeros: Array<boolean> = new Array(input[0].length).fill(false);

  for(let row=0; row<input.length; row++) {
    for (let col=0; col<input[row].length; col++) {
      if(input[row][col] === 0) {
        rowsWithZeros[row] = true;
        colsWithZeros[col] = true;
      }
    }
  }

  for(let row=0; row<rowsWithZeros.length; row++) {
    if(rowsWithZeros[row]) {
      for(let x=0; x<input[0].length; x++) {
        input[row][x] = 0;
      }
    }
  }

  for(let col=0; col<colsWithZeros.length; col++) {
    if(colsWithZeros[col]) {
      for(let x=0; x<input.length; x++) {
        input[x][col] = 0;
      }
    }
  }
};

