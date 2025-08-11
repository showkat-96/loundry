import { Home, Shirt, Sparkles, Truck, MapPin, Box, Layers } from "lucide-react";

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
    name: "ironing_pressing",
    icon: Box,
    title: "Ironing & Pressing",
    color: "bg-gradient-to-r from-indigo-600 to-purple-600",
    types: [
      "Shirt Ironing",
      "Pants Pressing",
      "Dress Ironing",
      "Curtain Ironing",
      "Uniform Pressing",
      "Express Ironing",
    ],
  },
  {
    name: "woolen_winter_garment_cleaning",
    icon: Layers,
    title: "Woolen & Winter Garment Cleaning",
    color: "bg-gradient-to-r from-purple-700 to-pink-600",
    types: [
      "Woolen Sweater Cleaning",
      "Winter Coat Cleaning",
      "Heavy Jacket Cleaning",
      "Blanket Cleaning",
      "Quilt Cleaning",
      "Scarf & Gloves Cleaning",
    ],
  },
  {
    name: "carpet_rug_cleaning",
    icon: Truck,
    title: "Carpet & Rug Cleaning",
    color: "bg-gradient-to-r from-green-600 to-teal-500",
    types: [
      "Handwoven Carpet Cleaning",
      "Area Rug Cleaning",
      "Persian Rug Cleaning",
      "Stain Removal",
      "Odor Treatment",
      "Pickup & Delivery",
    ],
  },
  {
    name: "curtain_upholstery_cleaning",
    icon: Home,
    title: "Curtain & Upholstery Cleaning",
    color: "bg-gradient-to-r from-sky-500 to-cyan-400",
    types: [
      "Curtain Cleaning",
      "Sofa Cover Cleaning",
      "Cushion Cleaning",
      "Drapes Cleaning",
      "Upholstery Stain Removal",
      "Pickup & Delivery",
    ],
  },
  {
    name: "household_linen_cleaning",
    icon: Truck,
    title: "Household Linen Cleaning",
    color: "bg-gradient-to-r from-yellow-500 to-yellow-400",
    types: [
      "Bed Sheet Washing",
      "Blanket & Quilt Cleaning",
      "Pillow Cover Cleaning",
      "Hygienic & Deep Cleaning",
      "Bulk Laundry Service",
      "Pickup & Delivery Available",
    ],
  },
  {
    name: "home_laundry_services",
    icon: MapPin,
    title: "Home Laundry Services",
    color: "bg-gradient-to-r from-pink-500 to-rose-400",
    types: [
      "Scheduled Pickup & Delivery",
      "Careful Sorting & Handling",
      "Flexible Service Plans",
      "Eco-friendly Cleaning",
      "Customer Support",
      "Real-time Order Tracking",
    ],
  },
  {
    name: "hotel_laundry_services",
    icon: Sparkles,
    title: "Hotel Laundry Services",
    color: "bg-gradient-to-r from-purple-500 to-pink-400",
    types: [
      "Bed Linen & Towel Cleaning",
      "Uniform Laundry",
      "Guest Laundry Service",
      "Express Turnaround",
      "Quality Assurance",
      "Pickup & Delivery Service",
    ],
  },
];
