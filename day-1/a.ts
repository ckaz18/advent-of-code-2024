import { runSolution } from '../utils.ts';
import { splitDataArray } from './splitDataArray.js';

/** provide your solution as the return of this function */
export async function day1a(data: string[]) {
  const splitData = splitDataArray(data);
  
  splitData[0].sort();
  splitData[1].sort();
  console.log(splitData);

  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    sum += Math.abs(splitData[0][i] - splitData[1][i]);
  }

  return sum;
}


await runSolution(day1a);
