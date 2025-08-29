'use client'
import FAQItem from "./FAQ"

export default function Questions() {
  const handleClick = () => {
          window.location.href = 'https://payfast.greenn.com.br/redirect/194682';
        };
    return (
    <div className="mt-[120px] flex flex-col items-center mb-[100px]">
        <h1 className="title font-bold leading-[4.5625rem] tracking-[-0.1094rem] lg:text-left sans text-center text-white mb-[80px]"> <strong className="text-[#8EF27E] animate-pulse">PERGUNTAS</strong> FREQUENTES</h1>
        <FAQItem question="Como o método dos 12 passos pode me ajudar?" answer="O método dos 12 passos para se tornar uma autoridade máxima no Instagram oferece um plano estruturado para transformar sua presença online. Ele foi criado para ajudar você a construir uma audiência engajada, melhorar seu conteúdo, fortalecer sua marca pessoal e, principalmente, se destacar como uma referência em seu nicho. Ao seguir os passos, você aprenderá a otimizar seu perfil, criar estratégias eficazes de engajamento e aumentar sua visibilidade, alcançando mais seguidores e construindo uma autoridade sólida."></FAQItem>
        <FAQItem question="Preciso de experiência prévia para aplicar o método?" answer="Não! O método dos 12 passos é acessível para iniciantes e profissionais que já estão no Instagram. Não é necessário ter experiência prévia, apenas disposição para aprender e aplicar as etapas de forma prática. Se você é novo na plataforma ou já tem alguma experiência, os passos ajudarão a otimizar suas ações e a alcançar resultados mais rápidos e consistentes."></FAQItem>
        <FAQItem question="O método é aplicável a todos os nichos ou funciona apenas para alguns?" answer="O método dos 12 passos foi desenvolvido para ser aplicável a qualquer nicho! Seja você um influenciador, empresário, criador de conteúdo ou especialista em alguma área, os passos podem ser adaptados para diferentes segmentos. O que realmente importa é a forma como você adapta o conteúdo, sua abordagem e interage com seu público. Não importa qual seja o seu nicho, os passos são projetados para ajudá-lo a construir autoridade em qualquer área de atuação no Instagram."></FAQItem>
        {/*<FAQItem question="Existe algum suporte disponível caso eu precise de ajuda durante a aplicação do método?" answer=""></FAQItem>*/}
        <button onClick={() => handleClick()} className="font-extrabold manrope text-center text-lg text-[#060606] button bg-[#8EF27E] rounded-[2px_2px_10px_2px] lg:w-[364px] w-[64%] h-[56px] my-12">
          QUERO DESCOBRIR
        </button>
      </div>
    )
}