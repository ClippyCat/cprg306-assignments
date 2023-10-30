"use client";
import React, { useState } from 'react';
import Item from './items';

function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  // Create a copy of items to work with
  const itemsData = [...items];

  const sortedItems = itemsData.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortBy === "groupCategory") {
      return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
    }
    return 0;
  });

  // Create a copy of items for grouping
  const groupedItems = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedCategories = Object.keys(groupedItems).sort();

  // Create a copy of items for grouping and sorting
  const groupedAndSortedItems = sortedCategories.reduce((acc, category) => {
    acc.push({ category, items: groupedItems[category] });
    return acc;
  }, []);

  return (
    <div>
      <h1>Shopping List</h1>
      <label>
        <input
          type="radio"
          name="sortOption"
          value="name"
          checked={sortBy === "name"}
          onChange={() => setSortBy("name")}
        />
        Sort by Name
      </label>
      <label>
        <input
          type="radio"
          name="sortOption"
          value="category"
          checked={sortBy === "category"}
          onChange={() => setSortBy("category")}
        />
        Sort by Category
      </label>
      <label>
        <input
          type="radio"
          name="sortOption"
          value="groupCategory"
          checked={sortBy === "groupCategory"}
          onChange={() => setSortBy("groupCategory")}
        />
        Group by Category
      </label>

      <ul>
        {sortBy === "groupCategory" &&
          groupedAndSortedItems.map((group, groupIndex) => (
            <li key={groupIndex}>
              <h2 className="text-lg font-bold capitalize">{group.category}</h2>
              <ul>
                {group.items.map((item, index) => (
                  <Item
                    key={index}
                    item={item}
                    onSelect={() => onItemSelect(item)}
                  />
                ))}
              </ul>
            </li>
          ))}
        {sortBy !== "groupCategory" &&
          sortedItems.map((item, index) => (
            <Item
              key={index}
              item={item}
              onSelect={() => onItemSelect(item)}
            />
          ))}
      </ul>
    </div>
  );
}

export default ItemList;
