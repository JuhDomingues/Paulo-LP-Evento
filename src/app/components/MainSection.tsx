'use client';

import Image from 'next/image';
import PauloImage from '@/images/paulo-autoridade-instagram-_1_2.png';

export default function MainSection() {
    const handleClick = () => {
        const element = document.getElementById('selling-info');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:mt-[8vh] mt-[5vh] px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto gap-6 lg:gap-12">
            <div className="lg:mt-[8vh] w-full lg:max-w-[50%] text-center lg:text-left">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.05vw]">
                    O mais conhecido vence o melhor… até que o melhor decida <strong className="text-[#8EF27E]">se tornar mais conhecido</strong>.
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl font-light leading-7 mt-4 lg:w-[90%]">
                    Participe do Evento Posicionamento de Autoridade e descubra como transformar sua experiência em autoridade incontestável, atrair os clientes certos e crescer com previsibilidade — mesmo em um mercado competitivo.
                </p>
                <p className="text-[#FF6B6B] text-base sm:text-lg md:text-xl font-bold leading-7 mt-4 lg:w-[90%]">
                    ⚠️ Atenção: os valores especiais deste evento são exclusivos para as 30 primeiras vagas.
                </p>


                <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-[100%]">
                    <button
                        onClick={handleClick}
                        className="w-full h-[7vh] button bg-white text-[#0B3E18] text-lg sm:text-xl md:text-2xl font-extrabold rounded-lg mt-6 lg:leading-7 shadow-lg"
                    >
                        QUERO MINHA VAGA AGORA
                    </button>
                    <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
                        <p className="mt-4 text-white font-light text-base sm:text-lg md:text-xl text-center">
                            Toque no botão acima, comece hoje.
                        </p>
                        <div className="flex items-center justify-center mt-4 space-x-2">
                            <div className="flex items-center justify-center">
                                <p className="text-white text-sm sm:text-base md:text-lg font-light">compra segura</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full lg:w-[50%]">
                <div className="relative w-[100%] sm:w-[90%] md:w-[80%] lg:w-[600px] xl:w-[700px] max-w-[900px] lg:mt-6 mt-16">
                    <Image
                        src={PauloImage}
                        alt="Paulo André Collet - Autoridade no Instagram"
                        className="w-full h-auto rounded-lg shadow-xl"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}