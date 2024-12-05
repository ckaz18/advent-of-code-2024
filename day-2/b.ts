import { runSolution } from '../utils.ts';
import { splitDataLists } from './splitDataLists.js';

/** provide your solution as the return of this function */
export async function day2b(data: string[]) {
  const splitArrays = splitDataLists(data);

  let valid = 0;

  for (let i = 0; i < splitArrays.length; i++) {
    const report = splitArrays[i];

    // Check if the report is safe without any modification
    if (isSafe(report)) {
      valid++;
      continue;
    }

    // If not safe, try removing one level at a time
    let dampenedSafe = false;
    for (let j = 0; j < report.length; j++) {
      const modifiedReport = [...report.slice(0, j), ...report.slice(j + 1)];
      if (isSafe(modifiedReport)) {
        dampenedSafe = true;
        break;
      }
    }

    if (dampenedSafe) {
      valid++;
    }
  }

  return valid;
}

function isSafe(report: number[]): boolean {
  let increasing: boolean | null = null;
  
  for (let i = 0; i < report.length - 1; i++) {
    const diff = report[i+1] - report[i];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) return false;

    if (increasing === null) {
      increasing = diff > 0;
    } else if ((increasing && diff < 0) || (!increasing && diff > 0)) {
      return false;
    }
  }

  return true;
}

await runSolution(day2b);
