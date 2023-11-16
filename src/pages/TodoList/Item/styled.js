import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
  opacity: ${({ isCompleted }) => (isCompleted ? 0.6 : 1)};
  padding: 4px;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;

export const Text = styled.p`
  margin: 8px;
  text-decoration: ${({ isCompleted }) => (isCompleted ? "line-through" : "none")};
  user-select: none;
`;
