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
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  const theme = useMemo(() => createTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main toggleMode={toggleMode} />
    </ThemeProvider>
  );
};

export default App;
