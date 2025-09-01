import { Button } from "@/components/ui/button";
import { Crown, Users, Clock, CheckCircle } from "lucide-react";

export const PricingSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary/5"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-block bg-neon/20 border border-neon/40 rounded-full px-6 py-3 mb-6">
              <span className="text-neon font-bold text-xl">💎 INVESTIMENTO E CONDIÇÕES ESPECIAIS</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            
            {/* Ingresso Normal */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-glow relative">
              <div className="text-center mb-6">
                <Users className="w-12 h-12 text-neon mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">🎟️ Ingresso Normal</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold text-neon">R$147</span>
                </div>
                <div className="bg-destructive/20 border border-destructive/40 rounded-lg px-4 py-2">
                  <p className="text-sm text-destructive font-semibold">
                    Somente para as 30 primeiras vagas
                  </p>
                </div>
              </div>
              
              <Button variant="cta" size="lg" className="w-full">
                GARANTIR VAGA NORMAL
              </Button>
            </div>

            {/* Ingresso VIP */}
            <div className="bg-gradient-primary/20 rounded-2xl p-8 border-2 border-neon shadow-neon relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-neon text-background px-4 py-2 rounded-full text-sm font-bold">
                  MAIS POPULAR
                </div>
              </div>
              
              <div className="text-center mb-6">
                <Crown className="w-12 h-12 text-neon mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">🎟️ Ingresso VIP</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold text-neon">R$197</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-neon" />
                    <span>Almoço premium de networking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-neon" />
                    <span>Sessão exclusiva de perguntas e respostas</span>
                  </div>
                </div>
              </div>
              
              <Button variant="neon" size="lg" className="w-full">
                GARANTIR VAGA VIP
              </Button>
            </div>
            
          </div>

          {/* Warning message */}
          <div className="bg-destructive/20 border border-destructive/40 rounded-xl p-6 text-center mb-8">
            <Clock className="w-8 h-8 text-destructive mx-auto mb-4" />
            <p className="text-lg font-bold text-destructive mb-2">
              ⚠️ Importante: os valores acima são exclusivos para as primeiras 30 vagas.
            </p>
            <p className="text-muted-foreground">
              Após o preenchimento, os valores subirão automaticamente.
            </p>
          </div>

          <div className="text-center">
            <Button variant="hero" size="xl" className="text-xl font-bold">
              QUERO GARANTIR MINHA VAGA AGORA
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
};