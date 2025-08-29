interface NumberProps {
    text: string;
    numbers: string;
  }
  
  export default function Number({ text, numbers }: NumberProps) {
    return (
      <div className="flex items-center mb-6 mr-3 pl-3 lg:py-[22px] xl:py-[30px] py-[16px] justify-around w-[90%] xl:w-[609px] lg:[560px] border border-[#8EF27E] bg-[rgba(255,255,255,0.05)] mx-6 rounded-[5px_22px_5px_22px]">
        <h1 className="animate-pulse text-[2rem] mr-4 lg:text-[2.2rem] xl:text-[3.625rem] font-bold leading-[69px] text-center text-[#8EF27E]">{numbers}</h1>
        <p className="manrope font-light text-white lg:text-[1rem] xl:text-[1.25rem] text-[0.75rem] lg:w-[390px] w-[460px] text-left lg:px-[3px]">{text}</p>
      </div>
    );
  }
  