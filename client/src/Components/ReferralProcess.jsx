
import mobileImage from "/Images/Group 22095.svg";
import desktopImage from "/Images/Group 22094.svg";

const ReferralProcess = () => {
  return (
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

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4">Refer Now</button>
    </div>
  );
};

export default ReferralProcess;
