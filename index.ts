import { program } from 'commander';

async function solve(day: number, part: number) {
  console.log(`Solving day ${day}, part ${part}`);
  const { solve } = await loadDayModule(day);
  return solve(part);
}

async function loadDayModule(day: number) {
  return import(`./day${day}/index.ts`);
}

program
  .name('advent-of-code-2025')
  .version('1.0.0')
  .description('My solutions to problems for advent of code 2025')
  .option('-d, --day <number>', 'The day to solve')
  .option('-p, --part <number>', 'The part to solve')
  .description('Run the day / part solution');

program.parse(process.argv);

const day = parseInt(program.opts().day);
const part = parseInt(program.opts().part);

const result = await solve(day, part);
console.log("My answer is: ", result);
