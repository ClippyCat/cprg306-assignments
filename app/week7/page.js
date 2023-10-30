"use client"
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

const Week7Page = () => {
  // Initialize a state variable 'items' with data from items.json
  const [items, setItems] = useState(itemsData);
  
  // Initialize a state variable 'selectedItemName'
  const [selectedItemName, setSelectedItemName] = useState('');

  // Create an event handler function to add a new item to 'items'
  const handleAddItem = (newItem) => {
    // Create a copy of the current 'items' array and add the new item
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  };

  // Create an event handler function to select an item from the list
  const handleItemSelect = (item) => {
    // Clean up the item name by removing the size and emoji
    const cleanedItemName = item.name.split(',')[0].trim();
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main style={{ display: 'flex' }}>
      <div>
        {/* Pass the 'handleAddItem' event handler to 'NewItem' component */}
        <NewItem onAddItem={handleAddItem} />
        {/* Pass the 'items' state and 'handleItemSelect' to 'ItemList' component */}
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div>
        {/* Pass the 'selectedItemName' state to 'MealIdeas' component as 'ingredient' prop */}
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Week7Page;
