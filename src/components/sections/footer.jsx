
import { FaLinkedin, FaTwitter, FaGithub, FaGlobe, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const handleClick = (platform) => {
    console.log(`Clicked ${platform} link`); // ✅ Logs which link is clicked
  };

  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 relative z-10">
      <div className="container mx-auto">
        {/* Contact & Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          
          {/* Contact Info */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-blue-400">Contact Me</h3>
            <p className="flex items-center justify-center md:justify-start text-gray-400 mt-2">
              <FaEnvelope className="mr-2 text-blue-400" />
              <a href="mailto:Jasvasquez@live.com" onClick={() => handleClick("Email")} className="hover:text-blue-400 transition">
                Jasvasquez@live.com
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start text-gray-400 mt-2">
              <FaPhone className="mr-2 text-blue-400" />
              <a href="tel:+17324854513" onClick={() => handleClick("Phone")} className="hover:text-blue-400 transition">
                (732) 485-4513
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/jasonvas2020" target="_blank" rel="noopener noreferrer" onClick={() => handleClick("LinkedIn")}>
              <FaLinkedin className="text-white text-2xl hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://twitter.com/jasonvasqu65125" target="_blank" rel="noopener noreferrer" onClick={() => handleClick("Twitter")}>
              <FaTwitter className="text-white text-2xl hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://github.com/Tito2point0" target="_blank" rel="noopener noreferrer" onClick={() => handleClick("GitHub")}>
              <FaGithub className="text-white text-2xl hover:text-gray-400 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Language & Location */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400">
          <p className="flex items-center">
            <FaGlobe className="mr-2 text-blue-400" /> Language: <span className="ml-2 text-white">English</span>
          </p>
          <p className="mt-2 md:mt-0">🇺🇸 United States • Bronx, NY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
