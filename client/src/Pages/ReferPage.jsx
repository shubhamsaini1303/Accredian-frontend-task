/* eslint-disable react/no-unescaped-entities */

import Navbar from "../Components/Navbar";
import ReferralBenefits from "../Components/ReferralBenefits";
import ReferralFAQ from "../Components/ReferralFAQ";
import mobileImage from "/Images/Group 22095.svg";
import desktopImage from "/Images/Group 22094.svg";
import { useState , useEffect } from "react";
import Footer from "./Footer";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";


const ReferPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(1);
  const [referrals, setReferrals] = useState([]);
  const [uniqueCourses, setUniqueCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const [friendDetails, setFriendDetails] = useState({
    friendName: "",
    friendEmail: "",
    friendNumber: "",
    course: "",
  });

  const [myDetails, setMyDetails] = useState({
    myName: "",
    myEmail: "",
    myNumber: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (showPopup) {
      fetchReferrals();
    }
  }, [showPopup]);

  const fetchReferrals = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/allreferral`);
      setReferrals(response.data);

      const courses = response.data
        .map((referral) => referral.course)
        .filter((course, index, self) => course && self.indexOf(course) === index);

      setUniqueCourses(courses);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching referrals:", error);
      toast.error("Failed to fetch referrals.");
      setLoading(false);
    }
  };

  const validateFields = (details, type) => {
    let newErrors = {};
    
    Object.keys(details).forEach((field) => {
      if (!details[field].trim()) {
        newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required.`;
      }
    });

    if (type === "friend" && details.friendEmail && !/\S+@\S+\.\S+/.test(details.friendEmail)) {
      newErrors.friendEmail = "Invalid email format.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "friend") {
      setFriendDetails((prev) => ({ ...prev, [name]: value }));
    } else {
      setMyDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNextStep = () => {
    if (validateFields(friendDetails, "friend")) {
      setStep(2);
    } else {
      toast.error("Please fill all required fields correctly.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields(myDetails, "self")) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/refer`, { ...friendDetails, ...myDetails });
      toast.success("Referral submitted successfully!");
      setShowPopup(false);
      setFriendDetails({ friendName: "", friendEmail: "", friendNumber: "", course: "" });
      setMyDetails({ myName: "", myEmail: "", myNumber: "" });
      setStep(1);
    } catch (error) {
      console.error("Error submitting referral:", error);
      toast.error("Failed to submit referral.");
    }
  };

  const [activeTab, setActiveTab] = useState("Refer");
  const tabs = ["Refer", "Benefits", "FAQ's", "Support"];

  return (
    <div>
      <Navbar />
      <div className="mt-[70px]">
        <div className="flex justify-center p-4 mt-10">
          <div className="flex gap-6 bg-blue-100 rounded-full px-6 py-2 shadow-md w-full max-w-xl justify-around relative">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`relative text-gray-600 text-[18px] font-semibold ${
                  activeTab === tab ? "text-blue-600" : "hover:text-blue-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 text-blue-600 text-2xl">•</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

<div className="text-center flex flex-col md:flex-row lg:w-[1100px] mx-auto h-auto md:h-[500px] rounded-2xl shadow-2xl bg-[#EEF5FF] p-6 md:p-0">
      <div className="w-full md:w-1/2 h-auto md:h-[500px] flex flex-col justify-center items-center">
        <h1 className="text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] font-bold text-gray-800 mt-10 md:mt-20">
          Let's Learn & Earn
        </h1>
        <p className="mt-4 text-gray-600 text-center text-sm sm:text-base md:text-lg">
          Get a chance to earn <br />
          <span className="text-blue-600 font-bold">₹10,000</span> for every friend who enrolls!
        </p>
        <button
          onClick={() => setShowPopup(true)}
          className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Refer Now
        </button>
      </div>
      <div className="hidden md:flex w-1/2 justify-end px-4 sm:px-10 md:px-16 lg:px-20">
        <img
          src="/Images/Anniversary (7) 1.png"
          alt="Referral"
          className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] rounded-lg"
        />
      </div>
    </div>
  
    
      {showPopup && (
        <div className="fixed inset-0 md:mt-20  bg-opacity-50 flex  items-center justify-center p-4" onClick={() => setShowPopup(false)}>
          <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="hidden md:block w-1/2">
              <img src="Images/refer-modal-bg.svg" alt="Refer a Friend" className="w-full bg-blue-500 h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-6 relative md:h-[450px]">
              <button className="absolute top-3 cursor-pointer right-3  text-gray-600 hover:text-gray-800" onClick={() => setShowPopup(false)}>✖</button>
              {step === 1 ? (
                <>
                  <h2 className="text-2xl font-semibold text-center mb-4">Refer a Friend</h2>
                  <form className="space-y-4">
                    {["friendName", "friendEmail", "friendNumber"].map((field) => (
                      <div key={field}>
                        <input name={field} type={field.includes("Email") ? "email" : "text"} value={friendDetails[field]} onChange={(e) => handleChange(e, "friend")} placeholder={`Friend's ${field.replace("friend", "").replace(/([A-Z])/g, " $1")}`} className="w-full p-2 border rounded" />
                        {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                      </div>
                    ))}
                    <div>
                      <select name="course" value={friendDetails.course} onChange={(e) => handleChange(e, "friend")} className="w-full p-2 border rounded">
                        <option value="">Select Course</option>
                        {uniqueCourses.map((course, index) => (
                          <option key={index} value={course}>{course}</option>
                        ))}
                      </select>
                      {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
                    </div>
                    <button type="button" onClick={handleNextStep} className="bg-blue-600 text-white py-2 px-6 rounded-md w-full">Next</button>
                  </form>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold text-center mb-4">Your Details</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {["myName", "myEmail", "myNumber"].map((field) => (
                      <div key={field}>
                        <input name={field} type={field.includes("Email") ? "email" : "text"} value={myDetails[field]} onChange={(e) => handleChange(e, "self")} placeholder={`Your ${field.replace("my", "").replace(/([A-Z])/g, " $1")}`} className="w-full p-2 border rounded" />
                        {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                      </div>
                    ))}
                    <button type="submit" className="bg-green-600 text-white py-2 px-6 rounded-md w-full">Refer Now</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <ReferralBenefits />

      {/*  */}
          <div className=" py-10 text-center" style={{backgroundColor:"#EEF5FF"}}>
            <h2 className=" text-2xl font-semibold mb-6">
              How Do I <span className="text-blue-600">Refer?</span>
            </h2>
            
            {/* Responsive Image */}
            <div className="mb-6">
              <img
                src={mobileImage}
                alt="Mobile Referral Process"
                className="block md:hidden mx-auto"
                width={300}
                height={200}
              />
              <img
                src={desktopImage}
                alt="Desktop Referral Process"
                className="hidden md:block mx-auto  w-[900px]"
                width={600}
                height={400}
              />
            </div>
            <button onClick={() => setShowPopup(true)} className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
            Refer Now
          </button>
          </div>

      {/* <ReferralProcess /> */}
      <ReferralFAQ />
      <Footer />
      <div>
      <Toaster position="top-center" reverseOrder={false} />
      {/* Other components */}
    </div>
    </div>
  );
};
export default ReferPage;


