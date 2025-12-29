const { greet } = require('./index');

describe('greet function', () => {
  test('should return Hello, World! by default', () => {
    expect(greet()).toBe('Hello, World!');
  });

  test('should greet with custom name', () => {
    expect(greet('CircleCI')).toBe('Hello, CircleCI!');
  });

  test('should handle empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });

  test('should handle special characters', () => {
    expect(greet('Test-User_123')).toBe('Hello, Test-User_123!');
  });

  test('should handle null input', () => {
    expect(greet(null)).toBe('Hello, null!');
  });

  test('should handle undefined input', () => {
    expect(greet(undefined)).toBe('Hello, World!');
  });

  // Flaky tests for demonstration
  test('flaky test - random failure 50%', () => {
    const shouldFail = Math.random() < 0.5; // 50% chance of failure
    if (shouldFail) {
      throw new Error('Random failure for flaky test demonstration');
    }
    expect(greet('Flaky')).toBe('Hello, Flaky!');
  });

  test('flaky test - timing dependent', () => {
    const now = new Date().getSeconds();
    // Fails when seconds are divisible by 3 (higher chance)
    if (now % 3 === 0) {
      expect(true).toBe(false);
    }
    expect(greet('Timer')).toBe('Hello, Timer!');
  });
});