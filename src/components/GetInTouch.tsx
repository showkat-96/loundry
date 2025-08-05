import { Mail, MessageCircle, Phone, Truck } from "lucide-react";

function GetInTouch() {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Ready to experience hassle-free laundry service? Contact us today!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {/* Phone */}
            <div className="text-center">
              <div className="bg-sky-500 rounded-full p-5 w-20 h-20 mx-auto mb-5 flex items-center justify-center shadow-md">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Call Us</h3>
              <p className="text-blue-100 mb-2">Ready to serve you</p>
              <a
                href="tel:+919596100461"
                className="text-sky-300 hover:text-sky-100 font-medium transition"
              >
                +91-9596100461
              </a>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="bg-sky-500 rounded-full p-5 w-20 h-20 mx-auto mb-5 flex items-center justify-center shadow-md">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-1">Email Us</h3>
              <p className="text-blue-100 mb-2">Quick responses guaranteed</p>
              <a
                href="mailto:professionalserviceslaundry@gmail.com"
                className="text-sky-300 hover:text-sky-100 font-medium transition"
              >
                professionalserviceslaundry@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="text-center">
              <div className="bg-green-500 rounded-full p-5 w-20 h-20 mx-auto mb-5 flex items-center justify-center shadow-md">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
              <p className="text-blue-100 mb-2">Instant booking & support</p>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium bg-white text-blue-900 rounded-full hover:bg-gray-100 transition">
                <MessageCircle className="h-5 w-5 mr-2" />
                Book via WhatsApp
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-sky-800 rounded-2xl p-10 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Book Your Pickup?
            </h3>
            <p className="text-sky-100 mb-6 text-lg">
              Experience the convenience of doorstep laundry service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium bg-white text-blue-900 rounded-full hover:bg-gray-100 transition">
                <Truck className="h-5 w-5" />
                Schedule Pickup
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium bg-white text-blue-900 rounded-full hover:bg-gray-100 transition">
                <MessageCircle className="h-5 w-5" />
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
