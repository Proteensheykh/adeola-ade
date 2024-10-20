import { FaInstagram, FaLinkedin, FaTwitter, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="foot" className="bg-fefae0 py-8 text-purple-800 mx-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Footer Text */}
        <div className="mb-4 md:mb-0">
          <p className="text-center md:text-left">
            © 2024 Adeola Adenipekun. All rights reserved.
          </p>
        </div>
        
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/dee_adgirl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-purple-800 hover:text-green-400 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/adeola-adenipekun-a89370170"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-purple-800 hover:text-green-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.x.com/Thisisadeolaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-purple-800 hover:text-green-400 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.behance.net/deeadgirl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-purple-800 hover:text-green-400 transition duration-300"
          >
            <FaBehance />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
