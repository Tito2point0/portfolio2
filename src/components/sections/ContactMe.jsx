import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { RevealOnScroll } from '../RevealOnScroll';

export const ContactMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [resultMessage, setResultMessage] = useState('');

  const SERVICE_ID = 'service_cpn4zt7';
  const TEMPLATE_ID = 'template_d1vig02';
  const PUBLIC_ID = '1YxTbLiKzf2FTH5hy';

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_ID)
      .then(() => {
        setResultMessage('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setResultMessage(''), 4000);
      })
      .catch(() => {
        setResultMessage('❌ Error sending message. Please try again later.');
        setTimeout(() => setResultMessage(''), 4000);
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black py-24 px-6">
      <RevealOnScroll>
        <div className="w-[65vw] bg-zinc-900 p-20 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] border border-zinc-800 transition-all duration-500">
          <h2 className="text-5xl font-extrabold text-center text-blue-400 mb-16">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-14">
            <RevealOnScroll delay={0}>
              <div className="transition duration-700 ease-out">
                <label htmlFor="name" className="block text-xl font-semibold mb-3 text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-10 py-5 text-xl rounded-2xl bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-zinc-400"
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <div className="transition duration-700 ease-out">
                <label htmlFor="email" className="block text-xl font-semibold mb-3 text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-10 py-5 text-xl rounded-2xl bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-zinc-400"
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="transition duration-700 ease-out">
                <label htmlFor="message" className="block text-xl font-semibold mb-3 text-white">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={6}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-10 py-5 text-xl rounded-2xl bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-zinc-400"
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={450}>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-5 text-xl rounded-2xl transition-transform transform hover:-translate-y-1"
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