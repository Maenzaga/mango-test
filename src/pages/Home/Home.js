import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={`${styles.className}`}>
      <h1>HOME</h1>
      <div>
        <Link to="/exercise1">EXERCISE 1</Link>
        <Link to="/exercise2">EXERCISE 2</Link>
      </div>
    </div>
  );
}
