import Child from "./Child";

const Parent = () => {
  const name = "john doe";
  const age = 30;
  const department = "CSE";
  return (
    <>
      <Child name={name} age={age} department={department} />
      <Child name="xyz" age={100} />
      <Child name="abc" />
    </>
  );
};
export default Parent;

/*
🚀 Props comes from "properties" which is an object. Props are read-only properties that shared between components. A parent can send props to a child. We can send several numbers of props.

🚀 syntax: <Component key = value/>

🚀 what we can pass through props?
In React, you can send various types of data through props. Here's a breakdown of what you can send:

1. **Primitive Data Types**:
   - Strings
   - Numbers
   - Booleans

2. **Complex Data Types**:
   - Arrays
   - Objects
   - Functions

3. **React Elements**:
   - You can pass JSX elements and components themselves as props.

4. **Children Components**:
   - You can pass child components as props to other components, allowing for composition of complex UI structures.

5. **Event Handlers**:
   - Functions can be passed as props to handle events or perform specific actions triggered by user interactions.

6. **Styles**:
   - You can pass styles as objects to customize the appearance of components dynamically.

7. **Component Configurations**:
   - You can pass configuration settings or options to customize the behavior of components.

8. **Callback Functions**:
   - Callback functions can be passed as props to allow child components to communicate with parent components.

9. **Boolean Flags**:
   - Boolean values can be used as flags to conditionally render or control the behavior of components.

10. **Enums or Constants**:
    - You can pass enums or constants to define specific states or options for components.

11. **Promises or Asynchronous Data**:
    - While it's not common to directly pass promises, you can pass data fetched asynchronously as props once the promise resolves.

12. **HTML Attributes**:
    - You can pass HTML attributes like `className`, `id`, `style`, etc., to style or configure DOM elements within components.

Remember, while passing data through props, ensure that you follow the principles of immutability and maintain a unidirectional data flow to keep your application predictable and easier to manage.

*/
