import { useState } from "react";

const Child = () => {
  const carObj = { name: "ford", year: 2024, model: "mustang" };
  const [car, setCar] = useState(carObj);
  const { name, year, model } = car;
    const changeValue = (e) => {
        const {name, value} = e.target
        setCar({ ...car, [name]:value })
    }
//   const changeModelValue = (e) => setCar({ ...car, model: e.target.value });
//   const changeYearValue = (e) => setCar({ ...car, year: e.target.value });
  return (
    <div>
      <h1>Update object using useState</h1>
      <h3>
        Car info: {name} {model} {year}
      </h3>
      <input type="text" name="name" value={name} onChange={changeValue} />
      <br />
      <input type="text" name="model" value={model} onChange={changeValue} />
      <br />
      <input type="number" name="year" value={year} onChange={changeValue} />
      <br />
    </div>
  );
};
export default Child;
