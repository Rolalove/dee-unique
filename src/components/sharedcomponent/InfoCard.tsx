import Image from "next/image";
interface InfoCardProps {
  title: string;
  images: string[];
  text: string;
  listItems: string[]; // optional list
}

const InfoCard = ({ title, images, text, listItems }: InfoCardProps) => {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] lg:mt-10 place-content-center place-items-center gap-8 lg:gap-0 px-4 lg:px-10
    "
    >
      {/* Text: now first column with 2fr */}
      <div className="space-y-[40px] max-w-[500px] order-2 lg:order-1 text-center lg:text-left">
        <h3 className="font-semibold text-left text-[28px] lg:text-[35px] text-[#1E1E1E]">
          {title}
        </h3>
        <p className="text-lg text-left lg:text-xl font-medium leading-relaxed">
          {text}
        </p>
        {listItems?.length > 0 && (
          <ul className="list-disc  space-y-4 text-left">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="text-base lg:text-lg flex items-start gap-6 "
              >
                <Image src="/Tick.svg" width={30} height={30} alt="Ticks" />
                <span> {item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Images: now second column with 3fr */}
      <div className="order-1 mt-6 lg:mt-0 lg:order-2">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-x-6">
          <div className="flex-shrink-0">
            <Image
              src={images[0]}
              width={300}
              height={505}
              quality={100}
              alt="Student together wearing sport wear"
              className="w-full h-[200px] lg:w-[300px] lg:h-[505px] object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-1 place-content-between gap-4">
            <Image
              src={images[1]}
              width={396}
              height={264}
              quality={100}
              alt="Student together wearing sport wear"
              className="w-full h-[120px] lg:w-full lg:h-[264px] object-cover rounded-lg"
            />
            <Image
              src={images[2]}
              width={396}
              height={223}
              quality={100}
              alt="Student together wearing sport wear"
              className="w-full h-[120px] lg:w-full lg:h-[223px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
