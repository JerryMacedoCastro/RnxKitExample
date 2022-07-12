
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
  useState: jest.fn().mockReturnValue(['testEvent', jest.fn]),
}));

import { useRerenderListener, stateRerenderEmitter } from '../useRerenderListener';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('useRerenderListener', () => {
  test('useRerenderListener registers event', async () => {
    // Arrange

    // Act
    const res = useRerenderListener('testEvent');
    stateRerenderEmitter.emit('testEvent');

    // Assert
    expect(res.toString()).toBe({ eventFired: 'testEvent' }.toString());
  });
});
