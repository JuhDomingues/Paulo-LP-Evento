import Image from "next/image";

interface Card {
  title: string;
  desc: string;
  img: string;
}

export default function Card({title, desc, img}: Card) {
  return (
  <div className="lg:w-[372px] w-[90%] min-h-[230px] bg-white rounded-3xl mx-5">
    <div className="pt-6">
      <Image src={img} alt="aux image" className="ml-5 rounded-2xl bg-[#E1E1E182] p-1 animate-pulse"></Image>
    </div>
    <div className="px-5 my-2">
      <h1 className="poppins font-semibold text-[1.375rem]">{title}</h1>
      <p className="poppins text-[1rem] pb-5">{desc}</p>
    </div>
  </div>
  )
};