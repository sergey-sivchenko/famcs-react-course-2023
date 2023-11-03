import { useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";

import Main from "pages/Main";
import { createTheme } from "utils/theme";

const App = () => {
  const [themeMode] = useState("dark");

  const theme = useMemo(() => createTheme(themeMode), [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
};

export default App;
