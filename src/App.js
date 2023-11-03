import { useMemo, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Main from "pages/Main";
import { createTheme } from "utils/theme";

const GlobalStyle = createGlobalStyle`
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

const App = () => {
  const [themeMode] = useState("dark");

  const theme = useMemo(() => createTheme(themeMode), [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
};

export default App;
