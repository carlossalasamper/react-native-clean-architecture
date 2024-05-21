import {useCallback, useRef} from 'react';

export const useThottle = (callback: (args: any) => void, ms: number) => {
  const checkTimer = useRef(0);

  return useCallback(
    (args: any) => {
      const now = new Date().getTime();
      if (now - checkTimer.current < ms) {
        return;
      }
      checkTimer.current = now;
      return callback(args);
    },
    [callback, ms],
  );
};
