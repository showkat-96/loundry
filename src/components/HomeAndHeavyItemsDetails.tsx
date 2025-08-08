// pages/service-details/HomeAndHeavyItemsDetails.tsx
import { Home, CheckCircle } from "lucide-react";

const HomeAndHeavyItemsDetails = () => {
  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex items-center gap-3 mb-6">
        <Home className="w-8 h-8 text-cyan-600" />
        <h1 className="text-3xl font-bold text-cyan-900">Home & Heavy Items</h1>
      </div>

      <p className="text-gray-700 mb-6">
        Large household items deserve professional cleaning too. We ensure your
        bedding, upholstery, and heavy fabrics stay fresh, hygienic, and
        well-maintained.
      </p>

      <ul className="space-y-3">
        {[
          "Bedsheet Cleaning",
          "Comforter Cleaning",
          "Curtain Cleaning",
          "Sofa Cover Cleaning",
          "Blanket Cleaning",
          "Pillow & Cushion Cover Cleaning",
          "Carpet & Rug Wash",
          "Mattress Cover Cleaning",
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

export default HomeAndHeavyItemsDetails;
