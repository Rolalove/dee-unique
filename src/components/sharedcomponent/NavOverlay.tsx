import { TfiClose } from "react-icons/tfi";
import { useRouter } from "next/navigation";
interface NavOverlayProps {
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  subnavs: { name: string; href: string }[];
}

export const NavOverlay = ({
  onClose,
  description,
  subnavs,
}: NavOverlayProps) => {
  const router = useRouter();
  return (
    <div className="fixed bg-white inset-0 z-50 flex h-screen w-full">
      <div
        className="hidden lg:block w-[60%] relative
         bg-[url(/StudentsTogether.png)] bg-cover bg-center opacity-30"
        aria-hidden="true"
      >
        <div className="absolute inset-0  bg-[#264B224D] " />
        <div className="relative z-10 p-10 text-white text-3xl font-semibold">
          <h2 className="text-[#264B22] font-semibold text-[40px] text-center">
            {description}
          </h2>
        </div>
      </div>
      <div className="w-full lg:w-[40%] px-6 py-6  lg:px-20 lg:py-10  ">
        <div className="flex justify-end">
          <button onClick={onClose} className="cursor-pointer ">
            <TfiClose size={24} />
          </button>
        </div>

        <div className="bg-white flex flex-col gap-8 mt-10">
          {subnavs.map((subnavs, index) => (
            <ul key={index} className="">
              <button
                onClick={() => {
                  router.push(subnavs.href);
                  onClose();
                }}
                className="text-xl text-left font-medium text-[#1E1E1E] cursor-pointer"
              >
                {subnavs.name}
              </button>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
