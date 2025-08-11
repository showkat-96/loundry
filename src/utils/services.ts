import { Home, Shirt, Sparkles } from "lucide-react";

export interface Service {
  name: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  color: string;
  types: string[];
}

export const services: Service[] = [
  {
    name: "clothing_services",
    icon: Shirt,
    title: "Clothing Services",
    color: "bg-gradient-to-r from-blue-600 to-blue-400",
    types: [
      "Wash & Fold",
      "Only Iron",
      "Stain Removal",
      "Wash & Iron",
      "Express Laundry",
      "Premium Fragrance Wash",
    ],
  },
  {
    name: "dry_cleaning_services",
    icon: Shirt,
    title: "Dry Cleaning Services",
    color: "bg-gradient-to-r from-blue-600 to-indigo-500",
    types: [
      "Shirt Dry Cleaning",
      "Saree Dry Cleaning",
      "Woolens & Sweater Dry Clean",
      "Suit / Blazer Dry Cleaning",
      "Dress Dry Cleaning",
      "Silk / Delicate Dry Cleaning",
    ],
  },
  {
    name: "home_and_heavy_items",
    icon: Home,
    title: "Home & Heavy Items",
    color: "bg-gradient-to-r from-sky-500 to-cyan-400",
    types: [
      "Bedsheet Cleaning",
      "Comforter Cleaning",
      "Curtain Cleaning",
      "Sofa Cover Cleaning",
      "Blanket Cleaning",
      "Pillow & Cushion Cover Cleaning",
      "Carpet & Rug Wash",
      "Mattress Cover Cleaning",
    ],
  },
  {
    name: "specialty_services",
    icon: Sparkles,
    title: "Specialty Services",
    color: "bg-gradient-to-r from-purple-500 to-pink-400",
    types: [
      "Baby Clothes Wash",
      "Leather Jacket Cleaning",
      "Uniform Cleaning",
      "Wedding Dress Dry Clean",
      "Traditional Wear Cleaning",
    ],
  },
];
