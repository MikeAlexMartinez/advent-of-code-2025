import { describe, it, expect } from 'vitest';
import { parseInput, parseInstruction } from './parser';


describe('parser', () => {
  describe('parseInstruction', () => {
    it('should parse an instruction', () => {
      const instruction = parseInstruction('L10');
      expect(instruction).toEqual({ direction: 'L', distance: 10 });
    });

    it('should parse an instruction with a distance of 0', () => {
      const instruction = parseInstruction('L0');
      expect(instruction).toEqual({ direction: 'L', distance: 0 });
    });

    it('should parse an instruction with a distance of 100', () => {
      const instruction = parseInstruction('L100');
      expect(instruction).toEqual({ direction: 'L', distance: 100 });
    });
  });

  describe('parseInput', () => {
    it('should parse an input', () => {
      const input = parseInput('L1\nR20\nR496\nL0');

      expect(input).toEqual([{
          direction: 'L',
          distance: 1
        }, {
          direction: 'R',
          distance: 20
        }, {
          direction: 'R',
          distance: 496
        }, {
          direction: 'L',
          distance: 0
        }
      ]);
    });
  });
});
