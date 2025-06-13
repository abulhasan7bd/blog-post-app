import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {/* Services */}
      <div>
        <h6 className="text-xl font-semibold mb-4">Services</h6>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-red-400 transition">Branding</a></li>
          <li><a href="#" className="hover:text-red-400 transition">Design</a></li>
          <li><a href="#" className="hover:text-red-400 transition">Marketing</a></li>
          <li><a href="#" className="hover:text-red-400 transition">Advertisement</a></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h6 className="text-xl font-semibold mb-4">Company</h6>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-red-400 transition">About us</a></li>
          <li><a href="#" className="hover:text-red-400 transition">Contact</a></li>
          <li><a href="#" className="hover:text-red-400 transition">Jobs</a></li>
          <li><a href="#" className="hover:text-red-400 transition">Press kit</a></li>
        </ul>
      </div>

      {/* About Developers */}
      <div>
        <h6 className="text-xl font-semibold mb-4">About Developers</h6>
        <p className="text-gray-400 text-sm leading-relaxed">
          Built by passionate web developers dedicated to clean, responsive,
          and modern user experiences. Focused on performance, accessibility,
          and best practices.
        </p>
      </div>

      {/* Social */}
      <div>
        <h6 className="text-xl font-semibold mb-4">Follow Us</h6>
        <div className="flex space-x-4">
          <Link
            to="https://www.facebook.com/AbulHasanFB"
            className="border border-red-500 bg-black rounded-full p-2 hover:bg-white transition duration-300"
          >
            <Facebook className="text-red-500 hover:text-black" size={26} />
          </Link>
          <Link
            to="https://www.instagram.com/"
            className="border border-red-500 bg-black rounded-full p-2 hover:bg-white transition duration-300"
          >
            <Instagram className="text-red-500 hover:text-black" size={26} />
          </Link>
          <Link
            to="https://www.linkedin.com/"
            className="border border-red-500 bg-black rounded-full p-2 hover:bg-white transition duration-300"
          >
            <Linkedin className="text-red-500 hover:text-black" size={26} />
          </Link>
          <Link
            to="https://www.youtube.com/"
            className="border border-red-500 bg-black rounded-full p-2 hover:bg-white transition duration-300"
          >
            <Youtube className="text-red-500 hover:text-black" size={26} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
