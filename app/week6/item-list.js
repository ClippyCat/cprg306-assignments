"use client";
import React, { useState } from 'react';
import Item from './items';

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');
  const [groupByCategory, setGroupByCategory] = useState(false);

  const toggleSortBy = (value) => {
    setSortBy(value);
  };

  const toggleGroupByCategory = () => {
    setGroupByCategory(!groupByCategory);
  };

  // Create a copy of the 'items' prop to avoid mutation
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  // Group items by category
  const groupedItems = groupByCategory
    ? sortedItems.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {})
    : { All: sortedItems };

  return (
    <div>
      <div>
        <button
          onClick={() => toggleSortBy('name')}
          style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => toggleSortBy('category')}
          style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}
        >
          Sort by Category
        </button>
        <button onClick={toggleGroupByCategory}>Group by Category</button>
      </div>
      {Object.keys(groupedItems).map((category) => (
        <div key={category}>
          <h2 className="font-bold text-xl">{category}</h2>
          {groupedItems[category].map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
