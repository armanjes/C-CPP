import Child from "./Child";

const Parent = () => {
  const items = [
    { name: "Apple", quantity: 10 },
    { name: "Banana", quantity: 5 },
    { name: "Cherry", quantity: 20 },
    { name: "Date", quantity: 15 },
    { name: "Elderberry", quantity: 25 },
  ];
  return (
    <>
      <h1>array of objects</h1>
      <Child items={items} />
    </>
  );
};
export default Parent;
