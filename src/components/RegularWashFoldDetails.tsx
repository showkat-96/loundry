// pages/service-details/RegularWashFoldDetails.tsx
import bgImage from "../assets/bg-img-home.jpg";
import { Repeat, CheckCircle, Sparkles } from "lucide-react";

const RegularWashFoldDetails = () => {
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
        <Repeat className="w-14 h-14 mx-auto mb-3" />
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Regular Wash & Fold</h1>
          <p className="mt-2 text-lg max-w-xl mx-auto">
            Efficient and reliable laundry for your everyday clothes.
          </p>
        </div>
        {/* Intro */}
        <div className="mb-8 text-center">
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
            Our regular wash & fold service ensures your daily wear is
            cleaned, dried, and folded to perfection. We use high-quality detergents
            and gentle handling to keep your clothes fresh and ready for use.
            Fast turnaround and dependable care for your wardrobe essentials.
          </p>
        </div>

        {/* Features List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Washing & Drying",
            "Folding & Packaging",
            "Quick Turnaround",
            "Eco-friendly Detergents",
            "Color-safe Wash",
            "Bulk Laundry Discounts",
          ].map((service, idx) => (
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
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 flex items-center gap-4">
          <Sparkles className="text-blue-600 w-8 h-8" />
          <p className="text-blue-900 font-medium">
            Fast, reliable service with attention to detail on every load.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Book Your Laundry Service Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default RegularWashFoldDetails;
