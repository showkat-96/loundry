import { useState, useEffect, type FC } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CarpetRugCleaningDetails from "./CarpetRugCleaningDetails";
import CurtainUpholsteryCleaningDetails from "./CurtainUpholsteryCleaningDetails";
import HomeLaundryServicesDetails from "./HomeLaundryServicesDetails";
import HotelLaundryServicesDetails from "./HotelLaundryServicesDetails";
import HouseholdLinenCleaningDetails from "./HouseholdLinenCleaningDetails";
import IroningPressingDetails from "./IroningPressingDetails";
import RegularWashFoldDetails from "./RegularWashFoldDetails";
import WoolenWinterGarmentCleaningDetails from "./WoolenWinterGarmentCleaningDetails";
import DryCleaningDetails from "./DryCleaningDetails";

import bgImage from "../assets/bg-img-home.jpg";

const servicePages: Record<
  string,
  { label: string; description: string; component: FC }
> = {
  regular_wash_fold: {
    label: "Regular Wash & Fold",
    description: "Everyday clothes washing, drying, and folding.",
    component: RegularWashFoldDetails,
  },
  dry_cleaning: {
    label: "Dry Cleaning",
    description: "Expert care for delicate and special fabrics.",
    component: DryCleaningDetails,
  },
  ironing_pressing: {
    label: "Ironing & Pressing",
    description: "Professional ironing for a crisp, wrinkle-free finish.",
    component: IroningPressingDetails,
  },
  woolen_winter_garments: {
    label: "Woolen & Winter Garment Cleaning",
    description: "Special care for woolens, shawls, and heavy winter wear.",
    component: WoolenWinterGarmentCleaningDetails,
  },
  carpet_rug_cleaning: {
    label: "Carpet & Rug Cleaning",
    description: "Cleaning traditional Kashmiri carpets and rugs.",
    component: CarpetRugCleaningDetails,
  },
  curtain_upholstery_cleaning: {
    label: "Curtain & Upholstery Cleaning",
    description: "Washing curtains, sofa covers, and cushions.",
    component: CurtainUpholsteryCleaningDetails,
  },
  household_linen_cleaning: {
    label: "Household Linen Cleaning",
    description: "Bed sheets, blankets, quilts, and pillow covers.",
    component: HouseholdLinenCleaningDetails,
  },
  home_laundry_services: {
    label: "Home Laundry Services",
    description: "Convenient pickup and delivery for residential customers.",
    component: HomeLaundryServicesDetails,
  },
  hotel_laundry_services: {
    label: "Hotel Laundry Services",
    description: "Bulk laundry service for hotels and guest houses.",
    component: HotelLaundryServicesDetails,
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
