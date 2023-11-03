import { useState } from "react";

import crossImage from "assets/cross.png";
import tickImage from "assets/tick.png";

import { Container, Image, Text } from "./styled";

function Item(props) {
  const [isCompleted, setIsCompleted] = useState(props.completed);

  const toggleCompleteness = () => {
    setIsCompleted((prevState) => !prevState);
  };

  return (
    <Container onClick={toggleCompleteness}>
      <Image src={isCompleted ? tickImage : crossImage} />
      <Text>{props.text}</Text>
    </Container>
  );
}

export default Item;
