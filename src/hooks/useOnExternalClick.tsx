import * as React from 'react';

// Defines the types of events to be handled
type Event = MouseEvent | TouchEvent;

export const useOnExternalClick = <T extends HTMLElement = HTMLElement>(
  refs: Array<React.RefObject<T>>,
  eventHandlerCallback: (event: Event) => void
) => {
  React.useEffect(() => {
    const handleEvent = (event: Event) => {
      const currentRefs = refs.map((ref) => ref.current);
      if (currentRefs.some((ref) => ref === event.target)) {
        eventHandlerCallback(event);
      }
    };

    window.addEventListener('mousedown', handleEvent);
    window.addEventListener('touchstart', handleEvent);
    return () => {
      window.removeEventListener('mousedown', handleEvent);
      window.removeEventListener('touchstart', handleEvent);
    };
  });
};
