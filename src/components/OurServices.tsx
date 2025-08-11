import { Truck, Package, Clock, CheckCircle } from "lucide-react";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { services, type Service } from "../utils/services";

const ServiceCard = ({
  name,
  icon,
  title,
  color,
  types,
}: {
  name: string;
  icon: any;
  title: string;
  color: string;
  types: string[];
}) => {
  const navigate = useNavigate();
  const Icon = icon;

  return (
    <div
      className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden"
      onClick={() => navigate(`/our-services/${name}`)}
    >
      <div
        className={`flex items-center gap-2 px-2 py-2 ${color} text-white font-semibold text-lg sm:text-xl`}
      >
        <Icon className="w-5 h-5" aria-hidden="true" />
        <span>{title}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-2 py-2">
        {types.map((type) => (
          <div key={type} className="flex items-start gap-2">
            <CheckCircle
              className="text-green-500 w-5 h-5 mt-0.5"
              aria-hidden="true"
            />
            <span className="text-gray-800 text-sm sm:text-base">{type}</span>
          </div>
        ))}
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
      <div className="max-w-6xl mx-auto px-2 sm:px-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-2">
          Our Services
        </h2>
        <p className="text-center text-base text-gray-600 mb-12">
          Comprehensive laundry and dry cleaning solutions tailored to your
          lifestyle.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {services.map(({ name, icon, title, color, types }: Service) => (
            <ServiceCard
              key={title}
              name={name}
              icon={icon}
              title={title}
              color={color}
              types={types}
            />
          ))}
        </div>

        {/* Other Services */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex items-center gap-2 px-2 py-2 bg-green-500 text-white font-semibold text-lg sm:text-xl">
              <Package className="w-5 h-5" aria-hidden="true" />
              <span>Other Services</span>
            </div>
            <div className="flex flex-wrap gap-3 p-2">
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
                  className="flex items-center gap-2 bg-green-100 text-green-800 px-2 py-2 rounded-full text-sm font-medium shadow-sm"
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

export default OurServices;
