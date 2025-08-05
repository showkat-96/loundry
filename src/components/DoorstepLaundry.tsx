import { MessageCircle, Shield, Star, Timer, Truck } from "lucide-react";

function DoorstepLaundry() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-sky-100 py-24"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1 mb-6 rounded-full bg-sky-100 text-sky-800 text-sm font-medium hover:bg-sky-200 transition">
            🚚 Doorstep Service Available
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            Doorstep Laundry &
            <span className="text-sky-600"> Dry Cleaning Services</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Professional laundry and dry cleaning services delivered to your
            doorstep. Quick, reliable, and affordable with same-day service
            available.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <button
              className="inline-flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition"
              aria-label="Book a Pickup"
            >
              <Truck className="h-5 w-5" />
              <span>Book Now</span>
            </button>

            <button
              className="inline-flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-100 transition"
              aria-label="Get a Quote"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-gray-700">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="font-medium">100% Safe</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Timer className="h-5 w-5 text-sky-600" />
              <span className="font-medium">Same Day Service</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">5-Star Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoorstepLaundry;
