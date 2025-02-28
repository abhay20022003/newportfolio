import React, { useState } from "react";
import contactImage from "../assets/contact.png"; // Add your image
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

function ContactMe() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const API_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/contact"
      : "https://myportfolio-backend.vercel.app/contact"; // Change this if needed for production
  
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus("Message sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred while sending the message.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img src={contactImage} alt="Contact Me" className="w-full max-w-sm rounded-lg shadow-lg" />
        </div>

        {/* Right Side - Form */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Contact Me</h2>
          <p className="text-gray-300 mb-6">Feel free to reach out. I'll get back to you as soon as possible.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400 h-32"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-bold transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Status Message */}
          {status && <p className={`mt-4 text-sm ${status.includes("✅") ? "text-green-400" : "text-red-400"}`}>{status}</p>}
          
          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mt-6 text-2xl">
            <a href="https://www.facebook.com/profile.php?id=100026425036282" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/rana_abhay_singh47/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/abhay-singh-a62b00253/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="mailto:abhaysingh20022003@gmail.com" className="text-gray-300 hover:text-gray-400 transition">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
