import { Clock, Mail, Phone, Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-start space-x-3 mb-5">
              <div className="bg-gradient-to-br from-blue-600 to-sky-500 p-3 rounded-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Professional Service</h3>
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
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Popular Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Wash & Fold</li>
              <li>Dry Cleaning</li>
              <li>Express Laundry</li>
              <li>Pickup & Delivery</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-sky-400" />
                <span>+91-9596100461</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-sky-400" />
                <span>professionalserviceslaundry@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-sky-400" />
                <span>Mon-Sun: 7AM - 10PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Professional Service. All rights reserved. | Made with ❤️ for
            clean clothes
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
