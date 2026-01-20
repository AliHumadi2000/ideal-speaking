import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "'Playfair Display', serif", color: "#2c2416" }}
        >
          Get In Touch
        </h2>
        <p className="text-lg" style={{ color: "#6b6555" }}>
          Have questions? We'd love to hear from you. Reach out using any of the
          methods below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email Contact */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
          <div className="mb-6 flex justify-center">
            <div
              className="h-16 w-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#f9f6f1" }}
            >
              <i
                className="fas fa-envelope text-2xl"
                style={{ color: "#c9a961" }}
              ></i>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2" style={{ color: "#2c2416" }}>
            Email
          </h3>
          <p style={{ color: "#6b6555" }} className="mb-4">
            Send us an email and we'll respond as soon as possible
          </p>
          <a
            href="mailto:aliaaaqh135@gmail.com"
            className="font-semibold text-lg"
            style={{ color: "#c9a961" }}
          >
            aliaaaqh135@gmail.com
          </a>
        </div>

        {/* Phone Contact */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
          <div className="mb-6 flex justify-center">
            <div
              className="h-16 w-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#f9f6f1" }}
            >
              <i
                className="fas fa-phone text-2xl"
                style={{ color: "#c9a961" }}
              ></i>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2" style={{ color: "#2c2416" }}>
            Phone
          </h3>
          <p style={{ color: "#6b6555" }} className="mb-4">
            Call us during business hours for immediate assistance
          </p>
          <a
            href="tel:+1234567890"
            className="font-semibold text-lg"
            style={{ color: "#c9a961" }}
          >
            +1 (234) 567-890
          </a>
        </div>

        {/* Location Contact */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
          <div className="mb-6 flex justify-center">
            <div
              className="h-16 w-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#f9f6f1" }}
            >
              <i
                className="fas fa-map-marker-alt text-2xl"
                style={{ color: "#c9a961" }}
              ></i>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2" style={{ color: "#2c2416" }}>
            Location
          </h3>
          <p style={{ color: "#6b6555" }} className="mb-4">
            Visit us at our office location
          </p>
          <p className="font-semibold text-lg" style={{ color: "#c9a961" }}>
            123 Learning Street
            <br />
            London, UK
          </p>
        </div>
      </div>

      {/* Social Media Section */}
      <div
        className="mt-16 pt-12 border-t-2"
        style={{ borderColor: "#e8d4a8" }}
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6" style={{ color: "#2c2416" }}>
            Connect With Us
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="h-12 w-12 rounded-full flex items-center justify-center text-white text-lg transition-all hover:scale-110"
              style={{ backgroundColor: "#c9a961" }}
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="h-12 w-12 rounded-full flex items-center justify-center text-white text-lg transition-all hover:scale-110"
              style={{ backgroundColor: "#c9a961" }}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="h-12 w-12 rounded-full flex items-center justify-center text-white text-lg transition-all hover:scale-110"
              style={{ backgroundColor: "#c9a961" }}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="h-12 w-12 rounded-full flex items-center justify-center text-white text-lg transition-all hover:scale-110"
              style={{ backgroundColor: "#c9a961" }}
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
