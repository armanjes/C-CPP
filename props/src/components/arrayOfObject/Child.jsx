import PropTypes from "prop-types";

const Child = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map(({ name, quantity }, index) => (
          <li key={index}>
            {name} - {quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

Child.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Child;
