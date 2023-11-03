import Header from "components/Header";
import TodoList from "pages/TodoList";

import { Container } from "./styled";

const Main = ({ toggleMode }) => {
  return (
    <>
      <Header toggleMode={toggleMode} />
      <Container>
        <TodoList />
      </Container>
    </>
  );
};

export default Main;
