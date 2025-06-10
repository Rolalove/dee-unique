import Image from "next/image";
import { ReactNode } from "react";

type TopCardProps = {
  title: string;
  text: string;
  image: string;
  button?: ReactNode;
};

export const TopCard = ({ title, text, image, button }: TopCardProps) => {
  return (
    <section className="w-full mt-10 lg:mt-20 mb-20 flex flex-col-reverse lg:grid lg:grid-cols-2 items-stretch px-10 gap-x-8">
      <div className="flex flex-col mt-6 lg:mt-0 gap-8 w-full lg:flex-1 justify-center">
        <h2 className="text-[#264B22] text-center lg:text-start font-semibold text-[25px] lg:text-[35px]">
          {title}
        </h2>
        <p className="text-[#1E1E1E] text-center lg:text-start font-medium text-[20px]">
          {text}
        </p>
        {button && (
          <button className="bg-[#264B22] mx-auto lg:mx-0 w-fit text-white px-6 py-3 rounded text-xl font-medium">
            {button}
          </button>
        )}
      </div>

      <div className="relative w-full h-[250px] lg:h-auto lg:min-h-[412px]">
        <Image
          src={image}
          alt={title}
          quality={100}
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </section>
  );
};
