import { Instruction, Mover } from "./types";
import { safeControl } from "./safeControl";

export function getPassword(instructions: Instruction[], mover: Mover): number {
  let zeroCount = 0;

  const incrementZeroCount = (amount: number) => {
    zeroCount += amount;
  };

  const control = safeControl(incrementZeroCount, mover);

  instructions.forEach(instruction => {
    control.turn(instruction);
  });

  return zeroCount;
}
