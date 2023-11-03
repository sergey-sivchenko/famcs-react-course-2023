import crossImage from "assets/cross.png";
import tickImage from "assets/tick.png";

import { Container, Image, Text } from "./styled";

function Item(props) {
  return (
    <Container>
      <Image src={props.completed ? tickImage : crossImage} />
      <Text>{props.text}</Text>
    </Container>
  );
}

export default Item;
