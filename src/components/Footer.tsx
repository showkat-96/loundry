import { Clock, Mail, Phone, Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white p-2 rounded-lg">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Professional Service</h3>
                <p className="text-xs text-gray-400">
                  Doorstep Laundry & Dry Cleaning
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional laundry and dry cleaning services with free pickup
              and delivery. Quality care for your garments with same-day service
              available.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Wash & Fold</span>
              </li>
              <li>
                <span className="text-gray-400">Dry Cleaning</span>
              </li>
              <li>
                <span className="text-gray-400">Express Laundry</span>
              </li>
              <li>
                <span className="text-gray-400">Pickup & Delivery</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-sky-400" />
                <span className="text-gray-400">+91-9596100461</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-sky-400" />
                <span className="text-gray-400">
                  professionalserviceslaundry@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-sky-400" />
                <span className="text-gray-400">Mon-Sun: 7AM-10PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Professional Service. All rights reserved. | Made with ❤️ for
            clean clothes
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
