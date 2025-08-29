'use client';

import { motion } from 'framer-motion';
import CheckCard from "./check";

export default function SectionCheck() {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-12 xl:mb-[80px] ">
            <motion.h1
                className="text-white title font-bold text-border lg:mx-20 mx-6"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                Você já tem clientes. Já construiu resultados.
            </motion.h1>
            <motion.h1
                className="text-white sm:text-xl md:text-2xl lg:text-[22px] xl:text-[1.750rem] mt-4 mb-3 lg:font-bold text-border lg:px-[12%] lg:mx-20 mx-6"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            > <strong>Já conquistou espaço físico, carteira de clientes e respeito no seu mercado.</strong>
            <br/><br/>Mas a cada dia percebe que: 
            <br/><br/>
            <span className="text-[#FF6B6B] font-semibold">❌ Concorrentes menos preparados estão ocupando espaço porque se posicionam melhor.</span>
            <br/><br/>
            <span className="text-[#FF6B6B] font-semibold">❌ A indicação sozinha não garante mais seu crescimento.</span>
            <br/><br/>
            <span className="text-[#8EF27E] font-semibold">✨ O digital se tornou a maior vitrine de validação profissional do mundo.</span>
            <br/><br/>
            <span className="text-[#FF6B6B] font-semibold">❌ E sem autoridade clara, até sua experiência pode ser ignorada.</span>
            <br/><br/>
            <strong className="text-[#FF6B6B] text-xl">👉 O resultado? <span className="text-[#8EF27E]">Eles vendem mais. Mesmo sabendo menos.</span></strong>
            
            </motion.h1>
            <div className="flex flex-col items-center lg:flex-row justify-center mt-12 lg:mt-[5vh] w-full max-w-[1200px]">
                <div className="flex flex-col items-center text-center lg:text-left xl:mr-0 mb-4 lg:mb-0 w-full lg:w-1/2">
                    <motion.p
                        className="sora text-white sm:text-xl md:text-2xl lg:text-[1.2rem] xl:text-[1.750rem] font-light leading-relaxed tracking-[-0.5px] mb-8 lg:mb-[6vh] max-w-[90%]"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#8EF27E] font-semibold">O seu desafio hoje não é começar do zero.</span>
                        <br />É consolidar e ampliar o que você já conquistou.
                        
                        <br /><br />
                        <span className="text-[#8EF27E] font-semibold text-lg">Imagine poder:</span>
                        
                        <br /><br />
                        ✓ <strong>Garantir que seu nome seja visto como referência</strong> no seu segmento
                        
                        <br /><br />
                        ✓ <strong>Atrair clientes mais qualificados</strong>, dispostos a pagar o preço justo pelo seu trabalho
                        
                        <br /><br />
                        ✓ <strong>Crescer sem precisar trabalhar dobrado</strong>
                        
                        <br /><br />
                        ✓ <strong>Blindar-se contra concorrentes</strong> que disputam por preço
                        
                        <br /><br />
                        ✓ <strong>Construir uma posição sólida</strong>, para manter seu padrão de vida e continuar expandindo
                    </motion.p>
                    <motion.p
                        className="sora text-white sm:text-xl md:text-2xl lg:text-[1.2rem] xl:text-[1.750rem] font-light leading-relaxed tracking-[-0.5px] max-w-[90%]"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#8EF27E] font-semibold text-lg">👉 Você não precisa provar que é bom.</span>
                        <br /><strong>Você já é.</strong>
                        
                        <br /><br />
                        Agora é hora de ser <span className="text-[#8EF27E]">lembrado, escolhido e valorizado</span> como autoridade.
                    </motion.p>
                </div>
                <div className="flex flex-col items-center w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.9 }}
                        className="w-full max-w-[500px]"
                    >
                        <CheckCard text="Já sentiu que sua experiência não é reconhecida como deveria?" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        className="w-full max-w-[500px] mt-4"
                    >
                        <CheckCard text="Já perdeu clientes para concorrentes menos preparados, mas mais visíveis?" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.9 }}
                        className="w-full max-w-[500px] mt-4"
                    >
                        <CheckCard text="Sente que depende demais da indicação e gostaria de mais previsibilidade?" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.9 }}
                        className="w-full max-w-[500px] mt-4"
                    >
                        <CheckCard text="Quer consolidar sua posição no mercado e ainda crescer com segurança?" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
