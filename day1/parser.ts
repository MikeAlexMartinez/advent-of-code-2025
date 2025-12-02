export interface Instruction {
  direction: 'L' | 'R';
  distance: number;
}

export function parseInstruction(input: string): Instruction {
  const [direction, ...distance] = input.split('');
  const distanceNumber = parseInt(distance.join(''));

  return {
    direction: direction as 'L' | 'R',
    distance: distanceNumber,
  };
}

export function parseInput(input: string) {
  return input.split('\n').map(parseInstruction);
}
