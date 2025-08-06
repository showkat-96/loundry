import { Clock, Phone, Sparkles, Truck } from "lucide-react";

import { useState } from "react";
import BookingForm from "./BookingForm";

function Header() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>+91-9596100461</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Mon-Sun: 7AM - 10PM</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Truck className="h-4 w-4" />
            <span>Free pickup & delivery in city</span>
          </div>
        </div>
      </div>
      {/* Main nav */}
      <nav className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white p-2.5 rounded-lg">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900 leading-tight">
                Professional Service
              </h1>
              <p className="text-sm text-sky-600">
                Doorstep Laundry & Dry Cleaning
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            {["home", "about", "services", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition text-sm font-medium">
              Get Quote
            </button>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition text-sm font-medium"
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
