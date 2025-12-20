import React from "react";
import { Mail, Phone, MapPin, Snowflake } from "lucide-react";
import { Link } from "react-router";
import Icon from "./Icon";

const Footer = () => {
  return (
    <footer className="bg-primary/80 text-primary-content mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icon classes={`h-8`} />
              <h3 className="text-2xl font-bold">
                <span className="text-accent">Warm</span>Paws
              </h3>
            </div>
            <p className="text-sm leading-relaxed">
              Where Every Paw Finds Warmth. Providing exceptional winter pet
              care services since 2019.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="hover:transition-colors duration-300"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="hover:transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Popular Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services/5"
                  className="hover:transition-colors duration-300"
                >
                  Pet Nutrition Plan for Winter
                </Link>
              </li>
              <li>
                <Link
                  to="/services/4"
                  className="hover:transition-colors duration-300"
                >
                  Winter Health Checkup
                </Link>
              </li>
              <li>
                <Link
                  to="/services/11"
                  className="hover:transition-colors duration-300"
                >
                  Emergency Vet Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+88 017 12345678</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>warmpaws@ymail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>26 Rd 10/A, Dhaka 1207, Bangladesh.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-content/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 font-semibold">
            <p>© {new Date().getFullYear()} WarmPaws. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
