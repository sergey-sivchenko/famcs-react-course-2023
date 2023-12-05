import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.background.default};
  color: ${({ theme }) => theme.text.primary};
  padding: 16px 32px;
`;

export const GlobalStyle = createGlobalStyle`
  html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.background.default};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    height: 100%;
    margin: 0;
  }
`;
