import { describe, it, expect } from 'vitest';
import { clampDistance, safeControl } from './safeControl';

describe('clampDistance', () => {
  const onZero = vi.fn();

  beforeEach(() => {
    onZero.mockClear();
  });

  it('should clamp a distance of 100', () => {
    const { quotient, remainder } = clampDistance(100);
    expect(quotient).toBe(1);
    expect(remainder).toBe(0);
  });

  it('should clamp a distance of 101', () => {
    const { quotient, remainder } = clampDistance(101);
    expect(quotient).toBe(1);
    expect(remainder).toBe(1);
  });

  it('should clamp a distance of 102', () => {
    const { quotient, remainder } = clampDistance(99);
    expect(quotient).toBe(0);
    expect(remainder).toBe(99);
  });

  it('should clamp a distance of 460', () => {
    const { quotient, remainder } = clampDistance(460);
    expect(quotient).toBe(4);
    expect(remainder).toBe(60);
  });
});


describe('safeControl', () => {
  const onZero = vi.fn();

  beforeEach(() => {
    onZero.mockClear();
  });

  it('should start at 50', () => {
    const control = safeControl(onZero);
    control.turn({ direction: 'L', distance: 0 });
    expect(onZero).not.toHaveBeenCalled();
  });

  it('should turn left', () => {
    const control = safeControl(onZero);
    control.turn({ direction: 'L', distance: 10 });
    expect(onZero).not.toHaveBeenCalled();
  });

  it('should turn right', () => {
    const control = safeControl(onZero);
    control.turn({ direction: 'R', distance: 10 });
    expect(onZero).not.toHaveBeenCalled();
  });

  it('should turn left and wrap around', () => {
    const control = safeControl(onZero);
    control.turn({ direction: 'L', distance: 101 });
    expect(onZero).toHaveBeenCalledWith(1);
  });

  it('should turn right and wrap around', () => {
    const control = safeControl(onZero);
    control.turn({ direction: 'R', distance: 101 });
    expect(onZero).toHaveBeenCalledWith(1);
  });

  it('should turn left and wrap around multiple times', () => {
    const control = safeControl(onZero);
    control.turn({ direction: 'L', distance: 201 });
    expect(onZero).toHaveBeenCalledWith(2);
  });

  it('should turn right and wrap around multiple times and handle 0', () => {
    const control = safeControl(onZero);
    control.turn({ direction: 'L', distance: 250 });
    expect(onZero).toHaveBeenCalledTimes(2);
    expect(onZero).toHaveBeenNthCalledWith(1, 2);
    expect(onZero).toHaveBeenNthCalledWith(2, 1);
  });
});
