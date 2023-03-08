import { hello } from './app';

describe('Config example verification', () => {
  test('Hello must have content', () => {
    expect(hello.hello).toBe('Hello world');
  });
});
