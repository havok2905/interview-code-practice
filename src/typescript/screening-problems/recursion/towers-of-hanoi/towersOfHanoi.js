/**
 * @description Only one disk can be moved at a time.
 * Each move consists of taking the upper disk from one 
 * of the stacks and placing it on top of another stack 
 * i.e. a disk can only be moved if it is the uppermost 
 * disk on a stack. No disk may be placed on top of a 
 * smaller disk.
 * Input: 2
 * Output: Disk 1 moved from A to B
 * Disk 2 moved from A to C
 * Disk 1 moved from B to C
 * @param {number} n number of disks
 * @param {string} fromRod the rod we are moving from
 * @param {string} toRod the rod we are moving to
 * @param {string} auxRod the rod we are not using?
 * @returns {void} 
 */
const towersOfHanoi = (n, fromRod, toRod, auxRod) => {
  if (n === 0) return;

  towersOfHanoi(n - 1, fromRod, auxRod, toRod);
  console.log(`Disk ${n} moved from ${fromRod} to ${toRod}`);
  towersOfHanoi(n - 1, auxRod, toRod, fromRod);
};

towersOfHanoi(2, 'A', 'C', 'B');