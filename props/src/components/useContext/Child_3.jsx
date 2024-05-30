import { useContext } from "react";
import {UserContext} from "./Parent"

const Child_3 = () => {
    const text = useContext(UserContext);
  return (
    <div>
      <p>Child_3 {text} </p>
    </div>
  );
}
export default Child_3