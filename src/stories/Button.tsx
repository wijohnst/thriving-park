import * as React from 'react';
import styled from 'styled-components';

interface Props {
  /** What should the button say? */
  label: string;
  /** Is being rendered in mobile view? */
  isMobile: boolean;
  /** What should happen when the button is clicked? */
  onClick: () => void;
}

const Wrapper = styled.section``;

const Controller = styled.button<Pick<Props, 'isMobile'>>`
  color: white;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) =>
    props.isMobile ? props.theme.primaryBlue : props.theme.secondaryBlue};
  border: solid thin white;
  padding: 0.75rem;
  font-weight: 700;
`;

export const Button = ({ label, isMobile, onClick: handleClick }: Props) => (
  <Wrapper onClick={() => handleClick()}>
    <Controller isMobile={isMobile}>{label}</Controller>
  </Wrapper>
);
