import type { FC } from "react";
import { services } from "../utils/services";
import Service from "./Service";

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
          Comprehensive laundry and dry cleaning solutions tailored to your
          lifestyle.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ name, icon, title, description, image }) => (
            <Service
              key={name}
              name={name}
              icon={icon}
              image={image}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
