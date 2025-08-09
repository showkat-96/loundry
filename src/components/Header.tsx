import { Clock, Phone, Truck, Menu, Sparkles } from "lucide-react";
import { useState } from "react";
import BookingForm from "./BookingForm";
import heroBg from "../assets/bg-img-header.jpg";
import { Link } from "react-router-dom";

function Header() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isBookingOpen && (
        <BookingForm onClose={() => setIsBookingOpen(false)} channel={"all"} />
      )}

      <header
        className="bg-white shadow-md border-b w-full"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(255,255,255,0.7), rgba(224,242,254,0.7)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(1.1)",
        }}
      >
        {/* Booking Form Modal */}

        {/* Top Info Bar */}
        <div className="bg-blue-600 text-white text-xs sm:text-sm py-2">
          <div className="max-w-screen-xl mx-auto px-2 flex flex-col md:flex-row justify-between items-center gap-1 md:gap-0">
            {/* Left: Phone & Hours */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="tel:+919596100461"
                className="flex items-center gap-1 hover:underline"
              >
                <Phone className="h-4 w-4" />
                <span className="text-white">+91-9596100461</span>
              </a>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-white">Mon–Sun: 7AM–10PM</span>
              </div>
            </div>

            {/* Right: Pickup Info */}
            <div className="flex items-center gap-1 mt-1 md:mt-0">
              <Truck className="cursor-pointer h-4 w-4" />

              <span className="text-white">Free pickup & delivery in city</span>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="max-w-screen-xl mx-auto px-2 py-2">
          <div className="flex justify-between items-center">
            {/* Logo/Title */}
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Link to={"/"}>
                  <Sparkles className="h-6 w-6 text-white" aria-hidden="true" />
                </Link>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold !text-blue-800 leading-tight">
                  Professional Service
                </h1>
                <p className="text-xs sm:text-sm !text-sky-600">
                  Doorstep Laundry & Dry Cleaning
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {[
                { name: "home", url: "/" },
                { name: "about", url: "/why-choose-us" },
                { name: "services", url: "/our-services" },
                { name: "contact", url: "/get-in-touch" },
              ].map(({ name, url }) => (
                <Link
                  key={name}
                  to={url}
                  className="text-gray-700 hover:text-blue-600 font-medium transition text-sm capitalize"
                >
                  {name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Menu
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="h-6 w-6 text-white-700"
              />
            </div>

            {/* Call-to-action */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-2 py-1.5 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition text-sm"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile Nav Menu */}
          {isMenuOpen && (
            <div className="mx-2 flex justify-between items-center md:hidden gap-2">
              {[
                { name: "home", url: "/" },
                { name: "about", url: "/why-choose-us" },
                { name: "services", url: "/our-services" },
                { name: "contact", url: "/get-in-touch" },
              ].map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  className="text-gray-700 hover:text-blue-600 font-medium transition text-sm capitalize"
                >
                  {name}
                </a>
              ))}
              <button
                className="px-1 py-1 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition text-sm"
                onClick={() => setIsBookingOpen(true)}
                style={{
                  padding: 4,
                }}
              >
                Book Now
              </button>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;
