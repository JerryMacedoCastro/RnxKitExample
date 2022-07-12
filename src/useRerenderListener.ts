

import { TinyEmitter } from 'tiny-emitter';
import { useEffect, useState } from 'react';

export const stateRerenderEmitter: TinyEmitter = new TinyEmitter();

export function useRerenderListener(eventName: string): Record<string, string> {
  const [eventFired, setEventFired] = useState('');

  function handler(): void {
    setEventFired(eventName);
  }

  useEffect(() => {
    stateRerenderEmitter.on(eventName, handler);
    return () => {
      stateRerenderEmitter.off(eventName, handler);
    };
  }, []);

  return { eventFired };
}
