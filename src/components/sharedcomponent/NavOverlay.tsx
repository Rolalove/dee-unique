import { TfiClose } from "react-icons/tfi";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

interface NavOverlayProps {
  onClose: () => void;
  onBack?: () => void;
  title: string;
  description: string;
  image: string;
  subnavs: { name: string; href: string }[];
  isMobile?: boolean;
}

export const NavOverlay = ({
  onClose,
  onBack,
  description,
  subnavs,
  isMobile = false,
}: NavOverlayProps) => {
  return (
    <div className={`fixed inset-0 z-50 flex h-screen w-full bg-white`}>
      <div
        className={`flex ${isMobile ? "flex-col h-full" : "min-h-full w-full"}`}
      >
        {/* Mobile: Show main nav bar at top */}
        {isMobile && (
          <div className="w-full px-6 lg:px-10 lg:mx-auto bg-white shadow-sm">
            <nav className="flex justify-between items-center py-3 text-xl font-medium">
              <Link href="/">
                <Image
                  src="/DeeUnique-Logo.svg"
                  width={106}
                  height={70}
                  alt="Dee Unique Logo"
                />
              </Link>
              <button onClick={onClose} className="cursor-pointer">
                <TfiClose size={40} />
              </button>
            </nav>
          </div>
        )}

        {/* Desktop background section */}
        {!isMobile && (
          <div className="hidden lg:block w-[60%] relative" aria-hidden="true">
            {/* Background image with opacity */}
            <div
              className="absolute inset-0 bg-[url(/StudentsTogether.webp)] bg-cover bg-center opacity-30"
              aria-hidden="true"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#264B224D]" />
            {/* Content - this will be fully opaque */}
            <div className="relative z-10 p-10 mt-10 text-white text-3xl font-semibold flex flex-col items-center">
              <h2 className="text-[#264B22] font-semibold text-[40px] text-center">
                {description}
              </h2>
              <Image
                src="/Vector.svg"
                width={429}
                height={26}
                alt="Vector"
                priority
                className="mt-4"
              />
            </div>
          </div>
        )}

        <div
          className={`${
            isMobile ? "w-full flex-1" : "w-full lg:w-[40%]"
          } px-6 py-6 lg:px-20 lg:py-10`}
        >
          {/* Mobile: Show back arrow right under main nav */}
          {isMobile && onBack && (
            <div className="flex justify-end mb-8">
              <button
                onClick={onBack}
                className="cursor-pointer hover:text-[#264B22] transition-colors"
              >
                <IoArrowBack size={24} />
              </button>
            </div>
          )}

          {/* Desktop: Show close button */}
          {!isMobile && (
            <div className="flex justify-end mb-8">
              <button
                onClick={onClose}
                className="cursor-pointer hover:text-[#264B22] transition-colors"
              >
                <TfiClose size={40} />
              </button>
            </div>
          )}

          <div className="bg-white flex flex-col gap-8">
            {subnavs.map((subnav, index) => (
              <div key={index}>
                <Link
                  href={subnav.href}
                  onClick={() => {
                    onClose();
                  }}
                  className="text-xl text-left font-medium text-[#1E1E1E] cursor-pointer block hover:text-[#264B22] transition-colors"
                >
                  {subnav.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
