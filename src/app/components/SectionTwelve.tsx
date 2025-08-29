'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import PauloPhoto from '@/images/paulo-autoridade-instagram-_1_2.png';
import GreenCheck from '@/images/Symbol.svg';

export default function SectionTwelve() {
    const handleClick = () => {
        window.location.href = 'https://payfast.greenn.com.br/redirect/194682';
    };

    return (
        <div className='px-6 md:px-12 xl:px-8'>
            {/* Texto de transição */}
            <motion.div
                className="mb-8 lg:mb-12 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-[#8EF27E] text-xl md:text-2xl lg:text-3xl font-bold animate-pulse">
                    Se respondeu sim, esse evento é para você.
                </p>
            </motion.div>

            <motion.div
                className="mb-12 lg:mb-16 xl:mb-24 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-white text-lg sm:text-2xl lg:text-3xl font-bold leading-tight lg:mx-20 mx-6  mt-5">
                    No Evento Posicionamento de Autoridade, você terá 4 horas de imersão prática <br className='hidden lg:block'/>para transformar a forma como o mercado te enxerga.
                </h1>
                <p className="text-[#8EF27E] text-2xl lg:text-3xl font-light mt-10 animate-pulse lg:mt-4">
                    Você vai aprender:
                </p>
            </motion.div>

            <motion.div
                className="flex flex-col lg:flex-row items-center justify-center mb-12 lg:mb-[80px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-lg text-center lg:text-left lg:mr-[12%]">
                    <motion.h1
                        className="text-white text-xl sm:text-2xl lg:text-3xl font-bold"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        O que você vai aprender no evento:
                    </motion.h1>

                    <motion.div
                        className="space-y-4 mt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        {[
                            "O Efeito Halo e como sua imagem decide se o cliente confia em você em segundos.",
                            "As 3 Forças da Autoridade: Posicionamento, Exclusividade e Diferenciação.",
                            "Como transformar seu perfil no Instagram na maior vitrine de validação profissional do mundo.",
                            "Casos reais de profissionais que multiplicaram faturamento aplicando esse método.",
                            "Participação especial de Jessica Collet, mostrando como sua presença acelera sua autoridade."
                        ].map((text, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <Image className="w-4 h-4 mt-1" src={GreenCheck} alt="check" />
                                <p className="text-white text-sm sm:text-base lg:text-lg font-light leading-relaxed">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                    <motion.button
                        onClick={handleClick}
                        className="w-full h-[60px] bg-white text-[#0B3E18] text-lg lg:text-xl font-extrabold mt-6 rounded-lg shadow-md"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        QUERO GARANTIR MINHA VAGA
                    </motion.button>

                    <div className="flex flex-col items-center mt-4">
                        <motion.p
                            className="text-white text-sm lg:text-lg font-light text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 1 }}
                        >
                            Toque no botão acima e garanta sua vaga!
                        </motion.p>
                        <div className="flex items-center gap-2 mt-4">
                            <motion.p
                                className="text-white text-sm lg:text-base font-light"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 1 }}
                            >
                                Compra segura
                            </motion.p>
                        </div>
                    </div>
                </div>

                <div className='block lg:hidden'>
                    <h1 className="text-white text-xl sm:text-2xl md:text-3xl text-center font-bold leading-tight lg:leading-[48px] tracking-[-1px] mb-6 lg:mb-12 mt-12">
                        Evento Posicionamento de Autoridade
                    </h1>
                </div>

                <div className="relative flex justify-center">
                    <Image
                        src={PauloPhoto}
                        alt="Paulo"
                        className="w-[220px] lg:w-[400px] mt-7 lg:mt-0"
                    />
                </div>

            </motion.div>
        </div>
    );
}
