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
    <section className="w-full mt-20 mb-20 grid grid-cols-1 lg:grid-cols-2 px-10 gap-8">
      <div className="flex flex-col gap-8 w-full lg:flex-1 ">
        <h2 className="text-[#264B22] font-semibold text-[35px]">{title}</h2>
        <p className="text-[#1E1E1E] font-medium text-[20px]">{text}</p>
        {button && (
          <button className="bg-[#264B22] w-fit text-white px-6 py-3 rounded text-xl font-medium">
            {button}
          </button>
        )}
      </div>
      <div className="relative w-full min-h-[412px] ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain rounded-xl"
        />
      </div>
    </section>
  );
};
