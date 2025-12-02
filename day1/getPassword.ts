import { Instruction } from "./parser";
import { safeControl } from "./safeControl";

export function getPassword(instructions: Instruction[]): number {
  let zeroCount = 0;

  const incrementZeroCount = (amount: number) => {
    zeroCount += amount;
  };

  const control = safeControl(incrementZeroCount);

  instructions.forEach(instruction => {
    control.turn(instruction);
  });

  return zeroCount;
}
