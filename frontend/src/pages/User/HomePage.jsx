import React from "react";
import logo from "../../assets/assets_frontend/logo.svg";
import group_profiles from "../../assets/assets_frontend/group_profiles.png";
import header_img from "../../assets/assets_frontend/header_img.png";
import arrow_icon from "../../assets/assets_frontend/arrow_icon.svg";
import { Link } from "react-router-dom";
import General_physician from "../../assets/assets_frontend/General_physician.svg";
function HomePage() {
  return (
    <div className="home-container">
      <nav className="flex justify-between items-center border-b-[1px] max-w-[1050px] border-[#ADADAD] mx-auto text-[14px] flex-wrap ">
        <img src={logo} alt="navlogo" className="w-44 my-5" />
        <ul className="flex space-x-5  font-poppins font-medium">
          <li>HOME</li>
          <li>ALL DOCTORS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <Link className="font-outfit bg-[#5F6FFF] text-[#FFFFFF] px-8 py-3 rounded-full font-[300]">
          Create account
        </Link>
      </nav>

      <section className="book-appointment bg-[#5F6FFF] max-w-[1050px] mx-auto mt-5 flex px-20 gap-10 rounded-lg">
        <div className=" pb-24">
          <h1 className="text-[45px] font-outfit font-[550] text-[#FFFFFF] leading-[4rem] mt-36">
            Book Appointment With Trusted Doctors
          </h1>
          <div className="flex py-5 items-center">
            <img
              src={group_profiles}
              alt="group_profiles"
              className="w-[120px] h-[53px]"
            />

            <p className="font-outfit text-[#FFFFFF] pl-3 font-[250] text-sm leading-[23px]">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <button className="bg-[#FFFFFF] font-outfit text-[#595959] flex items-center px-8 py-3 rounded-full">
            Book appointment <img src={arrow_icon} alt="" className="pl-2" />{" "}
          </button>
        </div>
        <div className="flex items-end">
          <img src={header_img} alt="" className="w-[100%] " />
        </div>
      </section>

      <section className="doctor-catogery max-w-[1050px] mx-auto mt-16 font-outfit">
        <div className="flex flex-col items-center max-w-[350px] mx-auto ">
          <h2 className="text-[30px] font-[500]">Find by Speciality</h2>
          <p className="font-normal text-center text-sm mt-3">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>

        <div className="doctor-catogery-container flex justify-center mt-10 gap-5">
          <div className="flex flex-col items-center w-24 text-center">
            <img src={General_physician} alt="General_physician_img" />
            <p className="text-xs">General physician</p>
          </div>

          <div className="flex flex-col items-center w-24 text-center">
            <img src={General_physician} alt="General_physician_img" />
            <p className="text-xs">General physician</p>
          </div>

          <div className="flex flex-col items-center w-24 text-center">
            <img src={General_physician} alt="General_physician_img" />
            <p className="text-xs">General physician</p>
          </div>

          <div className="flex flex-col items-center w-24 text-center">
            <img src={General_physician} alt="General_physician_img" />
            <p className="text-xs">General physician</p>
          </div>
          <div className="flex flex-col items-center w-24 text-center">
            <img src={General_physician} alt="General_physician_img" />
            <p className="text-xs">General physician</p>
          </div>

          <div className="flex flex-col items-center w-24 text-center">
            <img src={General_physician} alt="General_physician_img" />
            <p className="text-xs">General physician</p>
          </div>
        </div>
      </section>

      <section className="total-doctor-container">
        <div>
          <h2>Top Doctors to Book</h2>
          <p>Simply browse through our extensive list of trusted doctors.</p>
        </div>

        <div className="doctor-card">
          <img src="" alt="" />
          <div>
          <p></p>
          <p>Available</p>
          </div>
<p>Dr. Richard James</p>
<p>General physician</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
