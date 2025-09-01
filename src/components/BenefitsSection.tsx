import { CheckCircle, TestTube, Settings, Users, Sparkles } from "lucide-react";
import pauloImage from "@/assets/paulo.jpg";

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O que Você Vai Receber ao Garantir Sua Vaga:
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Benefits list */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-glow">
                <TestTube className="w-8 h-8 text-highlight flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Teste Exclusivo de Nível de Autoridade</h4>
                  <p className="text-muted-foreground">
                    descubra em que estágio você está hoje e quais passos precisa dar para evoluir.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-glow">
                <Settings className="w-8 h-8 text-cyan flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Ferramenta de Diagnóstico</h4>
                  <p className="text-muted-foreground">
                    Ferramenta prática de diagnóstico do seu posicionamento digital.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-glow">
                <Users className="w-8 h-8 text-highlight flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Networking Premium</h4>
                  <p className="text-muted-foreground">
                    Networking com outros profissionais de alto nível.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-glow">
                <Sparkles className="w-8 h-8 text-cyan flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Participação Especial</h4>
                  <p className="text-muted-foreground">
                    Jessica Collet, trazendo técnicas de imagem que aceleram o reconhecimento da sua autoridade.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src={pauloImage} 
                  alt="Paulo Collet - Mentor de Autoridade" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary/20"></div>
              </div>
            </div>
            
          </div>

          {/* Call to action message */}
          <div className="bg-gradient-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Você pode ser excelente no que faz… mas se não for reconhecido como autoridade, será esquecido.
            </h3>
            <p className="text-xl text-muted-foreground mb-4">
              O mercado não premia só quem é bom.
            </p>
            <p className="text-xl font-bold text-highlight">
              👉 Ele premia quem é mais visível, mais lembrado e mais reconhecido.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};