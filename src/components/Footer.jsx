import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>

      <nav>
        <h6 className="footer-title">About Developers</h6>
        <p className="max-w-xs">
          Built by passionate web developers dedicated to creating clean, responsive, and engaging web experiences. Focused on performance, accessibility, and modern best practices.
        </p>
      </nav>

      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <Facebook className="socilaIcons" size={40}/>
          <Instagram className="socilaIcons cursor-pointer" size={40}/>
          <Linkedin className="socilaIcons cursor-pointer" size={40}/>
          <Youtube className="socilaIcons cursor-pointer" size={40}/>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
