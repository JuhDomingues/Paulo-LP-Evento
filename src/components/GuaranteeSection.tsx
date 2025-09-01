import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-primary-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Guarantee */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-glow mb-16">
            <div className="flex items-start gap-6">
              <Shield className="w-16 h-16 text-highlight flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Garantia de 100% de Satisfação</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  👉 Se até o final do evento você sentir que não aprendeu nada que possa aplicar para 
                  se posicionar como autoridade e atrair clientes, basta nos chamar que devolvemos 100% 
                  do seu investimento.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="text-foreground font-semibold">Você não corre risco nenhum em participar.</p>
                  <p className="text-highlight font-bold">O único risco é ficar de fora e perder sua vaga agora.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Você já provou seu valor.
              </h2>
              <p className="text-xl text-muted-foreground">
                Agora é hora de consolidar sua posição e se tornar a única escolha óbvia no seu mercado.
              </p>
              <p className="text-lg text-highlight font-semibold">
                Clique abaixo e garante sua vaga antes que as 30 vagas se esgotem.
              </p>
            </div>
            
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full sm:w-auto text-sm sm:text-lg font-bold group px-4 sm:px-12"
              onClick={() => document.getElementById('ingressos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-center leading-tight">
                <span className="hidden sm:inline">QUERO MINHA VAGA NO POSICIONAMENTO DE AUTORIDADE</span>
                <span className="sm:hidden">QUERO MINHA VAGA AGORA</span>
              </span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
};