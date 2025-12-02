import { ID } from "./types";

function isOdd(length: number): boolean {
  return length % 2 !== 0;
}

export function containsRepeatedSequences(value: string): (length: number) => boolean {
  return (length: number) => {
    const first = value.slice(0, length);

    for (let i = length; i < value.length; i += length) {
      const sequence = value.slice(i, i + length);
      if (sequence !== first) {
        return false;
      }
    }

    return true;
  };
}

export function isInvalidIdTwo(id: ID): boolean {
  const { value, length } = id;
  if (length === 1) {
    return false;
  }

  const repeatsWithLength = containsRepeatedSequences(value);

  const start = 1;
  const max = Math.floor(length / 2);

  for (let i = start; i <= max; i++) {
    if (length % i === 0) {
      if (repeatsWithLength(i)) {
        return true;
      }
    }
  }

  return false;
}

function checkEven(value: string): boolean {
  const split = value.length / 2;
  const first = value.slice(0, split);
  const second = value.slice(split);
  return first === second;
}

export function isInvalidId(id: ID): boolean {
  const { value, length } = id;
  if (length === 1) {
    return false;
  }

  if (isOdd(length)) {
    return false;
  }

  return checkEven(value);
}
