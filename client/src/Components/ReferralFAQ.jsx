/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState("eligibility");

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-6"
      >
        Frequently Asked Questions
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-between items-start ">
        {/* Sidebar Buttons */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          {["eligibility", "referral", "terms"].map((tab, index) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`w-[250px] text-center p-4 rounded-lg border-2 mt-2 ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
              onClick={() => toggleTab(tab)}
            >
              {tab === "eligibility"
                ? "Eligibility"
                : tab === "referral"
                ? "Referral Process"
                : "Terms & Conditions"}
            </motion.button>
          ))}
        </div>
        {/* Content Section */}
<div className="w-full md:w-2/3 md:ml-4">
  <AnimatePresence mode="wait">
    <motion.div 
      key={activeTab} 
      layout 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.5 }} 
      className="p-4 shadow-md rounded-lg bg-gray-50"
    >
      {activeTab === "eligibility" && (
        <>
          <h3 className="text-xl font-semibold">
            Who is eligible for the referral bonus?
          </h3>
          <p>
            The referrer (the person making the referral) is eligible for
            the bonus if they refer a family member or friend to an
            Accredian program, and that person completes the admission
            process and enrolls in one of Accredian's programs.
          </p>
        </>
      )}

      {activeTab === "referral" && (
        <>
          <h3 className="text-xl font-semibold">
            What are the conditions for eligibility in Accredian's
            referral program?
          </h3>
          <p>
            The referrer (the person making the referral) is eligible for
            the bonus if they refer a family member or friend to an
            Accredian program, and that person completes the admission
            process and enrolls in one of Accredian's programs.
          </p>
        </>
      )}

      {activeTab === "terms" && (
        <>
          <h3 className="text-xl font-semibold">Terms & Conditions</h3>
          <p>
            Terms and conditions for the referral program will be shared here.
          </p>
        </>
      )}
    </motion.div>
  </AnimatePresence>
</div>

      </div>
    </motion.div>
  );
};

export default FAQPage;
