import React from "react";
import Brand1 from "../assets/Brand1.png";
import Brand2 from "../assets/Brand2.png";
import Brand3 from "../assets/Brand3.png";
import Brand4 from "../assets/Brand4.png";
import Brand5 from "../assets/Brand5.png";
import Brand6 from "../assets/Brand6.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div
      className="f-wrapper paddings bg-black/80 text-white flex flex-col items-center relative"
      id="footer"
    >
      <div className="flex justify-center paddings flex-col sm:flex-row xl:flex brand-footer">
        <img src={Brand1} alt="" />
        <img src={Brand2} alt="" />
        <img src={Brand3} alt="" />
        <img src={Brand4} alt="" />
        <img src={Brand5} alt="" />
        <img src={Brand6} alt="" />
      </div>
      <div className="footer-line"></div>
      <div className="flex justify-between paddings mb-10 mt-10">
        <div className="f-container flexCenter text-2xl">
          <div className="flex flex-col gap-6">
            <h2>The Group</h2>
            <li>Group1</li>
          </div>
          <div className="flex flex-col gap-6">
            <h2>Work with us</h2>
            <li>career</li>
          </div>
          <div className="flex flex-col gap-6">
            <h2>Link</h2>
            <li>Contact Us </li>
          </div>
          <div className="flex flex-col gap-6">
            <h2>The Group</h2>
            <li>Group1</li>
          </div>

          <Link className="flex flex-col gap-6 back-to-top" to="header">
            <div className="f-top"></div>
            <li>Back to top</li>
          </Link>
        </div>
      </div>

      <div className="footer-line"></div>
      <div className="flex flex-col sm:flex-row justify-center gap-10 justify-between paddings mt-10">
        <div className="flex sm:gap-4 justify-center">
      <span>Lang</span>
      <span>Lang</span>
      <span>Lang</span>
        </div>
        <div className="cursor-pointer text-center sm:text-left gap-3">
          Cookie Policy
        </div>
        <div className="cursor-pointer text-center sm:text-left gap-3">
          Terms & Condition
        </div>
        <div className="cursor-pointer text-center sm:text-left gap-3">
          Privacy of Policy
        </div>
        <div className="cursor-pointer text-center sm:text-left gap-3">
        © 2023 Sera Summer. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
