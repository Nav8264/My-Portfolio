import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" grid grid-cols-1  lg:grid-cols-2  bg-white py-3">
        <div className="rightb text-center lg:text-start lg:px-10 lg:w-[25em] py-5 text-md">
          © 2023 by Navneet Singh. <br />
          Powered and secured by Navneet Singh
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3  ">
          <div className="call">
            <span className="num">Call</span>
            <a href="tel:8264571768">
              <span className="numb">+91-8264571768</span>
            </a>
          </div>
          <div className="write">
            <span className="num1">Write</span>
            <a href="mailto:Navneet.singh0863@gmail.com">
              <span className="numb1">Navneet.singh0863@gmail.com</span>
            </a>
          </div>
          <div className="follow">
            <span className="num2">Follow</span>
            <span className="numb2">
              {/* <img
                src="https://img.icons8.com/ios-filled/2x/facebook-circled.png"
                height="20px"
                width="20px"
                alt="facebook"
                srcset=""
              /> */}

              <a
                href="https://instagram.com/__nav__ramghariaa__?igshid=NTc4MTIwNjQ2YQ=="
                target="_blank"
              >
                <img
                  src="https://img.icons8.com/sf-regular/2x/instagram-new.png"
                  height="20px"
                  width="20px"
                  alt="instagram"
                />
              </a>
              <a href="https://www.linkedin.com/in/navneet-singh-3a4617282/">
                <img
                  src="https://img.icons8.com/ios-filled/2x/linkedin-2--v2.png"
                  height="20px"
                  width="20px"
                  alt="linkenden"
                />
              </a>

              {/* <img
                src="https://img.icons8.com/ios-filled/2x/twitter.png"
                height="20px"
                width="20px"
                alt="twitter"
                srcset=""
              /> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
