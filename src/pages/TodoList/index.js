// Class Component example
import { Component } from "react";

import styles from "./index.module.css";
import Item from "./Item";

class Todo extends Component {
  render() {
    return (
      <>
        <h1>Todo list</h1>
        <div className={styles.container}>
          <Item completed text="Create name for the application" />
          <Item completed text="Create GitHub repository" />
          <Item completed text="Add repository description" />
          <Item completed={false} text="Create first react app using CRA" />
          <Item completed={false} text="Attend class on 24/10/2022" />
        </div>
      </>
    );
  }
}

export default Todo;
