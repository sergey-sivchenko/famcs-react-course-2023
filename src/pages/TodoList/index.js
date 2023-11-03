import { Component } from "react";

import styles from "./index.module.css";
import Item from "./Item";

class Todo extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      test: "Some test state",
    };

    console.log("constructor (Mounting)");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps (Mounting + Updating)");

    return {
      ...state,
      derived: `Some state based on props: ${props}`,
    };
  }

  componentDidMount() {
    console.log("componentDidMount (Mounting)");

    this.setState({ mounted: true });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate (Updating)");

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate (Updating)");

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate (Updating)");
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError (Error Handling)");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch (Error Handling)");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount (Unmounting)");
  }

  render() {
    console.log("render (Mounting + Updating)");

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
