import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "Para quem é esse evento?",
      answer: "Este evento é para profissionais liberais, autônomos, empreendedores e empresários que desejam fortalecer sua imagem, se posicionar com autoridade e aumentar suas vendas através de estratégias de comunicação e branding pessoal."
    },
    {
      question: "Preciso já ter uma presença forte no Instagram ou nas redes sociais?",
      answer: "Não. O evento foi criado tanto para quem está começando a se posicionar quanto para quem já tem visibilidade, mas ainda não converte isso em reconhecimento e faturamento. O método se adapta ao seu nível atual."
    },
    {
      question: "Vai ser só teoria ou terá parte prática?",
      answer: "O evento é uma imersão com conteúdo estratégico e aplicação prática. Você vai sair com uma clareza real sobre como usar imagem, narrativa e posicionamento para gerar mais valor percebido e vendas."
    },
    {
      question: "Preciso ir bem vestido?",
      answer: "Sim. Recomendamos um look profissional ou sofisticado, pois teremos fotos e momentos de networking. Sua imagem comunica sua autoridade — e isso será parte da experiência."
    },
    {
      question: "Posso levar alguém comigo?",
      answer: "As vagas são limitadas e individuais. Se deseja levar um convidado, é necessário adquirir uma segunda inscrição (sujeito à disponibilidade)."
    },
    {
      question: "Onde será o evento e qual o horário?",
      answer: "O evento será realizado em um hotel de alto padrão. Após a inscrição, você receberá todos os detalhes por e-mail, incluindo local, horário de chegada e instruções."
    },
    {
      question: "Vai ter coffee break ou almoço incluso?",
      answer: "Sim. A experiência inclui coffee break e um ambiente cuidadosamente preparado para proporcionar networking e conforto durante o evento."
    },
    {
      question: "E se eu não puder comparecer?",
      answer: "A sua inscrição é pessoal e intransferível. Em caso de imprevisto, entre em contato com a nossa equipe com antecedência para possíveis soluções."
    },
    {
      question: "Existe algum tipo de suporte antes ou depois do evento?",
      answer: "Sim. Após o evento, você terá acesso a um canal de suporte para tirar dúvidas sobre os primeiros passos do seu posicionamento e sobre oportunidades de acompanhamento mais completo, se desejar."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-20 bg-primary-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              ❓ Perguntas Frequentes
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Tire suas dúvidas sobre o evento
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 sm:px-8 sm:py-6 text-left flex items-center justify-between hover:bg-card/70 transition-all duration-200"
                >
                  <h3 className="text-base sm:text-lg font-bold text-foreground pr-4">
                    {index + 1}. {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-highlight transition-transform duration-200 flex-shrink-0 ${
                      openQuestion === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 sm:px-8 sm:pb-6">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-primary/20 rounded-2xl p-6 sm:p-8 border border-primary/30">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudá-lo
              </p>
              <a
                href="https://wa.me/5549999940242"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                💬 Falar no WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};