import Child from "./Child"

const Parent = () => {
    const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]
  return (
      <>
          <Child items={items} />
      </>
  )
}
export default Parent