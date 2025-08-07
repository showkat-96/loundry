import { Shield, Star, Timer, Truck } from "lucide-react";
import BookingForm from "./BookingForm";
import { useState } from "react";

function DoorstepLaundry() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-sky-100 py-16 sm:py-20 md:py-24 scroll-mt-24"
    >
      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Promo pill */}
          <div className="inline-flex items-center px-4 py-1 mb-6 rounded-full bg-sky-100 text-sky-800 text-xs sm:text-sm font-medium hover:bg-sky-200 transition">
            🚚 Doorstep Service Available
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-5 sm:mb-6 leading-tight">
            Doorstep Laundry &{" "}
            <span className="text-sky-600">Dry Cleaning Services</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
            Professional laundry and dry cleaning services delivered to your
            doorstep. Quick, reliable, and affordable with same-day service
            available.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12">
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center justify-center gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-100 transition"
              aria-label="Book Now"
            >
              <Truck className="h-5 w-5" aria-hidden="true" />
              <span>Book Now</span>
            </button>
            {/* <button
              type="button"
              className="inline-flex items-center justify-center gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-100 transition"
              aria-label="Get a Quote"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              <span>Get a Quote</span>
            </button> */}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto text-gray-700 text-sm sm:text-base">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <span className="font-medium">100% Safe</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Timer className="h-5 w-5 text-sky-600" aria-hidden="true" />
              <span className="font-medium">Same Day Service</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" aria-hidden="true" />
              <span className="font-medium">5-Star Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoorstepLaundry;
