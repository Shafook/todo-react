import React from 'react';
import { Container, HiddenCheckbox, StyledCheckbox, Icon } from './styles';

const CustomCheckbox = ({ className, checked, ...props }) => {
  return (
    <Container className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox='0 0 24 24'>
          <polyline points='20 6 9 17 4 12' />
        </Icon>
      </StyledCheckbox>
    </Container>
  );
};

export default CustomCheckbox;
