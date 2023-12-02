import React from "react";
import SectionTitle from "./component/SectionTitle";

import { FaEnvelope } from "react-icons/fa";

const ContactMain = () => {
  return (
    <>
      <div className="container mx-auto w-1/3">
        <SectionTitle subTitle="Get In Touch" mainTitle="Contact Me" />
        <div className="border border-slate-700 rounded-3xl p-4 flex gap-6 ">
          <div className="flex gap-3">
            <div className="text-xl">
              <FaEnvelope />
            </div>
            <a
              href="#"
              className="leading-none text-lg font-regular font-poppins"
            >
              Examples@email.com
            </a>
          </div>
          <div className="flex gap-3">
            <div className="text-xl">
              <FaEnvelope />
            </div>
            <a
              href="https://www.linkedin.com/in/mdabdullahyusha/"
              className="leading-none text-lg font-regular font-poppins"
            >
              Linkedin-in
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMain;
