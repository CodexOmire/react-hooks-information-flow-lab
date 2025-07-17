import React, { useState } from "react";
import Item from "./components/Item";
import Filter from "./components/Filter";
import itemsData from "./data/items";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const itemsToDisplay = itemsData.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <div className="shopping-list">
      <Filter onCategoryChange={setSelectedCategory} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
