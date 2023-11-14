const Item = ({ item, onSelect }) => {
  const { name, quantity, category } = item;

  return (
    <li onClick={() => onSelect(item)}>
      <div>
        <p>{name}</p>
        <p>{category}</p>
      </div>
      <p>{quantity}</p>
    </li>
  );
};

export default Item;
