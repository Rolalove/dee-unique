"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavOverlay } from "./NavOverlay";
import { LuMenu } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";

type SubNav = {
  name: string;
  href: string;
};

type NavItem = {
  name: string;
  href: string;
  description: string;
  subnavs: SubNav[];
};

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
      { name: "Welcome to Dee Unique", href: "/" }, // Changed to root
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

export const Navbar = () => {
  const pathname = usePathname();
  const [Open, setOpen] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<NavItem | null>(null);
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if a nav item is active
  const isNavActive = (nav: NavItem) => {
    // Special handling for About Us when on root page
    if (nav.name === "About Us" && pathname === "/") return true;

    // Check if current pathname matches the nav href exactly
    if (pathname === nav.href) return true;

    // Check if current pathname starts with the nav href (for subnavs)
    if (pathname.startsWith(nav.href + "/")) return true;

    // Check if current pathname matches any of the subnav hrefs
    return nav.subnavs.some((subnav) => pathname === subnav.href);
  };

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    setOpen(!Open);
    setShowMainMenu(!Open);
    setActiveOverlay(null);
  };

  // Handle nav item click
  const handleNavClick = (nav: NavItem) => {
    if (window.innerWidth < 1024) {
      // Mobile
      setActiveOverlay(nav);
      setShowMainMenu(false);
      setIsMobile(true);
    } else {
      // Desktop
      setActiveOverlay(nav);
      setIsMobile(false);
    }
  };

  // Handle back to main menu (mobile only)
  const handleBackToMainMenu = () => {
    setActiveOverlay(null);
    setShowMainMenu(true);
  };

  // Handle close overlay
  const handleCloseOverlay = () => {
    setActiveOverlay(null);
    setShowMainMenu(false);
    setOpen(false);
  };

  return (
    <header className="card relative">
      <div className="w-full px-6 lg:px-10 lg:mx-auto">
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
              const isActive = isNavActive(nav);
              return (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(nav)}
                    className={
                      isActive
                        ? "underline decoration-[#FFFE0D] decoration-3 underline-offset-8"
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
          <button className="lg:hidden" onClick={handleMobileMenuToggle}>
            {Open ? <AiOutlineClose size={40} /> : <LuMenu size={40} />}
          </button>

          {/* Mobile Main Menu */}
          {Open && showMainMenu && (
            <div className="lg:hidden fixed inset-0 top-20 w-full h-screen bg-white shadow-lg z-50">
              <ul className="flex flex-col items-center gap-y-12 text-center p-6 pt-12">
                {navs.map((nav, index) => {
                  const isActive = isNavActive(nav);
                  return (
                    <li key={index}>
                      <button
                        onClick={() => handleNavClick(nav)}
                        className={`w-full text-left text-lg font-medium ${
                          isActive
                            ? "underline decoration-[#FFFE0D] decoration-3 underline-offset-8"
                            : ""
                        }`}
                      >
                        {nav.name}
                      </button>
                    </li>
                  );
                })}
                <li>
                  <a
                    href="#"
                    className="text-[#264B22] border border-[#264B22] px-3 py-2 rounded-xl block text-center"
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
          onClose={handleCloseOverlay}
          onBack={isMobile ? handleBackToMainMenu : undefined}
          isMobile={isMobile}
          image={""}
        />
      )}
    </header>
  );
};
