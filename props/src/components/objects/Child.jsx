const Child = ({ item }) => {
  const { name, quantity } = item;
  return (
    <>
      <div>
        <p>Fruit: {name}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <hr />
    </>
  );
};
export default Child;
