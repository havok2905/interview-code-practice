/**
 * Planning
 * 
 * Cent is our unit of measurement.
 * Coins are made of cents;
 */

/**
 * Coins: cents per coin
 */
const PENNY = 1;
const NICKLE = 5;
const DIME = 10;
const QUARTER = 25;

/**
 * @description Given an input amount of change x, write a function to 
 * determine the minimum number of coins required to make that amount 
 * of change. eg. (using American coins)
 * @param {number} input the amount of change in cents as an integer
 * @returns {number} the number of coins needed to make change
 */
export const makeChange = (input: number, total: number): number => {
  let coinToDivideBy = 0;

  if (input >= QUARTER) {
    coinToDivideBy = QUARTER;
  } else if (input >= DIME) {
    coinToDivideBy = DIME;
  } else if (input >= NICKLE) {
    coinToDivideBy = NICKLE;
  } else if (input >= PENNY) {
    coinToDivideBy = PENNY;
  }

  const remainder = input % coinToDivideBy;
  const numCoins = (input - remainder) / coinToDivideBy;
  const newInput = input - numCoins * coinToDivideBy;
  const newTotal = total + numCoins;

  if (newInput === 0) return newTotal;

  return makeChange(newInput, newTotal);
};
