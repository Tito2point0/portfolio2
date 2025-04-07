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
    <section id="contact" className="min-h-screen flex items-center justify-center bg-black py-20 px-4">
      <RevealOnScroll>
        <div className="w-full max-w-2xl bg-zinc-900 p-10 rounded-xl shadow-2xl">
          <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-10">
            Reach out
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <RevealOnScroll delay={0}>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 text-lg rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-blue-500 placeholder-zinc-400"
              />
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <input
                type="email"
                name="email"
                required
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 text-lg rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-blue-500 placeholder-zinc-400"
              />
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 text-lg rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-blue-500 placeholder-zinc-400"
              />
            </RevealOnScroll>
            <RevealOnScroll delay={450}>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 text-lg rounded-lg transition-transform transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </RevealOnScroll>
            {resultMessage && (
              <p className="text-center text-md mt-6 text-white">
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
