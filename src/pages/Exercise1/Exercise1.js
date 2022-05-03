import { useEffect, useState } from "react";
import getRange from "../../services/rangeService";
import styles from "./Exercise1.module.scss";

export default function Exercise1() {
  const [range, setRange] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getRange().then((result) => {
      console.log(result);
      setRange(result);
      setLoaded(true);
    });
  }, [setRange]);

  return (
    <div id="exercise1-container" className={styles.exercise}>
      {!loaded ? (
        <>loading...</>
      ) : (
        <div>
          <h1>Exercise1</h1>
          <div>
            <h1>{range.min}</h1>
            <h1>{range.max}</h1>
            {console.log("HOLA", range.min)}
          </div>
        </div>
      )}
    </div>
  );
}
