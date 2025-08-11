// pages/service-details/SpecialtyServicesDetails.tsx
import bgImage from "../assets/bg-img-home.jpg";
import { Sparkles, CheckCircle } from "lucide-react";

const SpecialtyServicesDetails = () => {
  const services = [
    "Baby Clothes Wash",
    "Leather Jacket Cleaning",
    "Uniform Cleaning",
    "Wedding Dress Dry Clean",
    "Traditional Wear Cleaning",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
          <Sparkles className="w-14 h-14 mx-auto mb-3" />
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Specialty Services</h1>
          <p className="mt-2 text-lg max-w-xl mx-auto">
            For those special garments and unique fabrics, we provide tailored cleaning techniques to ensure your most valued pieces are handled with the utmost care.
          </p>
        </div>
        {/* Features List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50 border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span className="text-gray-800 font-medium">{service}</span>
            </div>
          ))}
        </div>

        {/* Extra Highlight Section */}
        <div className="mt-12 bg-pink-50 border border-pink-200 rounded-lg p-6 flex items-center gap-4">
          <Sparkles className="text-pink-600 w-8 h-8" />
          <p className="text-pink-900 font-medium">
            Trust us to handle your specialty items with expert care and precision.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <button className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700 transition">
            Schedule Your Specialty Service Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default SpecialtyServicesDetails;
