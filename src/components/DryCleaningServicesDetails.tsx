// pages/service-details/DryCleaningServicesDetails.tsx
import { Shirt, CheckCircle } from "lucide-react";

const DryCleaningServicesDetails = () => {
  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Shirt className="w-8 h-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-indigo-900">
          Dry Cleaning Services
        </h1>
      </div>

      <p className="text-gray-700 mb-6">
        Our dry cleaning services keep your delicate and formal garments looking
        new while preserving their fabric quality. Perfect for suits, dresses,
        and special wear.
      </p>

      <ul className="space-y-3">
        {[
          "Shirt Dry Cleaning",
          "Saree Dry Cleaning",
          "Woolens & Sweater Dry Clean",
          "Suit / Blazer Dry Cleaning",
          "Dress Dry Cleaning",
          "Silk / Delicate Dry Cleaning",
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

export default DryCleaningServicesDetails;
