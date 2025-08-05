import { Badge, MessageCircle, Shield, Star, Timer, Truck } from "lucide-react";

function DoorstepLaundry() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-sky-100 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-sky-100 text-sky-800 hover:bg-sky-200">
            🚚 Doorstep Service Available
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            Doorstep Laundry &
            <span className="text-sky-600"> Dry Cleaning Services</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Professional laundry and dry cleaning services delivered to your
            doorstep. Quick, reliable, and affordable with same-day service
            available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700"
              // onClick={handleBookPickup}
            >
              <Truck className="mr-2 h-5 w-5" />
              Book Now
            </button>
            <button
              // variant="outline"
              // size="lg"
              className="text-lg px-8 py-4 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get a Quote
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="font-medium">100% Safe</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Timer className="h-5 w-5 text-sky-600" />
              <span className="font-medium">Same Day Service</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
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
