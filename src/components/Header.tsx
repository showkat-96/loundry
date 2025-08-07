import { Clock, Phone, Sparkles, Truck, Menu } from "lucide-react";
import { useState } from "react";
import BookingForm from "./BookingForm";

function Header() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Top Info Bar */}
      <div className="bg-blue-900 text-white text-xs sm:text-sm py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919596100461"
              className="flex items-center gap-1 hover:underline"
            >
              <Phone className="h-4 w-4" />
              <span>+91-9596100461</span>
            </a>
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

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white p-2 rounded-lg">
              <Sparkles className="h-5 w-5" />
            </div> */}
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-blue-900 leading-tight">
                Professional Service
              </h1>
              <p className="text-xs sm:text-sm text-sky-600">
                Doorstep Laundry & Dry Cleaning
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {["home", "about", "services", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-gray-700 hover:text-blue-600 font-medium transition text-sm"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6 text-blue-600" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            {/* <button className="px-3 py-1.5 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition text-sm">
              Get Quote
            </button> */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-3 py-1.5 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition text-sm"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {isMenuOpen && (
          <div className="mt-4 flex flex-col space-y-2 md:hidden">
            {["home", "about", "services", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-gray-700 hover:text-blue-600 font-medium transition text-sm"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <div className="flex gap-2 mt-2">
              <button className="flex-1 px-3 py-1.5 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition text-sm">
                Get Quote
              </button>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="flex-1 px-3 py-1.5 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition text-sm"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
