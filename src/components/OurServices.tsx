import { Shirt, Home, Sparkles } from "lucide-react";
import type { FC, JSX } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg-img-home.jpg";

const ServiceCard = ({
  name,
  icon,
  title,
  description,
}: {
  name: string;
  icon: JSX.Element;
  title: string;
  description: string;
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
          src={bgImage}
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
            name="clothing_services"
            icon={<Shirt className="w-5 h-5" aria-hidden="true" />}
            title="Clothing Services"
            description="Wash, fold, iron, and more for your garments."
          />

          <ServiceCard
            name="dry_cleaning_services"
            icon={<Shirt className="w-5 h-5" aria-hidden="true" />}
            title="Dry Cleaning"
            description="Expert care for delicate and luxury fabrics."
          />

          <ServiceCard
            name="home_and_heavy_items"
            icon={<Home className="w-5 h-5" aria-hidden="true" />}
            title="Home & Heavy Items"
            description="Bedding, curtains, and other bulky items."
          />

          <ServiceCard
            name="specialty_services"
            icon={<Sparkles className="w-5 h-5" aria-hidden="true" />}
            title="Specialty Services"
            description="Wedding dresses, uniforms, leather & more."
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
