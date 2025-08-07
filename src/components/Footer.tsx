import { Clock, Mail, Phone, Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-start space-x-3 mb-5">
              <div className="bg-blue-600 p-3 rounded-xl">
                <Sparkles className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl !text-white font-bold">
                  Professional Service
                </h3>
                <p className="text-sm text-gray-400">
                  Doorstep Laundry & Dry Cleaning
                </p>
              </div>
            </div>
            <p className="text-sm text-blue-400 leading-relaxed">
              Reliable laundry and dry cleaning with free pickup and delivery.
              Enjoy premium care and same-day service from the comfort of your
              home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 !text-white">
              Quick Links
            </h4>
            <ul className="flex flex-row justify-center gap-3 text-sm   sm:flex-col sm:space-y-3 sm:gap-0">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-blue-400 hover:text-white transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 !text-white">
              Popular Services
            </h4>
            <ul className="space-y-3 text-sm text-blue-400">
              <li>Wash & Fold</li>
              <li>Dry Cleaning</li>
              <li>Express Laundry</li>
              <li>Pickup & Delivery</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 !text-white">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-blue-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" aria-hidden="true" />
                <a
                  href="tel:+919596100461"
                  className="hover:text-white transition-colors"
                >
                  +91-9596100461
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" aria-hidden="true" />
                <a
                  href="mailto:professionalserviceslaundry@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  professionalserviceslaundry@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-400" aria-hidden="true" />
                <span>Mon–Sun: 7AM – 10PM</span>
              </li>
              <li className="flex items-center gap-3">
      <div className="min-w-[20px]">
        <svg
          className="h-5 w-5 text-blue-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      </div>
      <a
        href="https://www.google.com/maps?q=Your+Business+Location"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        Circular Road Pulwama.
      </a>
    </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-xs sm:text-sm text-blue-500">
            © 2024 Professional Service. All rights reserved. | Made with ❤️ for
            clean clothes
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
