import { useState, useEffect, type FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HomeAndHeavyItemsDetails from "./HomeAndHeavyItemsDetails";
import SpecialtyServicesDetails from "./SpecialtyServicesDetails";
import ClothingServicesDetails from "./ClothingServicesDetails";
import DryCleaningServicesDetails from "./DryCleaningServicesDetails";
import BookingForm from "./BookingForm";

const servicePages: Record<string, { label: string; component: FC }> = {
  clothing_services: {
    label: "Clothing Services",
    component: ClothingServicesDetails,
  },
  dry_cleaning_services: {
    label: "Dry Cleaning Services",
    component: DryCleaningServicesDetails,
  },
  home_and_heavy_items: {
    label: "Home & Heavy Items",
    component: HomeAndHeavyItemsDetails,
  },
  specialty_services: {
    label: "Specialty Services",
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
      <p className="text-center text-gray-600 py-10">Service not found.</p>
    );
  }

  const SelectedComponent = servicePages[selected].component;
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 m-2">
        {Object.entries(servicePages).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => navigate(`/our-services/${key}`)}
            className={key === selected ? "selected-button" : ""}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Page Content */}
      <section
        id="services"
        className="py-2 sm:py-2bg-gradient-to-b from-sky-50 to-white scroll-mt-2"
      >
        <SelectedComponent />
      </section>

      <div className="mb-2">
        <button
          type="button"
          onClick={() => setIsBookingOpen(true)}
          aria-label="Book Now"
        >
          <span>Book Now</span>
        </button>
      </div>
      {isBookingOpen && (
        <BookingForm onClose={() => setIsBookingOpen(false)} channel={"all"} />
      )}
    </>
  );
};

export default ServiceDetails;
