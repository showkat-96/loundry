import { Clock, Mail, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between gap-10 items-start">
          {/* Company Info */}
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center space-x-3 mb-5">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Sparkles className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold !text-white leading-none tracking-wide uppercase">
                  Professional Service
                </h3>
                <p className="text-sm text-white mt-1 font-medium">
                  Doorstep Laundry & Dry Cleaning
                </p>
              </div>
            </div>
            <p className="text-sm text-white leading-relaxed">
              Reliable laundry and dry cleaning with free pickup and delivery.
              Enjoy premium care and same-day service from the comfort of your home.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[180px] flex flex-col items-center">
            <h4 className="text-lg font-bold mb-4 !text-white uppercase tracking-wide border-b-2 border-blue-600 pb-1">
              Quick Links
            </h4>
            <ul className="flex flex-row justify-center gap-4 text-sm sm:flex-col sm:space-y-3 sm:gap-0">
              {[
                { name: "Home", url: "/" },
                { name: "About", url: "/why-choose-us" },
                { name: "Services", url: "/our-services" },
                { name: "Contact", url: "/get-in-touch" },
              ].map(({ name, url }) => (
                <li key={name}>
                  <Link
                    to={url}
                    className="text-white hover:text-blue-400 transition-colors block"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[220px] flex flex-col items-end sm:items-end">
            <h4 className="text-lg font-bold mb-4 !text-white uppercase tracking-wide border-b-2 border-blue-600 pb-1">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-white text-right">
              <li className="flex justify-end items-center space-x-2 rtl:space-x-reverse">
                <Phone className="h-5 w-5" aria-hidden="true" />
                <a
                  href="tel:+919596100461"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91-9596100461
                </a>
              </li>
              <li className="flex justify-end items-center space-x-2 rtl:space-x-reverse">
                <Mail className="h-5 w-5" aria-hidden="true" />
                <a
                  href="mailto:professionalserviceslaundry@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  professionalserviceslaundry@gmail.com
                </a>
              </li>
              <li className="flex justify-end items-center space-x-2 rtl:space-x-reverse">
                <Clock className="h-5 w-5" aria-hidden="true" />
                <span>Mon–Sun: 7AM – 10PM</span>
              </li>
              <li className="flex justify-end items-center gap-3 rtl:gap-3">
                <div className="min-w-[20px]">
                  <svg
                    className="h-5 w-5 text-white"
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
                  className="hover:text-blue-400 transition-colors"
                >
                  Circular Road Pulwama.
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-xs sm:text-sm text-white">
            © 2024 Professional Service. All rights reserved. | Made with ❤️ for clean clothes
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
