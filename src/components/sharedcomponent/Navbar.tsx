"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { NavOverlay } from "./NavOverlay";
import { LuMenu } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";

const navs = [
  {
    name: "Admission",
    href: "/admission",
    description: "Admission ",
    subnavs: [
      {
        name: "Apply to Dee Unique Nursery & Primary (Abesan, Lagos)",
        href: "/admission/nursery-primary-abesan",
      },
      {
        name: "Apply to Dee Unique Day Secondary School (Abesan, Lagos State)",
        href: "/admission/day-secondary-abesan",
      },
      {
        name: "Apply to Dee Unique Day & Boarding Secondary School (Illisan, Ogun State)",
        href: "/admission/day-boarding-secondary-illisan",
      },
    ],
  },
  {
    name: "About Us",
    href: "/aboutus",
    description: "About Dee Unique",
    subnavs: [
      { name: "Welcome to Dee Unique", href: "/aboutus/Welcome" },
      { name: "Academic Calendar", href: "/aboutus/Academiccalendar" },
      { name: "Virtual Tour", href: "/aboutus/Virtualtour" },
      {
        name: "Departments and Staff Directory",
        href: "/aboutus/Departments",
      },
    ],
  },
  {
    name: "Alumni",
    href: "/Alumni",
    description: "Alumni Dee Unique",
    subnavs: [
      { name: "Alumni Association", href: "/alumini/alumini-association" },
      { name: "Alumni Event", href: "/alumini/alumini-event" },
    ],
  },
  {
    name: "The Latest",
    href: "/thelatest",
    description: "The Latest on Dee Unique",
    subnavs: [{ name: "Dee Unique News", href: "/thelatest/news" }],
  },
];
export const Navbar = ({ href }: { href: string }) => {
  const pathname = usePathname();
  const [Open, setOpen] = useState(false);
  const isActive = pathname === href;
  const [activeOverlay, setActiveOverlay] = useState(null);
  return (
    <header className="card">
      <div className="w-full px-6 lg:px-10  lg:mx-auto">
        <nav className="flex justify-between items-center py-3 text-xl font-medium">
          <Link href="/">
            <Image
              src="/DeeUnique-Logo.svg"
              width={106}
              height={70}
              alt="Dee Unique Logo"
            />
          </Link>

          <ul className="hidden lg:flex lg:gap-x-10">
            {navs.map((nav, index) => {
              const isActive = pathname === nav.href;
              return (
                <li key={index}>
                  <button
                    onClick={() => setActiveOverlay(nav)}
                    className={
                      isActive
                        ? "underline decoration-[#FFFE0D]"
                        : "cursor-pointer"
                    }
                  >
                    {nav.name}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex lg:gap-x-[18px] lg:items-center">
            <a
              className="text-[#264B22] border border-[#264B22] px-3 py-2 rounded-xl"
              href="#"
              rel="noopener noreferrer"
            >
              School Portal
            </a>
            <Link
              className="bg-[#264B22] text-[#FFFFFF] px-3 py-2 rounded-xl"
              href="/contactus"
            >
              Contact Us
            </Link>
          </div>
          <button className="lg:hidden" onClick={() => setOpen(!Open)}>
            {Open ? <AiOutlineClose size={40} /> : <LuMenu size={40} />}
          </button>

          {Open && (
            <div className="lg:hidden absolute top-20 left-0 w-full h-screen  bg-white shadow-lg z-50">
              <ul className="flex flex-col items-center gap-y-12 text-center p-6">
                {navs.map((nav, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setActiveOverlay(nav);
                        setOpen(false); // optionally close menu after selection
                      }}
                      className="w-full text-left text-lg font-medium"
                    >
                      {nav.name}
                    </button>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    className="text-[#264B22]  border border-[#264B22] px-3 py-2 rounded-xl block text-center"
                  >
                    School Portal
                  </a>
                </li>
                <li>
                  <Link
                    href="/contactus"
                    className="bg-[#264B22] text-[#FFFFFF] px-3 py-2 rounded-xl block text-center"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>

      {activeOverlay && (
        <NavOverlay
          title={activeOverlay.name}
          description={activeOverlay.description}
          subnavs={activeOverlay.subnavs}
          onClose={() => setActiveOverlay(null)}
          image={""}
        />
      )}
    </header>
  );
};
