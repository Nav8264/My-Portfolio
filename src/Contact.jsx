import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",

    Subject: "",
    Message: "",
  });

  const handleToast = () => {
    toast.success(" Message Sent Successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [errors, setErrors] = useState({});
  const handleFirstname = (e) => {
    const inputValue = e.target.value;
    console.log("inputValue", inputValue);
    const regexName = /^[a-zA-Z][a-zA-Z\s]*$/;
    if (!inputValue) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        FirstName: "FirstName is required",
      }));
    } else if (!regexName.test(inputValue)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        FirstName: " Only Alphabets are allowed ",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        FirstName: "",
      }));
    }

    setForm((prevForm) => ({
      ...prevForm,
      FirstName: inputValue,
    }));
  };
  const handleLastname = (e) => {
    const inputValue = e.target.value;
    console.log("inputValue", inputValue);
    const regexName = /^[a-zA-Z][a-zA-Z\s]*$/;
    if (!inputValue) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        LastName: "Lastname is required",
      }));
    } else if (!regexName.test(inputValue)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        LastName: "Only Alphabets are allowed!",
      }));
    } else if (form.FirstName === inputValue) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        LastName: "Lastname can't be same as Firstname",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        LastName: "",
      }));
    }

    setForm((prevForm) => ({
      ...prevForm,
      LastName: inputValue,
    }));
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!inputValue) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Email: "Email is required",
      }));
    } else if (!regexEmail.test(inputValue)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Email: "Email is not a valid!",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Email: "",
      }));
    }

    setForm((prevForm) => ({
      ...prevForm,
      Email: inputValue,
    }));
  };

  // const handlePhone = (e) => {
  //   const inputValue = e.target.value;

  //   // const regexEmail =
  //   //   /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/i;
  //   const regexPhone = /^[^a-zA-Z]+$/;
  //   if (!inputValue) {
  //     console.log("empty");
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       PhoneNumber: "PhoneNumber is required",
  //     }));
  //     setForm((prevForm) => ({
  //       ...prevForm,
  //       PhoneNumber: inputValue,
  //     }));
  //   } else if (regexPhone.test(inputValue)) {
  //     console.log("true", regexPhone.test(inputValue));
  //     // setForm({ ...form, PhoneNumber: inputValue });
  //     setForm((prevForm) => ({
  //       ...prevForm,
  //       PhoneNumber: inputValue,
  //     }));
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       PhoneNumber: "",
  //     }));
  //   } else if (!regexPhone.test(inputValue)) {
  //     console.log("false", regexPhone.test(inputValue));
  //     setForm(form);
  //   }
  //   //  else if (!regexEmail.test(inputValue)) {
  //   //   setErrors((prevErrors: any) => ({
  //   //     ...prevErrors,
  //   //     PhoneNumber: "PhoneNumber is not a valid !",
  //   //   }));
  //   // }
  //   else {
  //     setErrors((prevErrors) => ({
  //       ...prevErrors,
  //       PhoneNumber: "",
  //     }));
  //     setForm((prevForm) => ({
  //       ...prevForm,
  //       PhoneNumber: inputValue,
  //     }));
  //   }
  // };

  // ===============================================================================================================

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = {};
    const regexName = /^[A-Za-z\s]+$/;
    // /^[a-zA-Z]+$/;

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const regexphone = /^[0-9]+$/;

    // /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/i;
    // /^\d*(\.\d+)?$/;
    // /^[0-9+-]+$/;

    if (!form.FirstName) {
      errors.FirstName = "Name is required";
    } else if (!regexName.test(form.FirstName)) {
      errors.FirstName = "Name format is not a valid!";
    }
    if (!form.LastName) {
      errors.LastName = "Name is required";
    } else if (!regexName.test(form.LastName)) {
      errors.LastName = "Name format is not a valid!";
    }
    if (!form.Email) {
      errors.Email = "Please enter your email id";
    } else if (!regexEmail.test(form.Email)) {
      errors.Email = "Email format is not a valid !";
    }
    if (!form.Subject) {
      errors.Subject = "Please enter your subject";
    }

    if (!form.Message) {
      errors.Message = "Please enter your Message";
    }
    // else if (!form.Message.test(form.Message)) {
    //   errors.Message = "Message can't be empty";
    // }
    setErrors(errors);
    // Submit form if there are no errors
    if (Object.keys(errors).length === 0) {
      console.log("form", form);

      try {
        await axios.post("https://formspree.io/f/xeqbqezr", form);
        // alert("Message sent successfully!");
        handleToast();
        // Clear the form fields
        setForm({
          FirstName: "",
          LastName: "",
          Email: "",
          Subject: "",
          Message: "",
        });
      } catch (error) {
        alert(
          "An error occurred while sending the message. Please try again later."
        );
      }
    }

    // console.log("formData1111111111111", form);
    //   contact
    //     ?.mutateAsync({
    //       body: {
    //         name: form?.FirstName,
    //         email: form?.Email,
    //         phone_number: form?.PhoneNumber,
    //         message: form?.Message,
    //       },
    //     })
    //     ?.then((response) => {
    //       console.log("response", response);
    //       // handleToast();
    //       setForm({ FirstName: "", Email: "", PhoneNumber: "", Message: "" });
    //     })
    //     ?.catch((error) => console.log("error", error));
    // }}
  };

  return (
    <div>
      <ToastContainer />
      <div
        className="flex justify-center items-center text-3xl px-5 py-10"
        id="Contact Me"
      >
        <img
          src="https://img.icons8.com/dusk/2x/speech-bubble.png"
          alt="logo"
          height="50px"
          width="50px"
        />

        <div className="hhed ml-2 ">Let's Talk....</div>
      </div>

      <div className="flex justify-center">
        <div className="">
          <div
            style={{ boxShadow: "-5px 5px 15px #afafaf" }}
            className="border   py-10 px-3 md:px-10 grid grid-cols-1 gap-6  w-[100%] md:w-[750px]  bg-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-5 mt-5">
                <div
                  className='font-["Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif] italic'
                >
                  FirstName*
                </div>
                <input
                  type="text"
                  onChange={handleFirstname}
                  value={form.FirstName}
                  className="border-b-2 border-blue-950 w-[100%] mt-2 px-1 "
                />

                {errors.FirstName && (
                  <div className="text-red-600">{errors.FirstName}</div>
                )}
              </div>
              <div className="px-5 mt-5">
                <div
                  className='font-["Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif] italic'
                >
                  LastName*
                </div>
                <input
                  type="text"
                  value={form.LastName}
                  onChange={handleLastname}
                  className="border-b-2 border-blue-950 w-[100%] mt-2 px-1"
                />

                {errors.LastName && (
                  <div className="text-red-600">{errors.LastName}</div>
                )}
              </div>
            </div>
            <div className="px-5 mt-5">
              <div
                className='font-["Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif] italic'
              >
                Email*
              </div>
              <input
                type="text"
                value={form.Email}
                onChange={handleEmailChange}
                className="border-b-2 border-blue-950 w-[100%] mt-2 px-1"
              />
              {errors.Email && (
                <div className="text-red-600">{errors.Email}</div>
              )}
            </div>
            <div className="px-5 mt-5">
              <div
                className='font-["Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif] italic'
              >
                Subject*
              </div>
              <input
                type="text"
                value={form.Subject}
                onChange={(e) => {
                  setForm({ ...form, Subject: e.target.value });
                }}
                className="border-b-2 border-blue-950 w-[100%] mt-2 px-1"
              />
              {errors.Subject && (
                <div className="text-red-600">{errors.Subject}</div>
              )}
            </div>
            <div className="px-5 mt-5">
              <div
                className='font-["Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif] italic'
              >
                Message*
              </div>
              <textarea
                type="text"
                maxLength="250"
                value={form.Message}
                onChange={(e) => {
                  setForm({ ...form, Message: e.target.value });
                }}
                className="border-b-2 border-blue-950 focus:border-b-2  resize-none  w-[100%] h-[5em]"
              />
              {errors.Message && (
                <div className="text-red-600">{errors.Message}</div>
              )}
            </div>
            <div className="text-center mt-5  flex justify-center">
              <button
                onClick={handleSubmit}
                className="border border-blue-950 w-[120px] h-8 text-lg font-semibold italic text-white bg-gradient-to-r from-blue-950 via-blue-600 to-blue-950 rounded-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
