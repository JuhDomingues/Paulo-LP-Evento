import Image from "next/image";
import Cast from '@/images/paulo-autoridade-instagram-_7_.png';

export default function Footer() {
    return (
        <footer className="bg-[rgba(217,217,217,0.06)] flex flex-col justify-center items-center pt-12">
          <Image src={Cast} alt="" className="mb-12 lg:w-[12%] w-[40%] rounded-[100%] shadow-xl"></Image>
          <p className="text-[1rem] font-semibold leading-[1rem] text-center text-white sans mb-8">Copyright ©2024 Paulo André</p>
          <p className="manrope text-[#53ff79] text-[1rem] font-normal leading-[1.5rem] text-center mb-8">Todos os direitos reservados.</p>
          <p className="text-[rgba(191,255,181,0.5)] text-[0.5625rem] font-medium leading-[0.84375rem] text-center sans mb-12 animate-pulse">Desenvolvido por @Mariafernanda</p>
        </footer>
    )
}