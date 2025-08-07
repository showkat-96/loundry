import { Heart, Shield, Timer, Truck } from "lucide-react";

function WhyChooseUs() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
            Why Choose Us?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            We're committed to providing high-quality laundry and dry cleaning
            services with unmatched convenience and care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map(
            ({ title, description, icon: Icon, bgColor, iconColor }) => (
              <div
                key={title}
                className="text-center px-4 py-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div
                  className={`rounded-full p-5 w-20 h-20 mx-auto mb-4 flex items-center justify-center ${bgColor}`}
                >
                  <Icon className={`h-8 w-8 ${iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Free Pickup & Delivery",
    description: "Convenient doorstep service at no extra cost.",
    icon: Truck,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Quick Service",
    description: "Same-day and express services available.",
    icon: Timer,
    bgColor: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    title: "Safe & Secure",
    description: "Your clothes are handled with utmost care.",
    icon: Shield,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Customer Care",
    description: "24/7 support for all your needs.",
    icon: Heart,
    bgColor: "bg-yellow-100",
    iconColor: "text-red-500",
  },
];

export default WhyChooseUs;
