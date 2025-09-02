import { Button } from "@/components/ui/button";
import { Crown, Users, Clock, CheckCircle } from "lucide-react";

export const PricingSection = () => {
  return (
    <section id="ingressos" className="py-20 bg-secondary-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary/5"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-block bg-highlight/20 border border-highlight/40 rounded-full px-6 py-3 mb-6">
              <span className="text-highlight font-bold text-xl">💎 INVESTIMENTO E CONDIÇÕES ESPECIAIS</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            
            {/* Ingresso Normal */}
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-glow relative">
              <div className="text-center mb-6">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-highlight mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">🎟️ Ingresso Normal</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-highlight">R$149</span>
                </div>
                <div className="bg-highlight/20 border border-highlight/40 rounded-lg px-4 py-2">
                  <p className="text-sm text-highlight font-semibold">
                    Somente para as 30 primeiras vagas
                  </p>
                </div>
              </div>
              
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full"
                onClick={() => window.open('https://payfast.greenn.com.br/134014?batch=8583_RwiitI', '_blank')}
              >
                GARANTIR VAGA NORMAL
              </Button>
            </div>

            {/* Ingresso VIP */}
            <div className="bg-gradient-primary/20 rounded-2xl p-6 sm:p-8 border-2 border-highlight shadow-gold relative">
              <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-highlight text-background px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                  MAIS POPULAR
                </div>
              </div>
              
              <div className="text-center mb-6 mt-4 sm:mt-0">
                <Crown className="w-10 h-10 sm:w-12 sm:h-12 text-highlight mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">🎟️ Ingresso VIP</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-highlight">R$199</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-highlight" />
                    <span>Almoço premium de networking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-highlight" />
                    <span>Sessão exclusiva de perguntas e respostas</span>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full"
                onClick={() => window.open('https://payfast.greenn.com.br/134014?batch=8583_Xu3NJV', '_blank')}
              >
                GARANTIR VAGA VIP
              </Button>
            </div>
            
          </div>

          {/* Warning messages */}
          <div className="space-y-4 mb-8">
            <div className="bg-highlight/20 border border-highlight/40 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-highlight mx-auto mb-4" />
              <p className="text-lg font-bold text-highlight mb-2">
                ⚠️ Importante: os valores acima são exclusivos para as primeiras 30 vagas.
              </p>
              <p className="text-muted-foreground">
                Após o preenchimento, os valores subirão automaticamente.
              </p>
            </div>
            
            <div className="bg-accent-cyan/20 border border-accent-cyan/40 rounded-xl p-4 text-center">
              <p className="text-base font-semibold text-accent-cyan">
                Cada ingresso é INDIVIDUAL - não é permitido compartilhamento
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="text-xl font-bold"
              onClick={() => document.getElementById('ingressos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              QUERO GARANTIR MINHA VAGA AGORA
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
};