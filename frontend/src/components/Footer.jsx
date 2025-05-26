import React from 'react';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-12 bg-[#f5f1f9]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo and Social Links */}
        <div className="flex flex-col">
          <a href="/" aria-label="PetFolio Home">
            <img src={logo} alt="PetFolio Logo" className="block w-32" />
          </a>
          <ul className="flex gap-4 mt-6 list-none" aria-label="Social media links">
            <li>
              <a
                className="text-gray-600 hover:text-purple-700 transition-all duration-300"
                href="https://www.instagram.com/petfolio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <ion-icon className="w-6 h-6" name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a
                className="text-gray-600 hover:text-purple-700 transition-all duration-300"
                href="https://www.facebook.com/petfolio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <ion-icon className="w-6 h-6" name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a
                className="text-gray-600 hover:text-purple-700 transition-all duration-300"
                href="https://www.twitter.com/petfolio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <ion-icon className="w-6 h-6" name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a
                className="text-gray-600 hover:text-purple-700 transition-all duration-300"
                href="https://www.github.com/petfolio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <ion-icon className="w-6 h-6" name="logo-github"></ion-icon>
              </a>
            </li>
          </ul>
          <p className="text-gray-500 text-sm mt-auto">
            &copy; {new Date().getFullYear()} PetFolio. All Rights Reserved.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <p className="font-semibold text-lg mb-6 text-gray-800">Contact Us</p>
          <address className="not-italic text-gray-600 text-base leading-6">
            <p className="mb-4">HITEC University, Taxila, Rawalpindi, 47080</p>
            <p>
              <a
                className="hover:text-purple-700 transition-all duration-300"
                href="tel:+4155551234"
              >
                (+92)311-5112234
              </a>
              <br />
              <a
                className="hover:text-purple-700 transition-all duration-300"
                href="mailto:support@petfolio.com"
              >
                support@petfolio.com
              </a>
            </p>
          </address>
        </div>

        {/* Account Navigation */}
        <nav aria-label="Account navigation">
          <p className="font-semibold text-lg mb-6 text-gray-800">Account</p>
          <ul className="flex flex-col gap-4 list-none">
            <li>
              <a
                href="/signin"
                className="text-gray-600 hover:text-purple-700 transition-all duration-300 text-base"
              >
                Sign in
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="text-gray-600 hover:text-purple-700 transition-all duration-300 text-base"
              >
                Create account
              </a>
            </li>
            <li>
              <a
                href="/ios-app"
                className="text-gray-600 hover:text-purple-700 transition-all duration-300 text-base"
              >
                iOS App (Coming Soon)
              </a>
            </li>
            <li>
              <a
                href="/android-app"
                className="text-gray-600 hover:text-purple-700 transition-all duration-300 text-base"
              >
                Android App (Coming Soon)
              </a>
            </li>
          </ul>
        </nav>

        {/* Company & Platform Links */}
        <nav aria-label="PetFolio platform links">
          <p className="font-semibold text-lg mb-6 text-gray-800">PetFolio</p>
          <ul className="flex flex-col gap-4 list-none">
            <li>
              <a
                href="/about"
                className="text-gray-600 hover:text-purple-700 transition-all duration-300 text-base"
              >
                About PetFolio
              </a>
            </li>
            <li>
              <a
                href="/sellers"
                className="text-gray-600 hover:text-purple-700 transition-all duration-300 text-base"
              >
                For Sellers
              </a>
            </li>
            <li>
              <a
                href="/ai-breed-recognition"
                className="text-gray-600 hover:text-purple-700 transition-all duration-300 text-base"
              >
                AI Breed Recognition
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="text-gray-600 hover:text-purple-700 transition-all duration-300 text-base"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/help-support"
                className="text-gray-600 hover:text-purple-700 transition-all duration-300 text-base"
              >
                Help & Support
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;
