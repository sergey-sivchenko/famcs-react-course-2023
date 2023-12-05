import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>This is a Home page of the application</h1>
    <p>It will describe the idea and give instructions.</p>
    <Link to="/todo">Go to Todo List</Link>
  </div>
);

export default Home;
