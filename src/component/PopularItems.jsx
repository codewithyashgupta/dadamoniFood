import React, { useState, useEffect } from "react";
import ItemData from "./../assets/MostPopularItems.json";
import TwoGridLayout from "./TwoGridLayout";

function PopularItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    try {
      setItems(ItemData.data || []);
    } catch (error) {
      console.error("Error Item data:", error);
    }
  };

  return (
    <section className="mb-20">
      <div className="container mx-auto max-w-6xl px-2.5">
        <div className="flex items-center justify-between gap-2 mb-6">
          <h2 className="text-2xl font-semibold capitalize">Popular Items</h2>
        </div>
        <TwoGridLayout items={items} />
        <div id="item-info-modal" className="modal info-modal"></div>
        <div id="item-variation-modal" className="modal"></div>
      </div>
    </section>
  );
}

export default PopularItems;
