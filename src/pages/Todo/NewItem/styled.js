import styled from "styled-components";

export const AddButton = styled.button`
  background: none;
  border-radius: 6px;
  border: none;
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;
  font-size: 18px;
  padding: 8px 16px;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const Input = styled.input`
  background: none;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.divider};
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  flex: 1;
  font-size: 18px;
  margin-right: 16px;
  padding: 8px 16px;
`;
