import { useCallback, useEffect, useMemo, useState } from "react";
import { Provider as StoreProvider } from "react-redux";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Main from "pages/Main";
import { configureAppStore } from "store";
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

const store = configureAppStore();

const App = () => {
  const [mode, setMode] = useState("dark");

  const toggleMode = useCallback(() => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }, [mode]);

  const theme = useMemo(() => createTheme(mode), [mode]);

  const storageListener = useCallback((event) => {
    console.log(event);
  }, []);

  useEffect(() => {
    // Note: We need a second tab to see this event: https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event
    window.addEventListener("storage", storageListener);

    return () => {
      window.removeEventListener("storage", storageListener);
    };
  }, [storageListener]);

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main toggleMode={toggleMode} />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
