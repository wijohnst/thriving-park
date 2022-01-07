// Global Imports
import styled from 'styled-components';

// Local Imports
import { Orientation } from 'stories/CaretIcon';

const transforms: Record<Orientation, string> = {
  Up: 'rotate(-180deg)',
  Down: 'rotate(0deg)',
};
export const CaretIconWrapper = styled.div<{
  orientation: Orientation;
}>`
  transform: ${(props) => transforms[props.orientation]};
  transition: all 0.25s;
  margin: 0 0 0 1rem;
`;
