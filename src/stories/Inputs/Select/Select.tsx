// Global Imports
import React from 'react';

// Local Imports
import { useOnExternalClick } from 'hooks/useOnExternalClick';
import { Button } from 'stories/Button';

interface Props {}

const handleClick = () => {
  console.log('Select element clicked...');
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Select = (props: Props) => {
  const spanRef = React.useRef<HTMLElement>(null);
  useOnExternalClick(spanRef, handleClick);
  return (
    <div>
      <Button label="Button" />
      <span ref={spanRef}>Select Works!</span>
    </div>
  );
};
