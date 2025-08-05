import { Mail, MessageCircle, Phone, Truck } from "lucide-react";

function GetInTouch() {
  return (
    <section id="contact" className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Ready to experience hassle-free laundry service? Contact us today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="text-center">
              <div className="bg-sky-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100 mb-2">Ready to serve you</p>
              <a
                href="tel:+919596100461"
                className="text-sky-300 hover:text-sky-200 font-medium"
              >
                +91-9596100461
              </a>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="bg-sky-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100 mb-2">Quick responses guaranteed</p>
              <a
                href="mailto:professionalserviceslaundry@gmail.com"
                className="text-sky-300 hover:text-sky-200 font-medium"
              >
                professionalserviceslaundry@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="text-center">
              <div className="bg-green-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-blue-100 mb-2">Instant booking & support</p>
              <button
                // onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white mt-2"
              >
                Book via WhatsApp
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-sky-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Book Your Pickup?
            </h3>
            <p className="text-sky-100 mb-6">
              Experience the convenience of doorstep laundry service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                // size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8"
                // onClick={handleBookPickup}
              >
                <Truck className="mr-2 h-5 w-5" />
                Schedule Pickup
              </button>
              <button
                // onClick={handleWhatsApp}
                // variant="outline"
                // size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
