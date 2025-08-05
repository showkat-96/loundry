import {
  Shirt,
  Home,
  Sparkles,
  Truck,
  Package,
  Clock,
  CheckCircle,
} from "lucide-react"; // Use Lucide icons or your own
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
      className={`flex items-center gap-2 px-4 py-3 ${color} text-white font-semibold text-lg`}
    >
      {icon}
      <span>{title}</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
      {services.map((service, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <CheckCircle className="text-green-500 w-5 h-5 mt-0.5" />
          <span className="text-gray-700 text-sm">{service}</span>
        </div>
      ))}
    </div>
  </div>
);

const ServicesSection: FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-3">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Comprehensive laundry and dry cleaning solutions for all your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Clothing Services */}
          <ServiceCard
            icon={<Shirt className="w-5 h-5" />}
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
          {/* Dry Cleaning */}
          <ServiceCard
            icon={<Shirt className="w-5 h-5" />}
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
          {/* Home & Heavy Items */}
          <ServiceCard
            icon={<Home className="w-5 h-5" />}
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
          {/* Specialty Services */}
          <ServiceCard
            icon={<Sparkles className="w-5 h-5" />}
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
            <div className="flex items-center gap-2 px-4 py-3 bg-green-500 text-white font-semibold text-lg">
              <Package className="w-5 h-5" />
              <span>Other Services</span>
            </div>
            <div className="flex flex-wrap gap-4 p-4">
              {[
                {
                  label: "Pickup & Delivery",
                  icon: <Truck className="w-4 h-4" />,
                },
                {
                  label: "Weekly Laundry Subscription",
                  icon: <Package className="w-4 h-4" />,
                },
                {
                  label: "Same-Day Service",
                  icon: <Clock className="w-4 h-4" />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
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
