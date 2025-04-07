import { FaLinkedin, FaTwitter, FaGithub, FaGlobe, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const handleClick = (platform) => {
    console.log(`Clicked ${platform} link`);
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-black text-white py-12 px-6 md:px-20 relative z-10">
      <div className="container mx-auto space-y-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8">

          {/* Email Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Email</h3>
            <p className="flex items-center justify-center md:justify-start text-gray-300">
              <FaEnvelope className="mr-2 text-blue-400" />
              <a
                href="mailto:Jasvasquez@live.com"
                onClick={() => handleClick("Email")}
                className="hover:text-blue-400 transition duration-200"
              >
                Jasvasquez@live.com
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="https://www.linkedin.com/in/jasonvas2020" target="_blank" rel="noopener noreferrer" onClick={() => handleClick("LinkedIn")}> 
              <FaLinkedin className="text-2xl hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://twitter.com/jasonvasqu65125" target="_blank" rel="noopener noreferrer" onClick={() => handleClick("Twitter")}> 
              <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://github.com/Tito2point0" target="_blank" rel="noopener noreferrer" onClick={() => handleClick("GitHub")}> 
              <FaGithub className="text-2xl hover:text-gray-400 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex items-center">
            <FaGlobe className="mr-2 text-blue-400" />
            Language: <span className="ml-2 text-white">English</span>
          </div>
          <p className="mt-2 md:mt-0">🇺🇸 United States • Bronx, NY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
