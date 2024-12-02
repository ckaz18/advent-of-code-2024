import { runSolution } from '../utils.ts';
import { splitDataLists } from './splitDataLists.js';

/** provide your solution as the return of this function */
export async function day2b(data: string[]) {
 
  const splitArrays = splitDataLists(data);

  let valid = 0;
  for (let i = 0; i < splitArrays.length; i++) {
    let safe: boolean = true;
    let increasing: boolean | null = null; 

    for (let m = 0; m < splitArrays[i].length - 1; m++) {
      const diff = splitArrays[i][m + 1] - splitArrays[i][m];

      // verify difference
      if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
        safe = false;
        break;
      }

      // Check if increasing or decreasing
      if (increasing === null) {
        increasing = diff > 0;
      } else if ((increasing && diff < 0) || (!increasing && diff > 0)) {
        safe = false;
        break;
      }
    }
    
    if (safe) {
      console.log(splitArrays[i]);
      valid++;
    }
  }

  return valid;
}

await runSolution(day2b);
