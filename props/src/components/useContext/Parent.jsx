import { createContext } from "react";
import Child_1 from "./Child_1";

const UserContext = createContext();
const Parent = () => {
  return (
    <>
      <h1>UseContext hook</h1>
      <UserContext.Provider value={"and The last component"}>
        <Child_1 />
      </UserContext.Provider>
    </>
  );
};
export { UserContext };
export default Parent;
