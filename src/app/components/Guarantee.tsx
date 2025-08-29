'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import GuaranteeIMG from '@/images/paulo-autoridade-instagram-_4_.png';

export default function Guarantee() {
    return (
        <div>
            <div className="hidden lg:flex flex-row justify-center items-center my-20">
                <motion.div
                    initial={{ opacity: 0, rotateY: -180 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                    className="lg:mr-[8%]"
                >
                    <Image src={GuaranteeIMG} alt="" className="w-[72%]" />
                </motion.div>

                <div className="flex flex-col lg:justify-start justify-center">
                    <h1 className="title font-bold leading-[4.5625rem] tracking-[-0.1094rem] lg:text-left sans text-white mb-12 text-center">
                        7 DIAS DE GARANTIA
                    </h1>
                    <p className="sora lg:text-[1.25rem] font-light tracking-[-0.0375rem] lg:text-left text-center text-white lg:mb-0 mb-12">
                        👉 Se até o final do evento você sentir que não aprendeu nada que possa aplicar para se posicionar como autoridade e atrair clientes, basta nos chamar que devolvemos 100% do seu investimento.<br />
                        <br/>Você não corre risco nenhum em participar.<br />
                        O único risco é ficar de fora e perder sua vaga agora.
                    </p>
                </div>
            </div>


            <div className="lg:hidden flex flex-col justify-center items-center my-12">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                    className="title font-bold tracking-[-0.1094rem] lg:text-left sans text-white mb-12 text-center"
                >
                    7 DIAS DE GARANTIA
                </motion.h1>

                
                <Image src={GuaranteeIMG} alt="" className="w-[40%] mb-12" />

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                    className="sora lg:text-[1.25rem] font-light leading-[2rem] tracking-[-0.0375rem] lg:text-left text-center text-white lg:mb-0 mb-12"
                >
                    👉 Se até o final do evento você sentir que não aprendeu nada que possa aplicar para se posicionar como autoridade e atrair clientes, basta nos chamar que devolvemos 100% do seu investimento.<br />
                    <br/>Você não corre risco nenhum em participar.<br />
                    O único risco é ficar de fora e perder sua vaga agora.
                </motion.p>
            </div>
        </div>
    )
}
