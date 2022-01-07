import * as React from 'react';

// Defines the types of events to be handled
type Event = MouseEvent | TouchEvent;

export const useOnExternalClick = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  eventHandlerCallback: () => void
) => {
  React.useEffect(() => {
    const handleEvent = (event: Event) => {
      const element = ref?.current;
      if (!element || element.contains((event?.target as Node) || null)) {
        return;
      }
      eventHandlerCallback();
    };

    window.addEventListener('mousedown', handleEvent);
    window.addEventListener('touchstart', handleEvent);
    return () => {
      window.removeEventListener('mousedown', handleEvent);
      window.removeEventListener('touchstart', handleEvent);
    };
  });
};
