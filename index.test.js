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

  // Additional stable tests
  test('should handle numeric input', () => {
    expect(greet(123)).toBe('Hello, 123!');
  });

  test('should handle boolean input', () => {
    expect(greet(true)).toBe('Hello, true!');
  });
});