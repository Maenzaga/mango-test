import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <div>
        <Link to="/exercise1">EXERCISE 1</Link>
        <Link to="/exercise2">EXERCISE 2</Link>
      </div>
    </div>
  );
}
