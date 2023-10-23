"use client"
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

const Week6Page = () => {
  // Initialize a state variable 'items' with data from items.json
  const [items, setItems] = useState(itemsData);

  // Create an event handler function to add a new item to 'items'
  const handleAddItem = (newItem) => {
    // Create a copy of the current 'items' array and add the new item
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  };

  return (
    <main>
      {/* Pass the 'handleAddItem' event handler to 'NewItem' component */}
      <NewItem onAddItem={handleAddItem} />
      {/* Pass the 'items' state to 'ItemList' component */}
      <ItemList items={items} />
    </main>
  );
};

export default Week6Page;
