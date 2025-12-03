import { findMaxVoltage, findMaxVoltageTwo } from "./findMaxVoltage";

export function findTotalVoltage(banks: string[]): number {
  return banks.reduce((acc, bank) => acc + findMaxVoltage(bank), 0);
}

export function findTotalVoltageTwo(banks: string[]): number {
  return banks.reduce((acc, bank) => acc + findMaxVoltageTwo(bank, 12), 0);
}
