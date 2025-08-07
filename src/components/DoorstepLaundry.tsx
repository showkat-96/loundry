import { Shield, Star, Timer, Truck } from "lucide-react";
import BookingForm from "./BookingForm";
import { useState } from "react";
import heroBg from "../assets/bg-img-home.jpg";


function DoorstepLaundry() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section
  id="home"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  className="py-16 sm:py-20 md:py-24 scroll-mt-24"
>

      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Promo pill */}
          <div className="inline-flex items-center px-4 py-1 mb-6 rounded-full bg-sky-100 text-sky-800 text-xs sm:text-sm font-medium hover:bg-sky-200 transition">
            🚚 Free Pickup & Drop – Book Today
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-5 sm:mb-6 leading-tight tracking-tight">
            Premium Laundry &{" "}
            <span className="text-sky-600">Dry Cleaning at Your Doorstep</span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl font-semibold !text-black bg-white/70 px-4 py-2 rounded mb-10 leading-relaxed max-w-2xl mx-auto" >
            Experience professional fabric care with fast turnaround, affordable pricing,
            and unmatched convenience — all from the comfort of your home.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-14">
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center justify-center gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition font-semibold shadow"
              aria-label="Book Now"
            >
              <Truck className="h-5 w-5" aria-hidden="true" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto text-gray-700 text-sm sm:text-base">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <span className="font-bold text-black">Safe & Hygienic</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Timer className="h-5 w-5 text-sky-600" aria-hidden="true" />
              <span className="font-bold text-black">Same-Day Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" aria-hidden="true" />
              <span className="font-bold text-black">Rated 5 Stars</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoorstepLaundry;
