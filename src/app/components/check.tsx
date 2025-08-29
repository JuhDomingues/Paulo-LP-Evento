import Image from "next/image";

import GreenCheck from '@/images/Symbol.svg';

export default function CheckCard({ text }: { text: string }) {
  return (
    <div className="flex items-center lg:mb-2 sm:mb-9 px-4 sm:px-6 py-4 sm:py-[30px] justify-around border border-[#8EF27E] bg-[rgba(255,255,255,0.05)] mx-4 sm:mx-6 rounded-md sm:rounded-[5px_22px_5px_22px] xl:w-[30vw]">
      <Image src={GreenCheck} alt="aux image" className="animate-pulse w-6 h-6 sm:w-auto sm:h-auto mr-4" />
      <p className="sora font-light text-white text-[1rem] md:text-2xl lg:text-[1rem] xl:text-[1.25rem]">{text}</p>
    </div>
  );
};
