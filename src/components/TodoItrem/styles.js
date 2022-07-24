import styled from 'styled-components';

export const DeleteIcon = styled.span`
  cursor: pointer;
  @media (min-width: 768px) {
    opacity: 0;
  }
  transition: opacity 150ms ease-in-out;
`;

export const Item = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid gray;

  &:hover {
    ${DeleteIcon} {
      opacity: 1;
    }
  }
`;

export const Text = styled.span`
  cursor: pointer;
  color: ${({ checked }) =>
    checked && (({ theme }) => theme.colors.footer.text)};
  text-decoration: ${({ checked }) => checked && 'line-through'};
`;
