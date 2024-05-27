import { useState } from "react";

const Form = () => {
  const user = { name: "", age: "", profession: "" };
  const [info, setInfo] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
  };

  return (
    <div>
      <h1>React form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          name="name"
          value={info.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          placeholder="enter age"
          name="age"
          value={info.age}
          onChange={handleChange}
        />
        <br />
        <select
          name="profession"
          value={info.profession}
          onChange={handleChange}
        >
          <option value="select one">select one</option>
          <option value="student">student</option>
          <option value="engineer">engineer</option>
        </select>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default Form;
