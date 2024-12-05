import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day3a(data: string[]) {
  const parsed = parseValidMultipliers(data.filter(str => str.trim() !== '').join(' '));
  let multiplierSum = 0;

  for (let i = 0; i < parsed.length; i++) {
    multiplierSum += (parsed[i][0] * parsed[i][1]);
  }

  console.log(multiplierSum);
  return multiplierSum;
}

function parseValidMultipliers(data: string): number[][] {
  const pattern = /mul\((\d+),(\d+)\)/g;
  let on: boolean = true;
  
  // TODO: go through each match and verify if `don't` or `do` exists.
  const multipliers: number[][] = Array.from(data.matchAll(pattern), match => 
  [Number(match[1]), Number(match[2])]
);

  return multipliers;
};

await runSolution(day3a);
