import { useCallback, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Header from "components/Header";
import { createTheme } from "utils/theme";

import { Container, GlobalStyle } from "./styled";

const Root = () => {
  const [mode, setMode] = useState("dark");

  const toggleMode = useCallback(() => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }, [mode]);

  const theme = useMemo(() => createTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleMode={toggleMode} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default Root;
