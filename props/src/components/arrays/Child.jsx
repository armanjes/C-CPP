import propTypes from "prop-types";

const Child = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

Child.propTypes = {
  items: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Child;
