// pages/service-details/HomeAndHeavyItemsDetails.tsx
import bgImage from "../assets/bg-img-home.jpg";
import { Home, CheckCircle, Sparkles } from "lucide-react";

const HomeAndHeavyItemsDetails = () => {
  const services = [
    "Bedsheet Cleaning",
    "Comforter Cleaning",
    "Curtain Cleaning",
    "Sofa Cover Cleaning",
    "Blanket Cleaning",
    "Pillow & Cushion Cover Cleaning",
    "Carpet & Rug Wash",
    "Mattress Cover Cleaning",
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
        <div className="text-center text-white">
          <Home className="w-14 h-14 mx-auto mb-3" />
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-12 px-4">
         <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Home & Heavy Item Cleaning</h1>
          <p className="mt-2 text-lg max-w-xl mx-auto">
            Professional cleaning services for your bulky and delicate home items.
          </p>
        </div>
        {/* Intro */}
        <div className="mb-8 text-center">
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
            We offer specialized cleaning solutions for your home’s heavy and bulky items.
            From bedsheets to carpets, our expert team ensures every item is cleaned 
            thoroughly, restoring freshness and comfort to your living spaces.
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
        <div className="mt-12 bg-indigo-50 border border-indigo-200 rounded-lg p-6 flex items-center gap-4">
          <Sparkles className="text-indigo-600 w-8 h-8" />
          <p className="text-indigo-900 font-medium">
            Restore comfort and cleanliness to your home — Our heavy item cleaning service 
            handles even the most challenging items with expert care.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
            Schedule Your Home & Heavy Item Cleaning Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeAndHeavyItemsDetails;
