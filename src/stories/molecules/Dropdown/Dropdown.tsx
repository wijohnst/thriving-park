// Global Imports
import React, { ReactNode } from 'react';

// Local Imports
import { Button } from 'stories/atoms/Button/Button';
// I know the caret has to wrapped in a wrapper so we can adjust it's placement and allow for roatation, but my first goal was just to render the Caret somewhere on the button first
// import { DropCaretWrapper } from 'stories/molecules/Dropdown/Dropdown.style';
// import { SvgContainer } from 'stories/atoms/SVGIcon/svgicon-styles';
import { ReactComponent as CaretSvg } from 'stories/assets/caret_icon.svg';

interface Props {
  isMobile?: boolean;
  // orientation?: string;
  label?: string;
  onClick?: () => void;
  children?: ReactNode; 
}

export const Dropdown = ({
  isMobile = false,
  label = 'DROPDOWN BUTTON',
  // this ia placeholder, idea is to have this function change the orientation. Will develop during later github issue.
  onClick: handleClick = () => console.log('Click!'),
  children = <CaretSvg/>

}: Props) => {
    <Button 
      isMobile={isMobile} 
      label={label} 
      onClick={() => handleClick()} 
    >
      {children}
    </Button>
  );
};