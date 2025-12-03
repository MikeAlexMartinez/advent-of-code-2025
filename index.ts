import { program } from 'commander';

import { readInput } from './shared/readInput';
import { Day, isDay, isPart, Part } from './shared/types';

async function solveDayAndPart(day: Day, part: Part, test: boolean = false) {
  console.log(`Solving day ${day}, part ${part}`);
  const { solve } = await loadDayModule(day);
  const input = readInput(day, part, test);

  return solve(part, input);
}

async function loadDayModule(day: number) {
  return import(`./day${day}/index.ts`);
}

program
  .name('advent-of-code-2025')
  .version('1.0.0')
  .description('My solutions to problems for advent of code 2025')
  .requiredOption('-d, --day <number>', 'The day to solve')
  .requiredOption('-p, --part <number>', 'The part to solve')
  .option('-t, --test', 'Run against the test input')
  .description('Run the day / part solution');

program.parse(process.argv);

const day = parseInt(program.opts().day);
const part = parseInt(program.opts().part);
const test = program.opts().test ?? false;

if (!isDay(day)) {
  console.error('Day must be between 1 and 12');
  process.exit(1);
}

if (!isPart(part)) {
  console.error('Part must be 1 or 2');
  process.exit(1);
}

const result = await solveDayAndPart(day, part, test);
console.log("My answer is: ", result);
