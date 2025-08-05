import { Heart, Shield, Timer, Truck } from "lucide-react";

function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality laundry and dry
              cleaning services with unmatched convenience and customer care.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Feature Item */}
            <div className="text-center px-4 py-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 rounded-full p-5 w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Free Pickup & Delivery
              </h3>
              <p className="text-gray-600 text-sm">
                Convenient doorstep service at no extra cost.
              </p>
            </div>

            <div className="text-center px-4 py-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-sky-100 rounded-full p-5 w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                <Timer className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Quick Service
              </h3>
              <p className="text-gray-600 text-sm">
                Same-day and express services available.
              </p>
            </div>

            <div className="text-center px-4 py-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 rounded-full p-5 w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Safe & Secure
              </h3>
              <p className="text-gray-600 text-sm">
                Your clothes are handled with utmost care.
              </p>
            </div>

            <div className="text-center px-4 py-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-yellow-100 rounded-full p-5 w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Customer Care
              </h3>
              <p className="text-gray-600 text-sm">
                24/7 support for all your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
