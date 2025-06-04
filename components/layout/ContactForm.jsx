"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "../UI/Loader";

export const ContactForm = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    job: "",
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

  useEffect(() => {
    const downloadKey = "pdfDownloaded";
    localStorage.removeItem(downloadKey);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(true);

    const emailFormData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      jobTitle: formData.job,
      userEmail: formData.userEmail,
      phone: formData.phoneNo,
      message: formData.message,
      page: "",
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
        window.location.href = "/thankyou";
      } else {
        throw new Error("One or more operations failed.");
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      setStatus(false);
    }
  };
  return (
    <section className="text-warning font-Montserrat flex flex-col md:flex-row justify-center items-center">
      <div className="w-full">
        <h2 className="text-4xl py-5 tracking-wider md:text-[40px] xl:text-[64px] w-max mx-auto bg-gradient-to-r from-[#FF7F00] via-[#FF3E9D] to-[#0051FF] bg-clip-text text-transparent font-bold">Contact Us</h2>
      </div>
      <div className="relative w-full max-w-4xl px-5 space-y-2 md:px-0">
        <form
          onSubmit={handleSubmit}
          className="relative z-10 w-full space-y-2 rounded-[3rem] text-black md:space-y-4 px-6 lg:px-12 py-7 bg-[#F0F0F0]"
        >
          <div className="flex items-center gap-4">
            <label htmlFor="firstName" className="w-[30%] hidden lg:block text-sm font-semibold md:w-1/4 md:text-base font-Montserrat text-info shrink-0">First Name :</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName || ""}
              onChange={handleChange}
              required
              placeholder="First Name :"
              className="w-full p-2 text-sm bg-white border rounded-full outline-none md:px-4 md:py-3 text-black border-stroke placeholder:opacity-100 lg:placeholder:opacity-0 placeholder:text-info placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none md:text-base"
            />
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="lastName" className="w-[30%] hidden lg:block text-sm font-semibold md:w-1/4 md:text-base font-Montserrat text-info shrink-0">Last Name :</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName || ""}
              onChange={handleChange}
              required
              placeholder="Last Name :"
              className="w-full p-2 text-sm bg-white border rounded-full outline-none md:px-4 md:py-3 text-black border-stroke placeholder:opacity-100 lg:placeholder:opacity-0 placeholder:text-info placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none md:text-base"
            />
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="userEmail" className="w-[30%] hidden lg:block text-sm font-semibold md:w-1/4 md:text-base font-Montserrat text-info shrink-0">Email ID :</label>
            <input
              id="userEmail"
              type="email"
              name="userEmail"
              value={formData.userEmail || ""}
              onChange={handleChange}
              required
              placeholder="Email Id :"
              className="w-full p-2 text-sm bg-white border rounded-full outline-none md:px-4 md:py-3 text-black border-stroke placeholder:opacity-100 lg:placeholder:opacity-0 placeholder:text-info placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none md:text-base"
            />
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="phoneNo" className="w-[30%] hidden lg:block text-sm font-semibold md:w-1/4 md:text-base font-Montserrat text-info shrink-0">Phone No :</label>
            <input
              id="phoneNo"
              type="text"
              name="phoneNo"
              value={formData.phoneNo || ""}
              onChange={handleChange}
              required
              placeholder="Phone Number :"
              className="w-full p-2 text-sm bg-white border rounded-full outline-none md:px-4 md:py-3 text-black border-stroke placeholder:opacity-100 lg:placeholder:opacity-0 placeholder:text-info placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none md:text-base"
            />
          </div>
          <div className="flex items-center gap-4">
            <label htmlFor="message" className="w-[30%] hidden lg:block text-sm font-semibold md:w-1/4 md:text-base font-Montserrat text-info shrink-0">Message :</label>
            <textarea
              id="message"
              type="text"
              name="message"
              value={formData.message || ""}
              onChange={handleChange}
              required
              rows={2}
              placeholder="Message :"
              className="w-full p-2 text-sm bg-white border rounded-full outline-none md:px-4 md:py-3 text-black border-stroke placeholder:opacity-100 lg:placeholder:opacity-0 placeholder:text-info placeholder:font-medium placeholder:text-sm focus:border-secondary focus-visible:shadow-none md:text-base"
            />
          </div>
          <input
            type="text"
            name="_gotcha"
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
          />
          <div className="w-full text-center pt-3.5">
            <button
              role="button"
              type="submit"
              className={`w-max px-8 rounded-full py-2 text-base font-semibold text-white bg-gradient-to-r from-[#FF7F00] via-[#FF3E9D] to-[#0051FF] transition-opacity md:text-xl bg-info hover:opacity-90 disabled:cursor-not-allowed disabled:bg-opacity-80 capitalize font-Montserrat ${status ? "cursor-not-allowed" : ""}`}
            >
              {status ? <Loader /> : "submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
