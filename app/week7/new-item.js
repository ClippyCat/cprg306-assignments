"use client";
import React, { useState } from "react";

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const categories = ['bakery', 'canned goods', 'dairy', 'dry goods', 'household', 'meat', 'produce'];
  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    // Call the onAddItem prop with the item object
    onAddItem(item);

    // Reset state variables to their initial values
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewItem;
