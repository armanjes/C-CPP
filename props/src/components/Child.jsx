import propTypes from 'prop-types'
import './style.css'

const Child = ({ name, age='unknown', department }) => {
  // Since props are object. We can destructure.
  return (
    <>
      <div className='child'>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Department: {department}</p>
      </div>
    </>
  );
};

Child.propTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number,
    department: propTypes.string
}

Child.defaultProps = {
  department: "guest",
};

export default Child;

/*

*/
