const Item = ({ name, quantity, category }) => {
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{category}</p>
      </div>
      <p>{quantity}</p>
    </li>
  );
};

export default Item;
