const Event = () => {
  const handleClick1 = () => {
    alert("goal!");
  };
  const handleClick2 = (a) => {
    alert(a);
  };
  const handleClick3 = (e) => {
    alert(e.type);
  };
  return (
    <div>
      <h1>react events</h1>
      <button onClick={handleClick1}>Take a shot!</button>
      <br />
      <button onClick={() => handleClick2("goal")}>Take second shot!</button>
      <br />
      <button onClick={(e) => handleClick3(e)}>Take last shot</button>
    </div>
  );
};
export default Event;
