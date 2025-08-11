// pages/service-details/IroningPressingDetails.tsx
import bgImage from "../assets/bg-img-home.jpg";
import { ClipboardCheck, CheckCircle, Sparkles } from "lucide-react";

const IroningPressingDetails = () => {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ClipboardCheck className="w-14 h-14 mx-auto mb-3" />
      </section>

      <section className="max-w-5xl mx-auto py-12 px-4">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Ironing & Pressing</h1>
          <p className="mt-2 text-lg max-w-xl mx-auto">
            Professional ironing for a crisp, wrinkle-free finish.
          </p>
        </div>

        <div className="mb-8 text-center">
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
            Our skilled team ensures your clothes look perfectly pressed and
            wrinkle-free. Ideal for workwear, formal attire, and everyday garments.
            We use modern pressing equipment to give your clothes a fresh, sharp look.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Shirt & Trouser Pressing",
            "Delicate Fabric Handling",
            "Quick Turnaround",
            "Bulk & Regular Plans",
            "Pickup & Delivery Service",
            "Eco-friendly Steam Ironing",
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

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 flex items-center gap-4">
          <Sparkles className="text-blue-600 w-8 h-8" />
          <p className="text-blue-900 font-medium">
            Crisp and fresh clothes, ready for every occasion.
          </p>
        </div>

        <div className="mt-10 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Book Your Laundry Service Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default IroningPressingDetails;
