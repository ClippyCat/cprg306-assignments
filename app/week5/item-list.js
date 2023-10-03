"use client";
import React, { useState } from 'react';
import itemsData from './items.json'; // Import the items from the JSON file.

function ItemList() {
  // Initialize state variables
  const [sortBy, setSortBy] = useState('name');
  const [grouped, setGrouped] = useState(false); // Added state for grouping

  // Sort the items based on the sortBy state variable
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  // Create Sort Buttons
  const renderSortButtons = () => (
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
        onClick={() => setGrouped(!grouped)}
      >
        {grouped ? 'Ungroup' : 'Group by Category'}
      </button>
    </div>
  );

  // Group the items by category
  const groupItemsByCategory = () => {
    return sortedItems.reduce((groupedItems, currentItem) => {
      const category = currentItem.category;
      if (!groupedItems[category]) {
        groupedItems[category] = [];
      }
      groupedItems[category].push(currentItem);
      return groupedItems;
    }, {});
  };

  // Render the Items
  const renderItems = () => {
    if (grouped) {
      const groupedItems = groupItemsByCategory();
      return Object.keys(groupedItems).map((category) => (
        <div key={category}>
          <h2 className="text-xl font-semibold mt-4 mb-2 capitalize">{category}</h2>
          {groupedItems[category].map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      ));
    } else {
      return sortedItems.map((item) => <Item key={item.id} item={item} />);
    }
  };

  return (
    <div>
      {renderSortButtons()}
      {renderItems()}
    </div>
  );
}

export default ItemList;
