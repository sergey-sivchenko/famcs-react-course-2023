import styled from "styled-components/macro";

const PADDING_BY_SIZE = {
  small: 6,
  medium: 8,
  large: 10,
};

const getIconColor = (color, theme) => {
  switch (color) {
    case "primary": {
      return theme.primary.light;
    }

    case "secondary": {
      return theme.secondary.light;
    }

    case "primaryContrast": {
      return theme.primary.contrastText;
    }

    case "secondaryContrast": {
      return theme.secondary.contrastText;
    }

    default: {
      return theme.text.primary;
    }
  }
};

export const Container = styled.button`
  align-items: center;
  appearance: none;
  color: ${({ color, theme }) => getIconColor(color, theme)};
  background: transparent;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  display: flex;
  flex: 0;
  justify-content: center;
  margin: 0;
  outline: 0;
  padding: ${({ size }) => PADDING_BY_SIZE[size] || 8}px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;

  :hover {
    background-color: ${({ theme }) => theme.action.hover};
  }
`;
