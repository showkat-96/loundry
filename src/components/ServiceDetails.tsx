import type { FC } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails: FC = () => {
  const { name } = useParams();
  return (
    <section
      id="services"
      className="py-8 sm:py-20 bg-gradient-to-b from-sky-50 to-white scroll-mt-24"
    >
      <h1>{name} Service Details</h1>
    </section>
  );
};

export default ServiceDetails;
