"use client";

import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react"
import { Product } from "@/data/products";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleLike = () => setIsLiked(!isLiked);

    return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-black text-white text-xs px-2 py-1 rounded">NEW</span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={toggleLike}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
        >
          <Heart 
            size={18} 
            className={`transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>

        {/* Quick Add Button */}
        <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <button className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
            <ShoppingBag size={16} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

