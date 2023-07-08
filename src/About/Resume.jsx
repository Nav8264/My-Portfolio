import React from "react";
import me from "../../src/Navneetresume.pdf";
const Resume = () => {
  const data = [
    {
      id: 1,
      para: "2020-2021",
      para2: "Senior Secondary",
      para3: "BKJ Sr.Sec Public School",
      para4: "Amritsar",
      para5:
        "Bibi Kaulan Ji Sr Sec Public School, Non-Medical Stream, 88%. Achieved exceptional academic performance, showcasing commitment, analytical thinking, and problem-solving skills. Ready to leverage expertise for impactful contributions.",
    },
    {
      id: 2,
      para: "Nov 14 2022 – July 2023",
      para2: "Frontend Developer",
      para3: "Simba Quartz",
      para4: "Tangra",
      para5:
        "	Developing and maintaining web applications that are optimised for various devices and browsers.	Implementing responsive design and cross-browser compatibility for different screen sizes.	Developing user-friendly and interactive web features such as buttons, forms, and menus.	Using JavaScript libraries and frameworks such as React or Next JS to build complex web applications and interactive features.	Writing and maintaining code that is clean, efficient, and easy to understand.	Testing web applications to ensure they are bug-free and work seamlessly for the end-users.",
    },
  ];
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = me;
    console.log("me", me); // Replace with the actual path to your CV file
    downloadLink.download = "navneetPdf"; // Replace with the desired file name
    downloadLink.click();
  };

  return (
    <div className="mt-10 ">
      <div className="heading" id="Resume">
        <img
          src="https://img.icons8.com/ios/2x/parse-from-clipboard.png"
          height="50px"
          width="50px"
          alt="Resume"
          srcset=""
        />
        <span className="hhed">Resume</span>
      </div>
      <div className=" flex justify-center  mt-5">
        <span className="py-5 px-2 text-2xl md:text-[45px] italic">
          Experience
        </span>
        <button
          onClick={handleDownload}
          className="h-[40px] w-[135px]  md:ml-20 rounded-[15px] border-2 border-[#2f7b92] bg-[#cae5ed] hover:bg-[#2f7b92] hover:text-white my-5"
        >
          Download CV
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
        <div className=" grid grid-cols-1 md:grid-cols-1  lg:grid-cols-1 my-10">
          <div className="flex justify-center">
            <div
              className="bg-white hover:bg-gray-100 rounded-lg grid grid-cols-1 lg:grid-cols-1 justify-center my-5 px-5 py-2 w-[300px] lg:w-[760px] mx-3"
              style={{ boxShadow: " -5px -2px 10px midnightblue" }}
            >
              <div className="py-5 ">
                <div className="">
                  <p className="text-2xl px-5 italic text-blue-900 font-semibold">
                    2020-2021
                  </p>
                  <p className="text-2xl  px-5 font-sans  py-1 ">
                    Senior Secondary
                  </p>
                  <div className="">
                    {" "}
                    <span className="text-xl  px-5 font-sans">
                      BKJ Sr.Sec Public School
                    </span>
                    <div className="text-lg  px-5 font-sans">Amritsar</div>
                  </div>
                </div>
              </div>
              <div className=" text-normal px-5 py-2 text-lg ">
                <li className="py-1 px-1 text- ">
                  High School - BKJ Sr.Sec Public School, Non-Medical Stream,
                  88%
                </li>

                <li className="py-1 px-1">
                  Exceptional academic performance demonstrates dedication and
                  commitment.
                </li>
                <li className="py-1 px-1">
                  Proficient in analytical thinking and problem-solving.
                </li>
                <li className="py-1 px-1">
                  Ready to apply skills for impactful contributions.
                </li>
                <li className="py-1 px-1">
                  Eager to leverage education for future endeavors.
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-1  lg:grid-cols-1 my-10">
          <div className="flex justify-center">
            <div
              className="bg-white hover:bg-gray-100 rounded-lg grid grid-cols-1 lg:grid-cols-1 justify-center my-5 px-5 py-2 w-[300px] lg:w-[760px] mx-3"
              style={{ boxShadow: " -5px -2px 8px midnightblue" }}
            >
              <div className="py-5 ">
                <div className="">
                  <p className="text-2xl px-5 italic text-blue-900 font-semibold">
                    Nov 2022 – July 2023
                  </p>
                  <p className="text-2xl  px-5 font-sans  py-1 ">
                    Frontend Developer
                  </p>
                  <div className="">
                    {" "}
                    <span className="text-xl  px-5 font-sans">
                      Simba Quartz
                    </span>
                    <div className="text-lg  px-5 font-sans">Tangra</div>
                  </div>
                </div>
              </div>
              <div className=" text-justify px-5 py-2 text-lg italic">
                <li className="py-1 px-1 text- ">
                  Developing and maintaining web applications that are optimised
                  for various devices and browsers.
                </li>

                <li className="py-1 px-1">
                  Implementing responsive design and cross-browser compatibility
                  for different screen sizes
                </li>
                <li className="py-1 px-1">
                  Developing user-friendly and interactive web features such as
                  buttons, forms, and menus.
                </li>
                <li className="py-1 px-1">
                  Using JavaScript libraries and frameworks such as React or
                  Next JS to build complex web applications and interactive
                  features.
                </li>
                <li className="py-1 px-1">
                  Testing web applications to ensure they are bug-free and work
                  seamlessly for the end-users.
                </li>
                <li className="py-1 px-1">
                  Writing and maintaining code that is clean, efficient, and
                  easy to understand.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Resume;
