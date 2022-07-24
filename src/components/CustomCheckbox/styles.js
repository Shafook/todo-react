import styled, { css } from 'styled-components';

export const Container = styled.label`
  display: inline-block;
  vertical-align: middle;
  height: 25px;
  width: 20px;
  margin-right: 20px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 0;
  width: 0;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const checkedStyles = css`
  background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));

  ${Icon} {
    visibility: visible;
  }
`;
const uncheckedStyles = css`
  background: transparent;
  border: 1px solid gray;
  ${Icon} {
    visibility: hidden;
  }
`;

export const StyledCheckbox = styled.span`
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  transition: all 150ms;

  &:hover {
    background: gray;
  }

  ${(props) => (props.checked ? checkedStyles : uncheckedStyles)};
`;
