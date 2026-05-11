import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 bg-gray-50 px-6 py-10">
      <div className="grid grid-cols-1 gap-8 text-center text-sm text-gray-600 md:grid-cols-2">
        <div className="space-y-2">
          <p>About</p>
          <p>Services</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>

        <div className="space-y-2">
          <p>Privacy Policy</p>
          <p>Terms &amp; Conditions</p>
          <p>Support</p>
          <p>Help Center</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;