import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";
export const ContactMe = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const SERVICE_ID = "service_cpn4zt7";
  const TEMPLATE_ID = "template_d1vig02";
  const PUBLIC_ID = "1YxTbLiKzf2FTH5hy"
  
    const handleSubmit = (e) => {
        e.preventDefault()
        
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_ID).then((result) => {
        alert("Message Sent!");

      }).catch(() => alert("Error sending message!. Please try again later."));
    }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Reach out
          </h2>
          <form className="space-y-6 ">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline--none focus:border-blue focus:bg-blue-500/5"
                placeholder="Name.."
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline--none focus:border-blue focus:bg-blue-500/5"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline--none focus:border-blue focus:bg-blue-500/5"
                placeholder="Your message.."
              />
                      </div>
                      
                      <button type="submit " className="w-full bg-blue-500 text-white py-3px-6 rounded font-medium transition  relative overflow-hidden hover:-translate-y-0.5-[0_0_15[x_rgba(59,130,246" >
                          Send Message
                        </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default ContactMe;
