import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: auto;
  max-width: 500px;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 22px;
`;

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;
