import { motion } from "framer-motion";
import { IoPlayForwardOutline } from "react-icons/io5";
import { IoIosInfinite } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";

const benefits = [
  {
    icon: <GiMoneyStack className="text-blue-600 text-3xl" />, 
    title: "Earn ₹10K Per Successful Referral",
  },
  {
    icon: <IoPlayForwardOutline className="text-blue-600 text-3xl" />, 
    title: "Quick And Easy Referral Process",
  },
  {
    icon: <IoIosInfinite className="text-blue-600 text-3xl" />, 
    title: "Unlimited Referral Potential",
  },
];

const ReferralBenefits = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-10 px-6 bg-white text-center"
    >
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
      >
        What Are The Referral Benefits?
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
            className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-gray-100 hover:shadow-xl transition-shadow"
          >
            <motion.div 
              className="bg-blue-100 p-4 rounded-full mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "backOut" }}
            >
              {benefit.icon}
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-medium text-gray-800"
            >
              {benefit.title}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ReferralBenefits;
