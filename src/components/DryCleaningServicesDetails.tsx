// pages/service-details/DryCleaningServicesDetails.tsx
import bgImage from "../assets/bg-img-home.jpg";
import { Shirt, CheckCircle, Sparkles } from "lucide-react";

const DryCleaningServicesDetails = () => {
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
          <Shirt className="w-14 h-14 mx-auto mb-3" />
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Dry Cleaning Services</h1>
          <p className="mt-2 text-lg max-w-xl mx-auto">
            Gentle yet thorough cleaning to preserve your garments’ elegance and quality.
          </p>
        </div>
        {/* Intro */}
        <div className="mb-8 text-center">
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
            Our dry cleaning service is designed for your most valued and delicate garments.
            Using state-of-the-art cleaning methods and fabric-specific care, we ensure 
            your clothes remain in pristine condition. From formal suits to luxurious silks, 
            each item receives individual attention to preserve color, texture, and shape.
          </p>
        </div>

        {/* Features List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Shirt Dry Cleaning",
            "Saree Dry Cleaning",
            "Woolens & Sweater Dry Clean",
            "Suit / Blazer Dry Cleaning",
            "Dress Dry Cleaning",
            "Silk / Delicate Dry Cleaning",
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
        <div className="mt-12 bg-indigo-50 border border-indigo-200 rounded-lg p-6 flex items-center gap-4">
          <Sparkles className="text-indigo-600 w-8 h-8" />
          <p className="text-indigo-900 font-medium">
            Keep your outfits looking new — Our expert dry cleaning protects fabrics while 
            removing even the most stubborn stains.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
            Schedule Your Dry Cleaning Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default DryCleaningServicesDetails;
