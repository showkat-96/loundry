import { Mail, MessageCircle, Phone, Truck } from "lucide-react";
import { useState } from "react";
import SchedulePickupForm from "./SchedulePickupForm";
import BookingForm from "./BookingForm";

function GetInTouch() {
  const [isPickupOpen, setIsPickupOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [channel, setChannel] = useState<"Whatsapp" | "Email">("Whatsapp");

  const handleDialog = (medium: "Whatsapp" | "Email") => {
    setChannel(medium);
    setIsBookingOpen(true);
  };

  return (
    <>
      {isPickupOpen && (
        <SchedulePickupForm onClose={() => setIsPickupOpen(false)} />
      )}
      {isBookingOpen && (
        <BookingForm onClose={() => setIsBookingOpen(false)} channel={channel} />
      )}

      <section id="contact" className="py-8 sm:py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-3">
                Get In Touch
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to experience hassle-free laundry service? Contact us today!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <div className="text-center bg-sky-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="bg-sky-500 rounded-full p-3 w-14 h-14 mx-auto mb-5 flex items-center justify-center shadow-md">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6">
                  Ready to serve you
                </p>
                <a href="tel:+919596100461" className="block">
                  <button className="w-full sm:w-auto px-6 py-3 inline-flex items-center justify-center gap-2 text-base font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                    <Phone className="h-5 w-5" />
                    Call
                  </button>
                </a>
              </div>

              {/* Email */}
              <div className="text-center bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="bg-blue-600 rounded-full p-3 w-14 h-14 mx-auto mb-5 flex items-center justify-center shadow-md">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6">
                  Quick responses guaranteed
                </p>
                <button
                  onClick={() => handleDialog("Email")}
                  className="w-full sm:w-auto px-6 py-3 inline-flex items-center justify-center gap-2 text-base font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  <Mail className="h-5 w-5" />
                  Email
                </button>
              </div>

              {/* WhatsApp */}
              <div className="text-center bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="bg-green-500 rounded-full p-3 w-14 h-14 mx-auto mb-5 flex items-center justify-center shadow-md">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
                  WhatsApp
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6">
                  Instant booking & support
                </p>
                <button
                  onClick={() => handleDialog("Whatsapp")}
                  className="w-full sm:w-auto px-6 py-3 inline-flex items-center justify-center gap-2 text-base font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </button>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-blue-100 rounded-2xl p-8 sm:p-12 shadow-lg">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                Ready to Book Your Pickup?
              </h3>
              <p className="text-gray-700 text-base sm:text-lg mb-6 max-w-lg mx-auto">
                Experience the convenience of doorstep laundry service
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => setIsPickupOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 inline-flex items-center justify-center gap-3 text-lg font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  <Truck className="h-6 w-6" />
                  Schedule Pickup
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetInTouch;
