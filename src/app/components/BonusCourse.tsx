import Image from "next/image";
import Notebook from '@/images/paulo-autoridade-instagram-_2_.png';

export default function BonusCourse() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 md:px-12 xl:px-16 max-w-7xl mx-auto mb-8 lg:mb-[100px]">
            <div className="text-center lg:text-left lg:max-w-[40%]">
                <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight lg:leading-[48px] tracking-[-1px] mb-6 lg:mb-12">
                    O que Você Vai Receber ao Garantir Sua Vaga:
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed lg:leading-[28px] tracking-[-0.6px] text-white mx-6">
                    ✅ Teste Exclusivo de Nível de Autoridade – descubra em que estágio você está hoje e quais passos precisa dar para evoluir.
                    <br/><br/>✅ Ferramenta prática de diagnóstico do seu posicionamento digital.
                    <br/><br/>✅ Networking com outros profissionais de alto nível.
                    <br/><br/>✅ Participação especial de Jessica Collet, trazendo técnicas de imagem que aceleram o reconhecimento da sua autoridade.
                </p>
            </div>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex lg:justify-end justify-center">
                <Image
                    src={Notebook}
                    alt="Notebook"
                    className="w-[250px] lg:w-[320px] h-auto drop-shadow-xl"
                />
            </div>
        </div>
    );
}
