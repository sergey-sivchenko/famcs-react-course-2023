import Header from "components/Header";
import Todo from "pages/Todo";

import { Container } from "./styled";

const Main = ({ toggleMode }) => {
  return (
    <>
      <Header toggleMode={toggleMode} />
      <Container>
        <Todo />
      </Container>
    </>
  );
};

export default Main;
