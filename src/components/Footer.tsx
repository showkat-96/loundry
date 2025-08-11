import { Clock, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-2">
        {/* Container */}
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:items-start">
          {/* Company Info */}
          <div className="flex-1 min-w-[220px] text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start space-y-3 mb-5">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold uppercase">
                  Professional Service
                </div>
                <p className="text-sm mt-1 font-medium">
                  Doorstep Laundry & Dry Cleaning
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Reliable laundry and dry cleaning with free pickup and delivery.
              Enjoy premium care and same-day service from the comfort of your
              home.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[180px] text-center">
            <div className="text-lg font-bold mb-2 uppercase tracking-wide border-b-2 border-blue-600 pb-1 inline-block">
              Quick Links
            </div>
            <ul className="flex flex-col items-center space-y-3 text-sm">
              {[
                { name: "Home", url: "/" },
                { name: "About", url: "/why-choose-us" },
                { name: "Services", url: "/our-services" },
                { name: "Contact", url: "/get-in-touch" },
              ].map(({ name, url }) => (
                <li key={name}>
                  <Link
                    to={url}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[220px] text-center sm:text-right">
            <div className="text-lg font-bold mb-2 uppercase tracking-wide border-b-2 border-blue-600 pb-1 inline-block">
              Contact Info
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-center sm:justify-end items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+919596100461" className="hover:text-blue-400">
                  +91-9596100461
                </a>
              </li>
              <li className="flex justify-center sm:justify-end items-center gap-2">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:professionalserviceslaundry@gmail.com"
                  className="hover:text-blue-400"
                >
                  professionalserviceslaundry@gmail.com
                </a>
              </li>
              <li className="flex justify-center sm:justify-end items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Mon–Sun: 7AM – 10PM</span>
              </li>
              <li className="flex justify-center sm:justify-end items-center gap-2">
                <svg
                  className="h-5 w-5"
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
                <a
                  href="https://www.google.com/maps?q=Your+Business+Location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  Circular Road Pulwama.
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-xs sm:text-sm">
            © 2024 Professional Service. All rights reserved. | Made with ❤️ for
            clean clothes
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
