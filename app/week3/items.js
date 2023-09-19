const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex items-center justify-between p-2 border-b border-gray-300">
      <div>
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
      <p className="text-lg font-semibold">{quantity}</p>
    </li>
  );
};

export default Item;
