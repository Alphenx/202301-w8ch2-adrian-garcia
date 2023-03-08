import bunyan from 'bunyan';
import logger from './logger.js';

describe('Given a logger', () => {
  test('Logger should be an instance of bunyan', async () => {
    expect(logger).toBeInstanceOf(bunyan);
  });
});
