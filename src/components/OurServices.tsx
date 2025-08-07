import {
  Shirt,
  Home,
  Sparkles,
  Truck,
  Package,
  Clock,
  CheckCircle,
} from "lucide-react";
import type { FC, JSX } from "react";

const ServiceCard = ({
  icon,
  title,
  color,
  services,
}: {
  icon: JSX.Element;
  title: string;
  color: string;
  services: string[];
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div
      className={`flex items-center gap-2 px-4 py-3 ${color} text-white font-semibold text-base sm:text-lg`}
    >
      {icon}
      <span>{title}</span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4">
      {services.map((service, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <CheckCircle
            className="text-green-500 w-5 h-5 mt-0.5"
            aria-hidden="true"
          />
          <span className="text-gray-700 text-sm sm:text-base">{service}</span>
        </div>
      ))}
    </div>
  </div>
);

const ServicesSection: FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-3">
          Our Services
        </div>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-10">
          Comprehensive laundry and dry cleaning solutions for all your needs
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <ServiceCard
            icon={<Shirt className="w-5 h-5" aria-hidden="true" />}
            title="Clothing Services"
            color="bg-gradient-to-r from-blue-600 to-blue-400"
            services={[
              "Wash & Fold",
              "Only Iron",
              "Stain Removal",
              "Wash & Iron",
              "Express Laundry",
              "Premium Fragrance Wash",
            ]}
          />

          <ServiceCard
            icon={<Shirt className="w-5 h-5" aria-hidden="true" />}
            title="Dry Cleaning Services"
            color="bg-gradient-to-r from-blue-600 to-indigo-500"
            services={[
              "Shirt Dry Cleaning",
              "Saree Dry Cleaning",
              "Woolens & Sweater Dry Clean",
              "Suit / Blazer Dry Cleaning",
              "Dress Dry Cleaning",
              "Silk / Delicate Dry Cleaning",
            ]}
          />

          <ServiceCard
            icon={<Home className="w-5 h-5" aria-hidden="true" />}
            title="Home & Heavy Items"
            color="bg-gradient-to-r from-sky-500 to-cyan-400"
            services={[
              "Bedsheet Cleaning",
              "Comforter Cleaning",
              "Curtain Cleaning",
              "Sofa Cover Cleaning",
              "Blanket Cleaning",
              "Pillow & Cushion Cover Cleaning",
              "Carpet & Rug Wash",
              "Mattress Cover Cleaning",
            ]}
          />

          <ServiceCard
            icon={<Sparkles className="w-5 h-5" aria-hidden="true" />}
            title="Specialty Services"
            color="bg-gradient-to-r from-purple-500 to-pink-400"
            services={[
              "Baby Clothes Wash",
              "Leather Jacket Cleaning",
              "Uniform Cleaning",
              "Wedding Dress Dry Clean",
              "Traditional Wear Cleaning",
            ]}
          />
        </div>

        {/* Other Services */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-green-500 text-white font-semibold text-base sm:text-lg">
              <Package className="w-5 h-5" aria-hidden="true" />
              <span>Other Services</span>
            </div>
            <div className="flex flex-wrap gap-3 p-4">
              {[
                {
                  label: "Pickup & Delivery",
                  icon: <Truck className="w-4 h-4" aria-hidden="true" />,
                },
                {
                  label: "Weekly Laundry Subscription",
                  icon: <Package className="w-4 h-4" aria-hidden="true" />,
                },
                {
                  label: "Same-Day Service",
                  icon: <Clock className="w-4 h-4" aria-hidden="true" />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-xs sm:text-sm"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
