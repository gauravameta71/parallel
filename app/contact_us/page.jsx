"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    company: "",
    businessEmail: "",
    country: "",
    inquiryDetails: "",
    keepUpdated: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-white">
      <div className="bg-gray-300 h-64 w-screen text-center p-8 ">
        <h1 className="text-black text-5xl text semibold mt-32">CONTACT US</h1>
      </div>
      {/*  */}
      <div className="max-w-6xl mx-auto mt-20 pb-3 bg-white text-black">
        <h2 className="text-2xl font-semibold mb-4">
          *** field are required fields
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300  px-3 py-2"
              />
              <span className="text-sm">First</span>
            </div>
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                <br />
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300  px-3 py-2"
              />
              <span className="text-sm">Last</span>
            </div>
            <div>
              <label htmlFor="company" className="block font-semibold mb-2">
                Title*
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-[203%] border border-gray-300  px-3 py-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block font-semibold mb-2">
              Company*
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full border border-gray-300  px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="businessEmail" className="block font-semibold mb-2">
              Business Email*
            </label>
            <input
              type="email"
              id="businessEmail"
              name="businessEmail"
              value={formData.businessEmail}
              onChange={handleChange}
              required
              className="w-full border border-gray-300  px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block font-semibold mb-2">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-300  px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="inquiryDetails"
              className="block font-semibold mb-2"
            >
              Inquiry Details
            </label>
            <textarea
              id="inquiryDetails"
              name="inquiryDetails"
              value={formData.inquiryDetails}
              onChange={handleChange}
              rows="4"
              placeholder="(please add any additional information to assist us with your inquiry)"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="keepUpdated"
              className="inline-flex items-center font-semibold mb-2"
            >
              <input
                type="checkbox"
                id="keepUpdated"
                name="keepUpdated"
                checked={formData.keepUpdated}
                onChange={handleChange}
                className="form-checkbox mr-2"
              />
              Keep me updated with the latest news*
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="securityCode" className="block font-semibold mb-2">
              Security
            </label>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-500 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
