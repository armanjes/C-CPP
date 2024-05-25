import Child from './Child';
const Parent = () => {
    const item = { name: "Apple", quantity: 10 };
  return (
    <div>
      <h1>objects</h1>
      <Child item={item} />
    </div>
  );
}
export default Parent