import { useState, useEffect, type FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HomeAndHeavyItemsDetails from "./HomeAndHeavyItemsDetails";
import SpecialtyServicesDetails from "./SpecialtyServicesDetails";
import ClothingServicesDetails from "./ClothingServicesDetails";
import DryCleaningServicesDetails from "./DryCleaningServicesDetails";
import bgImage from "../assets/bg-img-home.jpg";

const servicePages: Record<
  string,
  { label: string; description: string; component: FC }
> = {
  clothing_services: {
    label: "Clothing Services",
    description: "Professional cleaning and care for your garments.",
    component: ClothingServicesDetails,
  },
  dry_cleaning_services: {
    label: "Dry Cleaning Services",
    description: "Expert dry cleaning for delicate and special fabrics.",
    component: DryCleaningServicesDetails,
  },
  home_and_heavy_items: {
    label: "Home & Heavy Items",
    description: "Cleaning for bedding, curtains, carpets, and more.",
    component: HomeAndHeavyItemsDetails,
  },
  specialty_services: {
    label: "Specialty Services",
    description: "Custom solutions for unique laundry needs.",
    component: SpecialtyServicesDetails,
  },
};

const ServiceDetails: FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(name || "");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (name) setSelected(name);
  }, [name]);

  if (!selected || !servicePages[selected]) {
    return (
      <div className="p-6">
        <h2 className="text-center text-gray-600 mb-6 text-xl font-semibold">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(servicePages).map(([key, { label, description }]) => (
            <div
              key={key}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 aspect-square flex flex-col"
              onClick={() => navigate(`/our-services/${key}`)}
            >
              <img
                src={bgImage}
                alt={label}
                className="w-full h-1/2 object-cover"
              />
              <div className="flex flex-col items-center justify-center flex-1 px-4 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
                <h3 className="text-lg font-semibold">{label}</h3>
                <p className="text-sm mt-2 text-center">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const SelectedComponent = servicePages[selected].component;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 my-4">
        {Object.entries(servicePages).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => navigate(`/our-services/${key}`)}
            className={`px-4 py-2 rounded-md border transition-colors ${
              key === selected
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <section
        id="services"
        className="py-4 bg-gradient-to-b from-sky-50 to-white scroll-mt-2"
      >
        <SelectedComponent />
      </section>
    </>
  );
};

export default ServiceDetails;
