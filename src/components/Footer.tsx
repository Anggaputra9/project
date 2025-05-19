import React from 'react';
import { Code2, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-8 w-8 text-primary-500" />
              <span className="font-heading font-bold text-xl">404 Not Found</span>
            </div>
            <p className="text-gray-600 mb-4">
              Exploring creative spaces in UI/UX, web development, and mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/not_found404.id/" className="text-gray-500 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-600 hover:text-primary-500 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Private Classes
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-primary-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">messagenotfound404@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">+62 882-9828-3728</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-gray-600">
                  Purbalingga, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© {currentYear} 404 Not Found. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;