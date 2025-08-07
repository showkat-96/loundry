import { Mail, MessageCircle, Phone, Truck } from "lucide-react";
import { useState } from "react";
import SchedulePickupForm from "./SchedulePickupForm";
import BookingForm from "./BookingForm";

function GetInTouch() {
  const [isPickupOpen, setIsPickupOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [channel, setChannel] = useState<"whatsapp" | "email">("whatsapp");

  const handleDialog = (medium: "whatsapp" | "email") => {
    setChannel(medium);
    setIsBookingOpen(true);
  };
  return (
    <>
      <SchedulePickupForm
        isOpen={isPickupOpen}
        onClose={() => setIsPickupOpen(false)}
      />
      {isBookingOpen && (
        <BookingForm
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          channel={channel}
        />
      )}
      <section id="contact" className="py-16 sm:py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to experience hassle-free laundry service? Contact us
                today!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              {/* Phone */}
              <div className="text-center bg-sky-50 p-6 rounded-xl shadow hover:shadow-md transition">
                <div className="bg-sky-500 rounded-full p-5 w-20 h-20 mx-auto mb-5 flex items-center justify-center shadow-md">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-1">
                  Call Us
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2">
                  Ready to serve you
                </p>
                <a
                  href="tel:+919596100461"
                  className="text-sky-600 hover:text-sky-800 font-medium transition"
                >
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                    <Phone className="h-5 w-5 mr-2" />
                    Book via Call
                  </button>
                </a>
              </div>

              {/* Email */}
              <div className="text-center bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition">
                <div className="bg-blue-600 rounded-full p-5 w-20 h-20 mx-auto mb-5 flex items-center justify-center shadow-md">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-1">
                  Email Us
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2">
                  Quick responses guaranteed
                </p>

                <button
                  onClick={() => handleDialog("email")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Book via Email
                </button>
                {/* <a
                  href="mailto:professionalserviceslaundry@gmail.com"
                  className="text-blue-600 hover:text-blue-800 font-medium transition"
                >
                  professionalserviceslaundry@gmail.com
                </a> */}
              </div>

              {/* WhatsApp */}
              <div className="text-center bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition">
                <div className="bg-green-500 rounded-full p-5 w-20 h-20 mx-auto mb-5 flex items-center justify-center shadow-md">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-1">
                  WhatsApp
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Instant booking & support
                </p>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Book via WhatsApp
                </button>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-blue-100 rounded-2xl p-8 sm:p-10 shadow-lg">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                Ready to Book Your Pickup?
              </h3>
              <p className="text-gray-700 text-base sm:text-lg mb-6">
                Experience the convenience of doorstep laundry service
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsPickupOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  <Truck className="h-5 w-5" />
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
