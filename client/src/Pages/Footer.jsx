import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black text-white py-8 flex justify-between items-center px-10"
    >
      {/* Left Side: Logo, Tagline, and Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex flex-col items-start text-left"
      >
        <h2 className="text-3xl font-bold">accredian</h2>
        <p className="text-sm text-gray-400">credentials that matter</p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4">
          {[
            { icon: <FiFacebook />, href: "#" },
            { icon: <CiLinkedin />, href: "#" },
            { icon: <FaInstagram />, href: "#" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-white text-xl"
              whileHover={{ scale: 1.2, color: "#007bff" }}
              transition={{ duration: 0.3 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right Side: Call-to-Action Button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-right"
      >
        <motion.button
          className="mt-6 bg-blue-600 w-[300px] hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule 1-on-1 Call Now
        </motion.button>
        <p className="text-gray-400 text-sm mt-2">
          Speak with our Learning Advisor
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
