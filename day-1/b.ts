import { runSolution } from '../utils.ts';
import { splitDataArray } from './splitDataArray.js';

/** provide your solution as the return of this function */
export async function day1b(data: string[]) {
  const splitData = splitDataArray(data);
  
  console.log(splitData);

  let product = 0;

  // get count of left value in right
  for (let i = 0; i < splitData[0].length; i++) {
    let count = 0;
    let m = 0;
    
      while( m <= splitData[1].length) {
      if (splitData[1][m] === splitData[0][i]) {
        count++;
      }
      m++;
    }
    product += Math.abs(count * splitData[0][i]);
  }

  return product;
}

await runSolution(day1b);
