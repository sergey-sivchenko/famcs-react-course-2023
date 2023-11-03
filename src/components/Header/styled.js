import styled from "styled-components";

export const Container = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.primary.dark};
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const Logo = styled.img`
  height: 40px;
  margin: 4px;
  width: 40px;
`;

export const LogoContainer = styled.a`
  align-items: center;
  display: flex;
  text-decoration: none;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primary.contrastText};
  font-size: 20px;
  margin: 0 16px;
`;
