import React from "react";
import logo from "../../assets/assets_frontend/logo.svg";
import group_profiles from "../../assets/assets_frontend/group_profiles.png";
import header_img from "../../assets/assets_frontend/header_img.png";
import arrow_icon from "../../assets/assets_frontend/arrow_icon.svg";
import { Link } from "react-router-dom";
import General_physician from "../../assets/assets_frontend/General_physician.svg";
import appointment from "../../assets/assets_frontend/appointment_img.png";
import doc1 from "../../assets/assets_frontend/doc1.png";
function HomePage() {
  return (
    <div className="home-container ">
      <header>
        <nav className="flex justify-between items-center border-b-[1px]  border-[#ADADAD]  text-[14px] flex-wrap mx-[10%]">
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
      </header>

      <section className="book-appointment bg-[#5F6FFF] mx-[10%] mt-5 flex px-20  rounded-lg">
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
          <img src={header_img} alt="" className="w-full  " />
        </div>
      </section>

      <section className="doctor-catogery mx-[10%] my-16 font-outfit ">
        <div className="flex flex-col items-center  ">
          <h2 className="text-[30px] font-[500]">Find by Speciality</h2>
          <p className="font-normal text-center text-sm mt-3 mx-[31%] ">
            Simply browse through our extensive list of trusted doctors,
            <br />
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

      <section className="total-doctor-container font-outfit mt-32 mx-[10%]">
        <div className="flex flex-col items-center gap-3 pb-10">
          <h2 className="text-3xl font-medium ">Top Doctors to Book</h2>
          <p className="text-center text-sm">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>

        <div className="doctor-card-container ">
          <div className="border-[1px] border-[#C9D8FF] rounded-xl ">
            <div className="bg-[#EAEFFF] border rounded-t-xl">
              <img src={doc1} alt="" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2">
                <p className="w-2 h-2 bg-[#0FBF00] rounded-full "></p>
                <p className="text-[#0FBF00] text-sm">Available</p>
              </div>

              <p className="text-lg font-medium">Dr. Richard James</p>
              <p className="text-[#4B5563] font-light text-sm">
                General physician
              </p>
            </div>
          </div>

          <div className="border-[1px] border-[#C9D8FF] rounded-xl ">
            <div className="bg-[#EAEFFF] border rounded-t-xl">
              <img src={doc1} alt="" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2">
                <p className="w-2 h-2 bg-[#0FBF00] rounded-full "></p>
                <p className="text-[#0FBF00] text-sm">Available</p>
              </div>

              <p className="text-lg font-medium">Dr. Richard James</p>
              <p className="text-[#4B5563] font-light text-sm">
                General physician
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#C9D8FF] rounded-xl ">
            <div className="bg-[#EAEFFF] border rounded-t-xl">
              <img src={doc1} alt="" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2">
                <p className="w-2 h-2 bg-[#0FBF00] rounded-full "></p>
                <p className="text-[#0FBF00] text-sm">Available</p>
              </div>

              <p className="text-lg font-medium">Dr. Richard James</p>
              <p className="text-[#4B5563] font-light text-sm">
                General physician
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#C9D8FF] rounded-xl ">
            <div className="bg-[#EAEFFF] border rounded-t-xl">
              <img src={doc1} alt="" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2">
                <p className="w-2 h-2 bg-[#0FBF00] rounded-full "></p>
                <p className="text-[#0FBF00] text-sm">Available</p>
              </div>

              <p className="text-lg font-medium">Dr. Richard James</p>
              <p className="text-[#4B5563] font-light text-sm">
                General physician
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#C9D8FF] rounded-xl ">
            <div className="bg-[#EAEFFF] border rounded-t-xl">
              <img src={doc1} alt="" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2">
                <p className="w-2 h-2 bg-[#0FBF00] rounded-full "></p>
                <p className="text-[#0FBF00] text-sm">Available</p>
              </div>

              <p className="text-lg font-medium">Dr. Richard James</p>
              <p className="text-[#4B5563] font-light text-sm">
                General physician
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-14 mb-24">
          <Link className="bg-[#EAEFFF] py-4 px-16 rounded-full text-[#4B5563] text-lg ">
            more
          </Link>
        </div>
      </section>

      <section className="create-account bg-[#5F6FFF] mx-[10%] flex justify-between items-end px-16 rounded-xl font-outfitm mb-40 ">
        <div className="pt-20 pb-28">
          <div className="text-[#FFFFFF] text-5xl font-bold mb-12">
            <p className="leading-normal">Book Appointment</p>
            <p>With 100+ Trusted Doctors</p>
          </div>
          <Link className="bg-[#FFFFFF] py-4 px-10 rounded-full  ">
            Create account
          </Link>
        </div>
        <div className="w-[370px]">
          <img className="" src={appointment} alt="" />
        </div>
      </section>

      <footer className="mx-[10%] font-outfit text-[#4B5563]">
        <div className="company-contact-footer grid grid-cols-[3fr_1fr_1fr] gap-4 leading-8 justify-self-center">
          <div>
            <img className="w-[190px] mb-5" src={logo} alt="logo" />
            <p className="text-start pr-36">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div>
            <p className="mb-5 font-medium text-xl text-black pt-3">COMPANY</p>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div>
            <p className="mb-5 font-medium text-xl  text-black pt-3">GET IN TOUCH</p>
            <ul>
              <li>+1-212-456-7890</li>
              <li>greatstackdev@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="company-copyright-footer border-t border-[#BDBDBD] mt-10 p-5 text-black">
          <p className="text-center">Copyright © 2024 GreatStack - All Right Reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default HomePage;
