import React from 'react'
import ProductCard from "./ProductCard";
function TwoGridLayout({ items }) {
    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      );
}

export default TwoGridLayout
