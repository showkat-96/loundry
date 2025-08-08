// pages/service-details/SpecialtyServicesDetails.tsx
import { Sparkles, CheckCircle } from "lucide-react";

const SpecialtyServicesDetails = () => {
  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-8 h-8 text-pink-500" />
        <h1 className="text-3xl font-bold text-pink-900">Specialty Services</h1>
      </div>

      <p className="text-gray-700 mb-6">
        For those special garments and unique fabrics, we provide tailored
        cleaning techniques to ensure your most valued pieces are handled with
        the utmost care.
      </p>

      <ul className="space-y-3">
        {[
          "Baby Clothes Wash",
          "Leather Jacket Cleaning",
          "Uniform Cleaning",
          "Wedding Dress Dry Clean",
          "Traditional Wear Cleaning",
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

export default SpecialtyServicesDetails;
