import { useEffect, useState } from "react";

const IntervalComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <>
      <h1>useEffect hook</h1>
      <p>Count: {count}</p>
    </>
  );
};

export default IntervalComponent;
