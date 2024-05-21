import React, { useState, useEffect } from "react";
import ItemData from "./../assets/FeaturedItem.json";
import FourGridStructure from "./FourGridStructure";
import { NavLink } from "react-router-dom";

function FeaturedItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    try {
      setItems(ItemData.data || []);
    } catch (error) {
      console.error("Error fetching item data:", error);
    }
  };

  return (
    <section className="mb-20">
      <div className="container mx-auto max-w-6xl px-2.5">
        <h2 className="mb-6 text-2xl font-semibold capitalize">Featured Items</h2>
        <NavLink to="/" className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {items.map((item) => (
            <FourGridStructure key={item.id} item={item} />
          ))}
        </NavLink>
      </div>
    </section>
  );
}

export default FeaturedItems;
