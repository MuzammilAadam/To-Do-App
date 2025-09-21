import React, { useState } from "react";

function ContactMe() {
  // ✅ State for form inputs
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Handle input changes dynamically
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields!");
      return;
    }
    // In real app, here you can send form data to server
    alert(`Thanks ${form.name}! Your message has been sent.`);
    setForm({ name: "", email: "", message: "" }); // Clear form
  };

  return (
    <div className="flex items-start justify-center m-3 sm:m-5 h-auto bg-slate-900 py-10">
      {/* Main container with responsive width, padding, and rounded corners */}
      <div className="bg-slate-800 text-white p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-2xl flex flex-col">
        
        {/* Heading */}
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center font-mono tracking-[2px]">
          Contact Me
        </h2>

        {/* Sub-heading */}
        <p className="text-center text-slate-400 mb-6 text-sm sm:text-base">
          Got a question or want to say hi? Fill the form below!
        </p>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          
          {/* Name input */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-2 sm:p-3 text-sm sm:text-base rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {/* Email input */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-2 sm:p-3 text-sm sm:text-base rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {/* Message textarea */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="p-2 sm:p-3 text-sm sm:text-base rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium hover:scale-105 transition transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
