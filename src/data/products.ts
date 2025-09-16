export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 89,
    image: "/api/placeholder/400/500",
    category: "Basics",
    isNew: true,
  },
  {
    id: 2,
    name: "Good Quality Wool Blazer",
    price: 299,
    originalPrice: 399,
    image: "/api/placeholder/400/500",
    category: "Outerwear",
    isSale: true,
  },
  {
    id: 3,
    name: "Designer Denim Jeans",
    price: 159,
    image: "/api/placeholder/400/500",
    category: "Denim",
  },
  {
    id: 4,
    name: "Silk Evening Dress",
    price: 449,
    image: "/api/placeholder/400/500",
    category: "Dresses",
    isNew: true,
  },
  {
    id: 5,
    name: "Cashmere Sweater",
    price: 199,
    originalPrice: 249,
    image: "/api/placeholder/400/500",
    category: "Knitwear",
    isSale: true,
  },
  {
    id: 6,
    name: "Leather Ankle Boots",
    price: 329,
    image: "/api/placeholder/400/500",
    category: "Footwear",
  },
  {
    id: 7,
    name: "Minimalist Handbag",
    price: 189,
    image: "/api/placeholder/400/500",
    category: "Accessories",
    isNew: true,
  },
  {
    id: 8,
    name: "Tailored Trousers",
    price: 129,
    originalPrice: 169,
    image: "/api/placeholder/400/500",
    category: "Bottoms",
    isSale: true,
  },
];
