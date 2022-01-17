// Global Imports
import styled from 'styled-components';

// Local Imports

export const EditPicWrapper = styled.div`
  /* background-color: lightpink; */
`;

export const IconWrapper = styled.div<{
  top: string;
  right: string;
}>`
  /* background-color: lightgreen; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  :hover {
    cursor: pointer;
  }
`;
