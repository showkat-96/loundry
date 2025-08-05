import { Clock, Phone, Sparkles, Truck } from "lucide-react";

function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top info bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+91-9596100461</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Mon-Sun: 7AM-10PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Truck className="h-4 w-4" />
              <span>Free pickup & delivery in city</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white p-3 rounded-lg">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">
                Professional Service
              </h1>
              <p className="text-sm text-sky-600">
                Doorstep Laundry & Dry Cleaning
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <button
              // variant="outline"
              // size="sm"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Get Quote
            </button>
            <button
              // onClick={handleBookPickup}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              // size="sm"
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
