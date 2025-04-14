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
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-100 py-24 px-6 font-sans">
      <RevealOnScroll>
        <div className="w-[90vw] max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Left: Form */}
          <div className="p-12 md:p-16">
            <h2 className="text-4xl font-bold text-blue-700 mb-10">Let’s Connect</h2>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 text-md rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 text-md rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={6}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 text-md rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-md rounded-lg transition duration-300 ease-in-out"
              >
                Send Message
              </button>

              {resultMessage && (
                <p className="text-center text-gray-600 mt-4 animate-fade-in">
                  {resultMessage}
                </p>
              )}
            </form>
          </div>

          {/* Right: Decorative or Info Panel */}
          <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-400 text-white p-12">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold">Let’s Build Something</h3>
              <p className="text-lg">
                Whether you have a question, a project, or just want to say hi—my inbox is always open. I’m excited to hear from you!
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default ContactMe;
