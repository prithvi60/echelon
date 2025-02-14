"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Loader from "./Loader";
import toast from "react-hot-toast";

export const Modal1 = ({ title, styles, type, pageType, page }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid">
      <button
        onClick={() => setIsOpen(true)}
        className={`rounded-full border lg:text-lg border-black hover:bg-black/80 hover:text-white transition-colors duration-500 ease-in-out ${styles}`}
      >
        <h4>{title}</h4>
      </button>
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        type={type}
        page={page}
        pageType={pageType}
      />
    </div>
  );
};

export const SpringModal = ({
  isOpen,
  setIsOpen,
  type = "",
  page = "",
  pageType = "",
}) => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    phoneNo: "",
    userEmail: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(true);
    // console.log(formData);

    const emailFormData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      userEmail: formData.userEmail,
      phone: formData.phoneNo,
      message: formData.message,
      page: page,
    };

    try {

      const emailResponse = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailFormData),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.text();
        throw new Error(
          `Email API Error: ${emailResponse.status} ${errorData}`
        );
      }

      const emailDataResult = await emailResponse.json();

      // Check for success in both responses
      if (emailDataResult.success) {
        setStatus(false);
        setFormData(initialFormData);
        e.target.reset();
        setIsOpen(false)
        toast.success("Thank you! We will get back to you shortly.", {
          position: "top-right",
          duration: 3000,
          style: {
            border: "1px solid #65a34e",
            padding: "16px",
            color: "#65a34e",
          },
          iconTheme: {
            primary: "#65a34e",
            secondary: "#FFFAEE",
          },
        });
        // window.location.href = "/thankyou";
      } else {
        toast.error("We are unable to receive your details. Please try again.", {
          position: "top-right",
          duration: 3000,
          style: {
            border: "1px solid #EB1C23",
            padding: "16px",
            color: "#EB1C23",
          },
          iconTheme: {
            primary: "#EB1C23",
            secondary: "#FFFAEE",
          },
        });
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      setStatus(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 !z-[9999] grid w-full h-full p-8 overflow-y-scroll no_scrollbar cursor-pointer bg-purple-900/80 backdrop-blur place-items-center font-Montserrat"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl overflow-scroll no_scrollbar md:bg-gradient-to-r from-[#FF7F00] via-[#FF3E9D] text-transparent to-[#0051FF] rounded-lg shadow-xl cursor-default md:p-8 md:max-w-5xl max-h-[520px] md:max-h-fit no-scrollbar"
          >
            <div className="relative z-10 flex flex-col items-center justify-center p-6 md:flex-row md:items-start bg-primary">
              <div className="w-full mt-5 space-y-14 md:w-3/5 text-white">
                <h3 className="mb-2 text-2xl font-bold text-info md:text-3xl">
                  Let us get back to you
                </h3>
                <ul className="hidden md:block space-y-3 text-sm md:text-base max-h-[120px] md:max-h-fit overflow-scroll no_scrollbar">
                  <li>
                    Our dedicated sales team will get in touch with you to
                    discuss how Echelon Zero can elevate your business practice. Get
                    ready to experience unmatched quality and support
                  </li>
                </ul>
              </div>
              <div className="relative w-full space-y-2 md:w-2/5 ">
                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 space-y-2 text-black md:space-y-4 py-7 md:p-7"
                >
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName || ""}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                    className="w-full p-2 md:px-4 md:py-3 text-black bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none text-sm md:text-base"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName || ""}
                    onChange={handleChange}
                    required
                    placeholder="Last Name"
                    className="w-full p-2 md:px-4 md:py-3 text-black bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none text-sm md:text-base"
                  />
                  <input
                    type="email"
                    name="userEmail"
                    value={formData.userEmail || ""}
                    onChange={handleChange}
                    required
                    placeholder="Email Id"
                    className="w-full p-2 md:px-4 md:py-3 text-black bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none text-sm md:text-base"
                  />
                  <input
                    type="text"
                    name="phoneNo"
                    value={formData.phoneNo || ""}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="w-full p-2 md:px-4 md:py-3 text-black bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none text-sm md:text-base"
                  />
                  <textarea
                    type="text"
                    name="message"
                    value={formData.message || ""}
                    onChange={handleChange}
                    required
                    placeholder="Message"
                    className="w-full p-2 md:px-4 md:py-3 text-black bg-white border outline-none border-stroke placeholder:text-[#275CB6] placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none text-sm md:text-base"
                  />
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex="-1"
                    autoComplete="off"
                    className="hidden"
                  />
                  <button
                    type="submit"
                    className={`w-full py-2 text-sm font-semibold text-white transition-opacity md:text-base bg-[#FF7F00] hover:opacity-90 disabled:cursor-not-allowed disabled:bg-opacity-80 `}
                  >
                    {status ? <Loader /> : "Enquire"}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

