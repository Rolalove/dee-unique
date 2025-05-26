import React from "react";
import { navs } from "@/app/constants/navs";
import Image from "next/image";
import Link from "next/link";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className=" bg-[#264B22] py-10 text-[#FFFFFF]">
      <section className="flex flex-col gap-8 px-6 lg:gap-0 lg:flex-row lg:justify-evenly lg:px-10 mx-auto">
        <div className="flex flex-col gap-y-4">
          <Link href="/" className="flex justify-start items-center">
            <Image
              src="/DeeUnique-Logo.png"
              width={66}
              height={70}
              alt="Dee Unique Logo"
              className="bg-transparentc:\Users\Molly\Downloads\DeeUnique-Logo.png"
            ></Image>
            <span className="font-medium text-xs">
              Deeunique <br />
              International <br /> Schools
            </span>
          </Link>
          <div className="flex items-center gap-x-5">
            <AiFillTikTok size={20} color="#ffffff" />
            <FaFacebook size={20} color="#ffffff" />
            <FaInstagram size={20} color="#ffffff" />
          </div>
        </div>
        <div>
          <h3 className=" font-semibold text-xl ">Quick Links</h3>
          <ul className="flex flex-col gap-y-[18px] mt-[18px]">
            {navs.map((nav, index) => (
              <li key={index} className="">
                <Link className="font-medium text-base" href={nav.path}>
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Campuses */}
        <div className="space-y-[18px] ">
          <h3 className=" font-semibold text-xl ">Campuses</h3>
          <div className="max-w-[440px] text-base space-y-[18px] ">
            <p>
              Ipaja Campus - 7/9 Dee Unique Close, Abesan Estate, Ipaja, Lagos
              State.
            </p>
            <p>
              Ilisan Remo Campus - 1-5, Dee Unique Avenue, Off Irolu Road,
              Ilisan Remo, Ogun State.
            </p>
          </div>
        </div>
        {/* Contact Us */}
        <div className="space-y-[18px]">
          <h3 className=" font-semibold text-xl ">Contact Us</h3>
          <div className="flex justify-start items-start gap-x-3  ">
            <div className="mt-1">
              {" "}
              <FaPhone size={20} />
            </div>
            <div>
              <ul className="text-base space-y-1">
                <li>08023053006</li>
                <li> 08094132145</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-x-3 ">
            <div className="mt-1">
              <IoMail size={20} />
            </div>
            <div>
              <p className="text-base ">
                deeuniqueeducatio<br></br>nal@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
