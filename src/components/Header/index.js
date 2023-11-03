import { useTheme } from "styled-components";
import { DarkMode } from "@styled-icons/material/DarkMode";
import { LightMode } from "@styled-icons/material/LightMode";

import TODOsLogo from "assets/logo.svg";
import IconButton from "components/IconButton";

import { Container, Logo, LogoContainer, Title } from "./styled";

const Header = ({ toggleMode }) => {
  const theme = useTheme();

  return (
    <Container>
      <LogoContainer href="/">
        <Logo alt="TODOs logo" src={TODOsLogo} />
        <Title>TODOs</Title>
      </LogoContainer>
      <IconButton
        color="primaryContrast"
        icon={theme.mode === "dark" ? DarkMode : LightMode}
        label="Toggle theme"
        onClick={toggleMode}
      />
    </Container>
  );
};

export default Header;
