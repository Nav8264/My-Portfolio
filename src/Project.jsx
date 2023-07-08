import React from "react";
import image from "../src/images/image.png";
import image1 from "../src/images/image (1).png";
import image2 from "../src/images/image (2).png";

import image3 from "../src/images/image (3).png";
import image4 from "../src/images/image (4).png";

const Project = () => {
  const data = [
    {
      id: 1,
      pro: "Project1",
      pro2: "Black Grandeur Chauffeur",
      pro3: " Created a captivating car booking website using React, delivering a visually stunning and immersive user experience. Implemented seamless animations throughout the interface, enhancing interactivity and engaging users. Utilized React Router for smooth navigation between pages and integrated a backend API to retrieve real-time car availability and pricing data.",
      img: image,
      redirect: "https://blackgrandeurchauffeur.com/",
    },
    {
      id: 2,
      pro: "Project2",
      pro2: "School website ",
      pro3: "Developed a modern and user-friendly website for Fateh World School, providing a comprehensive online platform for students, parents, and faculty. The website serves as a hub of information, facilitating effective communication and enhancing the overall school experience.",
      img: image2,
      redirect: "https://fateh-world-react-app.vercel.app/",
    },
    {
      id: 3,
      pro: "Project3",
      pro2: "High & Sky",
      pro3: "Created a captivating car booking website using React, delivering a visually stunning and immersive user experience. Implemented seamless animations throughout the interface, enhancing interactivity and engaging users. Utilized React Router for smooth navigation between pages and integrated a backend API to retrieve real-time car availability and pricing data.",
      img: image3,
      redirect: "https://highnsky-react-app.vercel.app/",
    },
    {
      id: 4,
      pro: "Project4",
      pro2: "Wooden Villa",
      pro3: "The website features a comprehensive product catalog, organized into categories for easy navigation. Integrated advanced search functionality, allowing users to filter products based on criteria such as style, material, and price range. Implemented a secure and streamlined checkout process, including payment gateway integration for smooth transactions.",
      img: image1,
      redirect: "https://wooden-villa-react-app.vercel.app/",
    },

    {
      id: 5,
      pro: "Project5",
      pro2: "Admin Panel",
      pro3: " Developed a robust and user-friendly admin panel using React framework and Ant Design library, providing a comprehensive tool for managing and controlling various aspects of the application or website.",
      img: image4,
    },
    // {
    //   id: 6,
    //   pro: "Project6",
    //   pro2: "Role title",
    //   pro3: "Lorem ipsum doloctavoluptatum, numquam aperiam, nesciunt iure consequuntur rem magnamratione ex consectetur eos modi, natus corporis sed voluptateassumenda ullam nulla itaque. Laudantium nostrum adipisci rerummodi, labore odit. Quam quibusdam, voluptates suscipit delectusquo placeat. Reiciendis inventore officiis aperiam est fugit?",
    //   img: "https://cdn.pixabay.com/photo/2017/08/29/08/39/industry-2692459__340.jpg",
    // },
    // {
    //   id: 7,
    //   pro: "Project7",
    //   pro2: "Role title",
    //   pro3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dictavoluptatum, numquam aperiam, nesciunt iure consequuntur rem magnamratione ex consectetur eos modi, natus corporis sed voluptateassumenda ullam nulla itaque. Laudantium nostrum adipisci rerummodi, labore odit. Quam quibusdam, voluptates suscipit delectusquo placeat. Reiciendis inventore officiis aperiam est fugit?",
    //   img: "https://cdn.pixabay.com/photo/2017/08/29/08/39/industry-2692459__340.jpg",
    // },
    // {
    //   id: 8,
    //   pro: "Project8",
    //   pro2: "Role title",
    //   pro3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dictavoluptatum, numquam aperiam, nesciunt iure consequuntur rem magnamratione ex consectetur eos modi, natus corporis sed voluptateassumenda ullam nulla itaque. Laudantium nostrum adipisci rerummodi, labore odit. Quam quibusdam, voluptates suscipit delectusquo placeat. Reiciendis inventore officiis aperiam est fugit?",
    //   img: "https://cdn.pixabay.com/photo/2017/08/29/08/39/industry-2692459__340.jpg",
    // },
  ];

  return (
    <div>
      <div className="heading" id="Projects">
        <img
          src="https://img.icons8.com/dotty/2x/project-management.png"
          height="50px"
          width="50px"
          loading="lazy"
          alt="PROJECT LOGO"
          srcset=""
        />

        <div className="hhed my-[25px]">Projects....</div>
      </div>
      <div className=" flex justify-center ">
        <div className=" w-[300px] md:w-[600px] text-center">
          <p>
            Projects on which I contribute my role as a frontend React
            Developer, Collaborated with a team to build a React Apps using
            React and Vercel,based on requirements of Clients
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-1 my-10">
        {data.map((item) => (
          <div className="flex justify-center">
            <div
              style={{ boxShadow: " -5px -2px 5px rgb(205, 197, 197)" }}
              className="grid grid-cols-1 h-fit py-2  lg:grid-cols-2 my-5 mx-2  bg-white rounded-md w-[300px] lg:w-[650px] "
            >
              <div className="w-[300px]">
                <div className="side-header">
                  <span className="nam">{item.pro}</span>
                  <span className="nam1">{item.pro2}</span>
                </div>
                <div className="mt-5 text-justify px-[10px] py-2">
                  {item.pro3}
                </div>
              </div>
              <div className="lg:mt-[120px]">
                <div className="">
                  <a href={item?.redirect} target="_blank">
                    <img
                      className=""
                      style={{ height: "200px", width: "300px" }}
                      src={item.img}
                      // src="https://cdn.pixabay.com/photo/2017/08/29/08/39/industry-2692459__340.jpg"
                      height="200px"
                      width="320px"
                      alt=""
                      srcset=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
