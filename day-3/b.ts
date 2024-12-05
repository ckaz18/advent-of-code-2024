import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day3b(data: string[]) {
  const parsed = parseValidMultipliers(data.filter(str => str.trim() !== '').join(' '));
  let multiplierSum = 0;

  for (let i = 0; i < parsed.length; i++) {
    multiplierSum += (parsed[i][0] * parsed[i][1]);
  }

  console.log(multiplierSum);
  return multiplierSum;
}


function parseValidMultipliers(data: string): number[][] {
  const mulPattern = /mul\((\d+),(\d+)\)/g;
  const instructionPattern = /do\(\)|don't\(\)/g;
  const multipliers: number[][] = [];
  let skip: boolean = false;

  // Combine both patterns to search for mul operations and instructions
  const combinedPattern = new RegExp(`${mulPattern.source}|${instructionPattern.source}`, 'g');
  let match;

  while ((match = combinedPattern.exec(data)) !== null) {
    if (!skip && match[0].includes("don't")) {
      skip = true;
      continue;
    }

    if (skip && match[0].includes("do()")) {
      skip = false;
    }
    
    if (!skip && match[0].startsWith('mul')) {
      multipliers.push([Number(match[1]), Number(match[2])]);
    }

  }

  return multipliers;
}

await runSolution(day3b);
