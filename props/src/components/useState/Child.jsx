import { useState } from "react";

const Child = () => {
  const [value, setValue] = useState(0);
  const increaseValue = () => setValue((v) => v + 1);
  const decreaseValue = () => setValue((v) => v - 1);
  return (
    <>
      <div>
        <h1>UseState hook</h1>
        <p>{value}</p>
        <button onClick={increaseValue}>+</button>
        <button onClick={decreaseValue}>-</button>
      </div>
    </>
  );
};
export default Child;
