import { ID } from "./types";

function isOdd(length: number): boolean {
  return length % 2 !== 0;
}

export function isInvalidId(id: ID): boolean {
  const { value, length } = id;
  if (length === 1) {
    return false;
  }

  if (isOdd(length)) {
    return false;
  }

  const split = length / 2;

  const first = value.slice(0, split);
  const second = value.slice(split);

  return first === second;
}
