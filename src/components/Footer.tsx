import { Clock, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div>
                <div className="text-xl sm:text-2xl font-bold">
                  Professional Service
                </div>
                <p className="text-sm text-gray-400">
                  Doorstep Laundry & Dry Cleaning
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Reliable laundry and dry cleaning with free pickup and delivery.
              Enjoy premium care and same-day service from the comfort of your
              home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-white">
              Quick Links
            </h4>
            <ul className="flex flex-row justify-center gap-3 text-sm   sm:flex-col sm:space-y-3 sm:gap-0">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-white">
              Popular Services
            </h4>
            <ul className="flex flex-row justify-center gap-3 text-sm text-gray-400 sm:flex-col sm:space-y-3 sm:gap-0">
              <li>Wash & Fold</li>
              <li>Dry Cleaning</li>
              <li>Express Laundry</li>
              <li>Pickup & Delivery</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-white">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-sky-400" aria-hidden="true" />
                <a
                  href="tel:+919596100461"
                  className="hover:text-white transition-colors"
                >
                  +91-9596100461
                </a>
              </li>
              <li className="flex items-center space-x-2 overflow-hidden">
                <Mail className="h-5 w-5 text-sky-400" aria-hidden="true" />
                <a
                  href="mailto:professionalserviceslaundry@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  professionalserviceslaundry@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-sky-400" aria-hidden="true" />
                <span>Mon–Sun: 7AM – 10PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} Professional Service. All rights
            reserved. | Made with ❤️ for clean clothes
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
