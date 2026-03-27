import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Message Sent 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-white">

      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2">
          <FaPaperPlane /> Get in Touch
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Have questions, feedback, or need support? We’d love to hear from you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4 pb-16">

        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:scale-105 transition flex items-center gap-3">
            <FaMapMarkerAlt className="text-pink-500 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Location</h3>
              <p className="text-gray-300">Jaipur, India</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:scale-105 transition flex items-center gap-3">
            <FaEnvelope className="text-pink-500 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-gray-300">support@yourstore.com</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:scale-105 transition flex items-center gap-3">
            <FaPhone className="text-pink-500 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Phone</h3>
              <p className="text-gray-300">+91 9963672819</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/20">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=india&t=&z=5&ie=UTF8&iwloc=&output=embed"
              className="w-full h-56"
            ></iframe>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaPaperPlane /> Send Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border-b border-gray-400 focus:border-pink-400 outline-none py-3"
              />
              <label
                className={`absolute left-0 transition-all text-gray-400 ${
                  form.name ? "top-[-10px] text-sm" : "top-3 text-base"
                } peer-focus:top-[-10px] peer-focus:text-sm`}
              >
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border-b border-gray-400 focus:border-pink-400 outline-none py-3"
              />
              <label
                className={`absolute left-0 transition-all text-gray-400 ${
                  form.email ? "top-[-10px] text-sm" : "top-3 text-base"
                } peer-focus:top-[-10px] peer-focus:text-sm`}
              >
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border-b border-gray-400 focus:border-pink-400 outline-none py-3"
              ></textarea>
              <label
                className={`absolute left-0 transition-all text-gray-400 ${
                  form.message ? "top-[-10px] text-sm" : "top-3 text-base"
                } peer-focus:top-[-10px] peer-focus:text-sm`}
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-3 rounded-lg font-semibold hover:scale-105 transition flex items-center justify-center gap-2"
            >
              <FaPaperPlane /> Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
