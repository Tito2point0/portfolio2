import { useState } from "react";
import emailjs from "emailjs-com";
import { RevealOnScroll } from "../RevealOnScroll";

export const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [resultMessage, setResultMessage] = useState("");

  const SERVICE_ID = "service_cpn4zt7";
  const TEMPLATE_ID = "template_d1vig02";
  const PUBLIC_ID = "1YxTbLiKzf2FTH5hy";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_ID)
      .then(() => {
        setResultMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setResultMessage(""), 4000);
      })
      .catch(() => {
        setResultMessage("❌ Error sending message. Please try again later.");
        setTimeout(() => setResultMessage(""), 4000);
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-black py-24 px-6 overflow-hidden"
    >
      {/* Blurred Gradient Background Element */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-purple-600 to-blue-600 rounded-full blur-[120px] opacity-20 top-10 left-[-100px] z-0" />

      <RevealOnScroll>
        <div className="w-full max-w-4xl z-10 bg-zinc-900/80 backdrop-blur-md border border-zinc-700 p-12 md:p-20 rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.8)] transition-all duration-500">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-400 mb-14 animate-typing-delay">
              Get in Touch
            </h2>
          </RevealOnScroll>
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Name Input */}
            <RevealOnScroll delay={0}>
              <div className="transition duration-700 ease-out">
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold mb-3 text-zinc-100"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-6 py-4 text-md rounded-xl bg-zinc-800 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md placeholder-zinc-400 transition"
                />
              </div>
            </RevealOnScroll>

            {/* Email Input */}
            <RevealOnScroll delay={150}>
              <div className="transition duration-700 ease-out">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold mb-3 text-zinc-100"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-6 py-4 text-md rounded-xl bg-zinc-800 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md placeholder-zinc-400 transition"
                />
              </div>
            </RevealOnScroll>

            {/* Message Input */}
            <RevealOnScroll delay={300}>
              <div className="transition duration-700 ease-out">
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold mb-3 text-zinc-100"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-6 py-4 text-md rounded-xl bg-zinc-800 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-md placeholder-zinc-400 transition"
                />
              </div>
            </RevealOnScroll>

            {/* Submit Button */}
            <RevealOnScroll delay={450}>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 text-lg rounded-xl transition-transform transform hover:-translate-y-1 shadow-lg"
              >
                Send Message
              </button>
            </RevealOnScroll>

            {resultMessage && (
              <p className="text-center text-md mt-6 text-white animate-fade-in">
                {resultMessage}
              </p>
            )}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default ContactMe;
