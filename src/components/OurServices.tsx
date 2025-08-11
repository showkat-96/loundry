import { Shirt, Home, Sparkles, Repeat, BedDouble, MapPin, ClipboardCheck, Truck, ScrollText } from "lucide-react";
import type { FC, JSX } from "react";
import { useNavigate } from "react-router-dom";

// Import images for each service
import regularWashImg from "../assets/regular-wash.jpg";
import dryCleaningImg from "../assets/dry-cleaning.jpg";
import ironingImg from "../assets/ironing.jpg";
import woolenImg from "../assets/woolen-winter.jpg";
import carpetImg from "../assets/carpet-rug.jpg";
import curtainImg from "../assets/curtain-upholstery.jpg";
import linenImg from "../assets/household-linen.jpg";
import homeLaundryImg from "../assets/home-laundry.jpg";
import hotelLaundryImg from "../assets/hotel-laundry.jpg";

const ServiceCard = ({
  name,
  icon,
  title,
  description,
  image,
}: {
  name: string;
  icon: JSX.Element;
  title: string;
  description: string;
  image: string;  // new prop for image source
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/our-services/${name}`)}
      className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 w-full aspect-square flex flex-col"
    >
      {/* Top Image */}
      <div className="w-full h-2/3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header & Description */}
      <div className="flex flex-col items-center justify-center flex-1 px-4 py-3">
        <div className="flex items-center gap-2 text-lg font-semibold text-blue-900 mb-1">
          {icon}
          <span>{title}</span>
        </div>
        <p className="text-sm text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

const OurServices: FC = () => {
  return (
    <section
      id="services"
      className="py-8 sm:py-20 bg-gradient-to-b from-sky-50 to-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-2">
          Our Services
        </h2>
        <p className="text-center text-base text-gray-600 mb-12">
          Comprehensive laundry and dry cleaning solutions tailored to your lifestyle.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            name="regular_wash_fold"
            icon={<Repeat className="w-5 h-5" aria-hidden="true" />}
            title="Regular Wash & Fold"
            description="Everyday clothes washing, drying, and folding."
            image={regularWashImg}
          />

          <ServiceCard
            name="dry_cleaning"
            icon={<Shirt className="w-5 h-5" aria-hidden="true" />}
            title="Dry Cleaning"
            description="Expert care for delicate and luxury fabrics."
            image={dryCleaningImg}
          />

          <ServiceCard
            name="ironing_pressing"
            icon={<ClipboardCheck className="w-5 h-5" aria-hidden="true" />}
            title="Ironing & Pressing"
            description="Professional ironing for a crisp, wrinkle-free finish."
            image={ironingImg}
          />

          <ServiceCard
            name="woolen_winter_garments"
            icon={<BedDouble className="w-5 h-5" aria-hidden="true" />}
            title="Woolen & Winter Garment Cleaning"
            description="Special care for woolens, shawls, and heavy winter wear."
            image={woolenImg}
          />

          <ServiceCard
            name="carpet_rug_cleaning"
            icon={<ScrollText className="w-5 h-5" aria-hidden="true" />}
            title="Carpet & Rug Cleaning"
            description="Cleaning traditional Kashmiri carpets and rugs."
            image={carpetImg}
          />

          <ServiceCard
            name="curtain_upholstery_cleaning"
            icon={<Home className="w-5 h-5" aria-hidden="true" />}
            title="Curtain & Upholstery Cleaning"
            description="Washing curtains, sofa covers, and cushions."
            image={curtainImg}
          />

          <ServiceCard
            name="household_linen_cleaning"
            icon={<Truck className="w-5 h-5" aria-hidden="true" />}
            title="Household Linen Cleaning"
            description="Bed sheets, blankets, quilts, and pillow covers."
            image={linenImg}
          />

          <ServiceCard
            name="home_laundry_services"
            icon={<MapPin className="w-5 h-5" aria-hidden="true" />}
            title="Home Laundry Services"
            description="Convenient pickup and delivery for residential customers."
            image={homeLaundryImg}
          />

          <ServiceCard
            name="hotel_laundry_services"
            icon={<Sparkles className="w-5 h-5" aria-hidden="true" />}
            title="Hotel Laundry Services"
            description="Bulk laundry service for hotels and guest houses."
            image={hotelLaundryImg}
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
