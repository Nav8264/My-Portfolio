import React from "react";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();

  return (
    <div id="About Me">
      <div className="my-10 md:hidden ">
        <div className="min-h-screen min-w-screen ">
          <div className="mt-10 flex justify-center">
            <div
              style={{ boxShadow: " -5px -2px 1px white" }}
              className="flex rounded-md  w-[250px] flex-col border-t-l h-[250px] items-center bg-[#afafaf] text-black"
            >
              <div className="">
                <img
                  className="rounded-[100%] mt-2"
                  src="../../../images/profile.jpg"
                  height="120px"
                  width="120px"
                  alt="profile"
                  sizes=""
                  srcset=""
                />
              </div>
              <span className=" font-semibold italic text-xl text-gray-800 mt-2">
                Navneet Singh
              </span>
              {/* <span className="">Front End Developer</span> */}
              <div className="but1">
                <button
                  className="st1"
                  onClick={() => {
                    navigate("/resume");
                  }}
                >
                  Resume
                </button>
                <button
                  onClick={() => {
                    navigate("/project");
                  }}
                  className="nd1"
                >
                  Projects
                </button>
              </div>
            </div>
          </div>
          <div className=" text-start px-8 text-green-900">
            <div className="text-5xl py-3 italic font-sans font-semibold text-[#015761]">
              Hello
              <br />
            </div>
            <span className="text-md font-serif">
              I am Navneet Singh <br />{" "}
            </span>
            <span className="text-md font-serif">
              Working as a Front End Developer<br></br>{" "}
            </span>

            <div className="text-md mt-2 font-serif">
              I am Navneet Singh, a dedicated Front End Developer, thrilled to
              introduce myself through my professional portfolio.
              <br></br> I take immense pride in the work I have crafted and I
              sincerely hope that you find it captivating and impressive. With
              expertise in UI/UX design, I specialize in creating visually
              stunning and user-friendly interfaces that leave a lasting impact.
              <br></br>
              My skills have been recognized and featured on esteemed platforms
              such as <span className="text-red-500"> Navneet.netlify</span>. My
              ultimate objective is to collaborate with you in crafting powerful
              UIs that effectively communicate your message to your target
              audience. <br />I believe in the transformative power of design
              and I am committed to delivering exceptional results that align
              with your goals.<br></br> I invite you to explore my portfolio and
              witness firsthand the meticulous attention to detail and the
              passion I infuse into my work.<br></br> Together, we can create
              remarkable digital experiences that captivate and engage your
              users.
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="maindiv ">
          <div className="central">
            <div className="cleft">
              <div className="profile">
                <img
                  src="../../../images/profile.jpg"
                  height="300px"
                  width="300px"
                  alt="profile"
                  sizes=""
                  srcset=""
                />
              </div>
              <span className="myname">Navneet Singh</span>
              <span className="job">Front End Developer</span>
              {/* <div className="bg-white slinks h-12 mb-3"></div> */}

              {/* <div className="slinks">
                <img src="https://img.icons8.com/ios-filled/2x/facebook-circled.png"  height='34px' width='34px'  alt="facebook" srcset="" />
                <img src="https://img.icons8.com/sf-regular/2x/instagram-new.png"  height='34px' width='34px'  alt="instagram" srcset="" />
                <img src="https://img.icons8.com/ios-filled/2x/linkedin-2--v2.png"   height='34px' width='34px' alt="linkenden" srcset="" />
                <img src="https://img.icons8.com/ios-filled/2x/twitter.png"  height='34px' width='34px'  alt="twitter" srcset="" />
               </div> */}
            </div>
            <div className="cright">
              <span className="hello">Hello!</span>
              <span className="introname">I am Navneet Singh </span>
              <span className="desig">Working as a Front End Developer </span>

              <div className="but">
                <button
                  className="st"
                  onClick={() => {
                    navigate("/resume");
                  }}
                >
                  Resume
                </button>
                <button
                  onClick={() => {
                    navigate("/project");
                  }}
                  className="nd"
                >
                  Projects
                </button>
              </div>
              <div className="para">
                I'm Navneet Singh, a dedicated Front End Developer with
                expertise in UI/UX design. My work, featured on Navneet.in,
                reflects my passion for creating powerful UIs that resonate with
                audiences. Let's collaborate to craft exceptional digital
                experiences that captivate and leave a lasting impact.
              </div>
            </div>
          </div>
          {/* <div className="leftdiv">
            </div>
            <div className="rightdiv"></div> */}
        </div>
      </div>

      {/* <div className="central">
            <div className="cleft">
               <div className="profile">
                <img src="../../../images/profile.jpg" height='300px' width='300px' alt="profile" sizes="" srcset="" /></div> 
               <span className="myname">Navneet Singh</span>
               <span className="job">Front End Developer</span>

               <div className="slinks">
                <img src="https://img.icons8.com/ios-filled/2x/facebook-circled.png"  height='34px' width='34px'  alt="facebook" srcset="" />
                <img src="https://img.icons8.com/sf-regular/2x/instagram-new.png"  height='34px' width='34px'  alt="instagram" srcset="" />
                <img src="https://img.icons8.com/ios-filled/2x/linkedin-2--v2.png"   height='34px' width='34px' alt="linkenden" srcset="" />
                <img src="https://img.icons8.com/ios-filled/2x/twitter.png"  height='34px' width='34px'  alt="twitter" srcset="" />
               </div>
            </div>
            <div className="cright">
                <span className="hello">Hello!</span>
                <span className="introname">I am Navneet Singh </span>
                <span className="desig">Working as a Front End Developer </span>

            <div className="but">
                <button className="st">Resume</button>
                <button className="nd">Projects</button>
            </div>
            <div className="para">Hi! My name is Navneet Singh. I am a Front End Developer, and I’m here to introduce myself in my professional portfolio.
            <br /> I hope that you enjoy the work I’ve created.I’m a Developer specializing in creating UI/Ux designing. My work has been featured on websites like Navneet.in .My goal is to help you create powerful UIs that speak directly to your audience. </div>
            </div>
        </div> */}
    </div>
  );
};

export default Body;
