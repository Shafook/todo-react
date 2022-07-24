import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 500px;
  min-height: 200px;
  margin: 50px auto;
  padding: 30px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  h1 {
    margin: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.tasks};
`;

export const Input = styled.input.attrs({ type: 'text' })`
  flex: 1;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSize.md};
  border: none;
  padding: 5px;
  outline: none;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.tasks};
  border-radius: 5px;
  padding: 0 15px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.filter.text};

  > div {
    display: flex;
    gap: 50px;

    div {
      display: flex;
      gap: 10px;
    }

    span {
      cursor: pointer;
      transition: color 150ms ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.colors.filter.hover};
      }
    }
  }
`;

export const FilterText = styled.span`
  color: ${({ theme }) => theme.colors.filter.text};
  font-size: 14px;

  color: ${(props) =>
    props.filter === 0 && (({ theme }) => theme.colors.filter.selected)};
`;

export const FilterContainer = styled.div`
  @media (max-width: 768px) {
    &.hide-for-mobile {
      display: none;
    }
    background-color: ${({ theme }) => theme.colors.tasks};

    margin-top: 20px;
    padding: 15px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  @media (min-width: 768px) {
    &.hide-for-desktop {
      display: none;
    }
  }
`;
