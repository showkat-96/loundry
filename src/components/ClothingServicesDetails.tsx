// pages/service-details/ClothingServicesDetails.tsx
import { Shirt, CheckCircle } from "lucide-react";

const ClothingServicesDetails = () => {
  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Shirt className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-blue-900">Clothing Services</h1>
      </div>

      <p className="text-gray-700 mb-6">
        We handle all types of clothing with care, from your everyday wear to
        special garments. Our professional cleaning ensures your clothes stay
        fresh, spotless, and well-ironed.
      </p>

      <ul className="space-y-3">
        {[
          "Wash & Fold",
          "Only Iron",
          "Stain Removal",
          "Wash & Iron",
          "Express Laundry",
          "Premium Fragrance Wash",
        ].map((service, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckCircle className="text-green-500 w-5 h-5 mt-0.5" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ClothingServicesDetails;
