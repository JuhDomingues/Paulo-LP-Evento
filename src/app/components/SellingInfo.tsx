'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import GreenCheck from '@/images/Symbol.svg';
import Pix from '@/images/pix.svg';
import PauloBlack from '@/images/bio.jpeg'

export default function SellingInfo() {
    const handleClick = () => {
        window.location.href = 'https://payfast.greenn.com.br/116629/offer/gJhwlg';
    };

    return (
        <div className="container mx-auto px-4">
            {/* Seção Título Principal */}
            <div className="mb-8 md:mb-12 lg:mb-16">
                <motion.h1
                    className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center text-white mb-6 mx-2"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    🎟️ Ingresso Normal: R$147 <br className="hidden lg:block"/>(Somente para as 30 primeiras vagas)
                    <br/><br/>🎟️ Ingresso VIP: R$197 <br className="hidden lg:block"/>(Inclui um almoço premium de networking)
                </motion.h1>
            </div>

            {/* Card de Vendas */}
            <motion.div
                className="flex justify-center mb-12 md:mb-20 lg:mb-24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="w-full lg:w-11/12 xl:w-10/12 bg-[rgba(226,246,227,0.06)] py-6 md:py-10 flex flex-col lg:flex-row items-center justify-between rounded-2xl lg:rounded-[55px] border border-[#8EF27E] px-4 md:px-8 space-y-6 lg:space-y-0">
                    {/* Texto e Lista */}
                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-normal text-white mb-4">
                            Você já provou seu valor. <br className="hidden lg:block"/> 
                            <strong className="text-[#8EF27E] animate-pulse">Agora é hora de consolidar</strong> sua posição<br className="hidden sm:block"/> 
                            e se tornar a única escolha <br className="hidden sm:block"/>
                            óbvia no seu mercado!
                        </h1>
                        <motion.h2
                            className="text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            ⚠️ Importante: os valores acima são exclusivos para as primeiras 30 vagas. Após o preenchimento, os valores subirão automaticamente.
                        </motion.h2>
                        <div className="space-y-3 md:space-y-4">
                            {[
                                "4 horas de imersão prática para transformar como o mercado te enxerga",
                                "Teste Exclusivo de Nível de Autoridade com diagnóstico personalizado",
                                "Networking com outros profissionais de alto nível",
                                "Participação especial de Jessica Collet com técnicas de imagem"
                            ].map((text, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-2"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + 0.3 * index, duration: 1 }}
                                >
                                    <Image className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0 animate-pulse" src={GreenCheck} alt="" />
                                    <p className="text-sm sm:text-base md:text-lg text-white text-start">
                                        {text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Preço e Botão */}
                    <motion.div
                        className="lg:w-1/2 flex flex-col items-center justify-center w-full mt-6 lg:mt-0"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        <div className="text-center space-y-4 w-full">
                            <motion.p
                                className="text-lg md:text-xl text-white"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 1 }}
                            >
                                GARANTE SUA VAGA ANTES QUE AS <span>30 VAGAS SE ESGOTEM</span>
                            </motion.p>
                            <motion.h1
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 1 }}
                            >
                                CLIQUE ABAIXO E<br />
                                <strong className="text-[#8EF27E] animate-pulse">GARANTA SUA VAGA</strong>
                            </motion.h1>
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-center items-center">
                                    <Image src={Pix} alt="" className="w-4 md:w-5 mr-2" />
                                    <p className="text-white text-sm md:text-base">Ingresso Normal - R$147</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <Image src={Pix} alt="" className="w-4 md:w-5 mr-2" />
                                    <p className="text-white text-sm md:text-base">Ingresso VIP - R$197</p>
                                </div>
                            </div>
                        </div>
                        <motion.button
                            onClick={handleClick}
                            className="mt-6 md:mt-8 py-3 px-6 w-full max-w-xs sm:max-w-sm md:max-w-md bg-[#8EF27E] text-black font-bold rounded-lg hover:scale-105 transition-transform duration-300 text-sm md:text-base"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            QUERO GARANTIR MINHA VAGA AGORA
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Seção Paulo Collet */}
            <motion.div
                className="mb-12 md:mb-20 lg:mb-24"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">
                    Quem é Paulo Collet?
                </h1>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
                    >
                        <Image
                            src={PauloBlack}
                            alt="Paulo André Collet"
                            className="w-full h-auto rounded-lg"
                            layout="responsive"
                        />
                    </motion.div>
                    <div className="lg:w-1/2 space-y-4 md:space-y-6">
                        <motion.h1
                            className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center md:text-left"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            Mentor de carreira com 17 anos de experiência.
                        </motion.h1>
                        <motion.p
                            className="text-sm md:text-base lg:text-lg text-white font-light text-justify leading-relaxed"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                            Já ajudou advogados, médicos, engenheiros, empresários e consultores a multiplicarem de 2 a 10x seu faturamento.
                            <br/><br/>
                            Criador do método Autoridade Máxima, que une posicionamento estratégico, imagem e diferenciação para transformar profissionais em referência no seu segmento.    
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}