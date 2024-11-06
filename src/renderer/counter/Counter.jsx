import { useEffect, useState } from 'react';
import './Counter.css';

function Counter({ resetCounters, number }) {
  const [count, updateCounter] = useState(0);

  function handleIncrement() {
    updateCounter(count + 1);
  }

  useEffect(() => {
    if (resetCounters) {
      updateCounter(0);
    }
  }, [resetCounters]);

  return (
    <button onClick={handleIncrement}>
      Bouton n°{number} : {count}
    </button>
  );
}

export default Counter;