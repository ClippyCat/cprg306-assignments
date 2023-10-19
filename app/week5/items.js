const Item = ({ item }) => {
  const { name, quantity, category } = item;

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
