import {
  Home,
  Shirt,
  Sparkles,
  Truck,
  MapPin,
  Box,
  Layers,
} from "lucide-react";

import regularWashImg from "../assets/regular-wash.jpg";
import dryCleaningImg from "../assets/dry-cleaning.jpg";
import ironingImg from "../assets/ironing.jpg";
import woolenImg from "../assets/woolen-winter.jpg";
import carpetImg from "../assets/carpet-rug.jpg";
import curtainImg from "../assets/curtain-upholstery.jpg";
import linenImg from "../assets/household-linen.jpg";
import homeLaundryImg from "../assets/home-laundry.jpg";
import hotelLaundryImg from "../assets/hotel-laundry.jpg";

export interface IService {
  name: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  color: string;
  types: string[];
  description: string;
  longDscription: string;
  shortDescription: string;
  image: string;
}

export const services: IService[] = [
  {
    name: "regular_wash_fold",
    icon: Shirt,
    title: "Regular Wash & Fold",
    color: "bg-gradient-to-r from-blue-600 to-blue-400",
    description: "Efficient and reliable laundry for your everyday clothes.",
    longDscription:
      "Our regular wash & fold service ensures your daily wear is cleaned, dried, and folded to perfection. We use high-quality detergents and gentle handling to keep your clothes fresh and ready for use. Fast turnaround and dependable care for your wardrobe essentials.",
    shortDescription:
      "Fast, reliable service with attention to detail on every load.",
    image: regularWashImg,
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
    image: dryCleaningImg,
    description:
      "Gentle yet thorough cleaning to preserve your garment's elegance and quality.",
    longDscription:
      "Our dry cleaning service is designed for your most valued and delicate garments. Using state-of-the-art cleaning methods and fabric-specific care, we ensure your clothes remain in pristine condition. From formal suits to luxurious silks, each item receives individual attention to preserve color, texture, and shape.",
    shortDescription:
      "Keep your outfits looking new — Our expert dry cleaning protects fabrics while removing even the most stubborn stains.",
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
    image: ironingImg,
    description: "Professional ironing for a crisp, wrinkle-free finish.",
    longDscription:
      "Our skilled team ensures your clothes look perfectly pressed and wrinkle-free. Ideal for workwear, formal attire, and everyday garments. We use modern pressing equipment to give your clothes a fresh, sharp look.",
    shortDescription: "Crisp and fresh clothes, ready for every occasion.",
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
    image: woolenImg,
    description:
      "Specialized cleaning for your heavy winter and woolen clothes.",
    longDscription:
      "We provide expert cleaning for woolens, sweaters, shawls, and other bulky winter garments, ensuring they are fresh, soft, and ready for the cold season. Our gentle methods protect fabric texture and colors.",
    shortDescription:
      "Keep your winter wear soft, clean, and protected all season long.",
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
    image: carpetImg,
    description:
      "Professional care for your traditional Kashmiri carpets and rugs.",
    longDscription:
      "Our specialized cleaning services ensure your carpets and rugs retain their vibrant colors and intricate designs. We remove dust, stains, and allergens while preserving the delicate fabric and weave.",
    shortDescription:
      "Protect and preserve the beauty of your precious carpets.",
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
    image: curtainImg,
    description:
      "Cleaning for curtains, sofa covers, cushions, and other upholstery.",
    longDscription:
      "We provide professional cleaning services for all types of curtains and upholstery fabrics, removing dust, stains, and odors. Our gentle techniques preserve fabric quality and prolong the life of your home furnishings.",
    shortDescription:
      "Refresh your home with clean and fresh curtains and upholstery.",
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
    image: linenImg,
    description:
      "Cleaning of bed sheets, blankets, quilts, pillow covers, and more.",
    longDscription:
      "            Our linen cleaning service ensures your household fabrics are hygienically cleaned and refreshed. We handle large items with care and offer pickup and delivery for your convenience.",
    shortDescription:
      "Fresh and hygienic linens delivered right to your doorstep.",
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
    image: homeLaundryImg,

    description: "Bulk laundry service designed for hotels and guest houses.",
    longDscription:
      "We offer door-to-door laundry service with flexible scheduling, easy booking, and careful handling of your clothes. Perfect for busy households seeking convenience without compromising quality.",
    shortDescription:
      "Experience the ultimate convenience of home laundry services.",
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
    name: "home_heavy_item_cleaning",
    icon: Sparkles,
    title: "Hotel & Home Heavy Item Cleaning",
    color: "bg-gradient-to-r from-purple-500 to-pink-400",
    image: hotelLaundryImg,
    description:
      "Professional cleaning services for your bulky and delicate home items.",
    longDscription:
      "            We offer specialized cleaning solutions for your home’s heavy and bulky items. From bedsheets to carpets, our expert team ensures every item is cleaned thoroughly, restoring freshness and comfort to your living spaces.",
    shortDescription:
      "Restore comfort and cleanliness to your home — Our heavy item cleaning service handles even the most challenging items with expert care.",
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
