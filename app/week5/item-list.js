"use client";
import React, { useState } from 'react';
import Item from './items';
import itemsData from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  const [grouped, setGrouped] = useState(false);

  // Sort the items based on the sortBy state variable
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  // Function to toggle grouping
  const toggleGrouped = () => {
    setGrouped(!grouped);
  };

  // Group the items by category and sort them alphabetically
  const groupedItems = sortedItems.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  // Render the Items
  const renderItems = () => {
    if (grouped) {
      return Object.keys(groupedItems)
        .sort()
        .map((category) => (
          <div key={category}>
            <h2 className="text-xl font-semibold mt-4 mb-2 capitalize">{category}</h2>
            {groupedItems[category].map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        ));
    } else {
      return sortedItems.map((item) => (
        <Item key={item.id} item={item} />
      ));
    }
  };

  return (
    <div>
      <div className="flex space-x-2 my-4">
        <button
          className={`${
            sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          } px-4 py-2 rounded-md`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`${
            sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          } px-4 py-2 rounded-md`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
        <button
          className={`${
            grouped ? 'bg-blue-500 text-white' : 'bg-gray-300'
          } px-4 py-2 rounded-md`}
          onClick={toggleGrouped}
        >
          {grouped ? 'Ungroup' : 'Group by Category'}
        </button>
      </div>

      {renderItems()}
    </div>
  );
};

export default ItemList;
