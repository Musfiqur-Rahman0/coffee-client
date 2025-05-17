import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { TbHeartX } from "react-icons/tb";
import logo from "../assets/more/logo1.png";

const socialIcons = [
  { icon: FaFacebookF, color: "#3C2415" },
  { icon: FaTwitter, color: "#3C2415" },
  { icon: FaInstagram, color: "#3C2415" },
  { icon: FaLinkedinIn, color: "#3C2415" },
];

const contactInfo = [
  {
    icon: MdEmail,
    label: "Email",
    value: "info@example.com",
  },
  {
    icon: MdPhone,
    label: "Phone",
    value: "+1 (234) 567-8901",
  },
  {
    icon: MdLocationOn,
    label: "Location",
    value: "123 Main St, Springfield, USA",
  },
];

const Footer = () => {
  return (
    <div className="w-full h-full pt-26 pb-20">
      <div className="max-w-7xl mx-auto  z-10 grid grid-cols-2 gap-5 items-center justify-center">
        <div className="space-y-8 w-full">
          <img src={logo} alt="" height={60} width={60} />
          <h2 className="font-secondary text-3xl font-semibold text-title">
            Espresso Emporium
          </h2>
          <p>
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex items-center gap-3">
            {socialIcons.map((icon, index) => {
              const Icon = icon.icon;
              return (
                <div key={index}>
                  <Icon
                    size={26}
                    style={{
                      color: icon.color,
                      cursor: "pointer",
                    }}
                  />
                </div>
              );
            })}
          </div>
          <h4 className="text-2xl font-bold font-secondary">Get in Touch</h4>
          <div className="space-y-4">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              const { value, label } = contact;

              return (
                <div key={index} className="flex items-center gap-6">
                  <Icon size={25} className="text-title" />
                  <span className="">{value}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full space-y-8">
          <h2 className="font-secondary text-3xl text-title font-bold">
            Contact with us
          </h2>
          <form className="space-y-4 ">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full text-lg bg-white px-3 py-5 rounded-lg outline-title"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Gmail"
              className="w-full text-lg bg-white px-3 py-5 rounded-lg outline-title"
            />
            <textarea
              type="text"
              name="name"
              placeholder="Your Message"
              className="w-full text-lg bg-white px-3 py-5 rounded-lg outline-title"
            />
            <input
              type="submit"
              value="Send Message"
              className="px-4 py-2 rounded-full border border-title cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
