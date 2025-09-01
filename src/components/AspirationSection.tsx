import { Target, Users, TrendingUp, Shield, Crown } from "lucide-react";
import digitalAuthority from "@/assets/digital-authority.jpg";

export const AspirationSection = () => {
  return (
    <section className="py-20 bg-gradient-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary/10"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Title */}
          <div className="text-center mb-16">
            <div className="inline-block bg-neon/20 border border-neon/40 rounded-full px-6 py-2 mb-6">
              <span className="text-neon font-bold">✨ ASPIRACIONAL</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O que Você Realmente Deseja
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O seu desafio hoje não é começar do zero. É consolidar e ampliar o que você já conquistou.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src={digitalAuthority} 
                  alt="Autoridade digital e crescimento" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary/20"></div>
              </div>
            </div>
            
            {/* Right - Benefits */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-8">Imagine:</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
                  <Crown className="w-8 h-8 text-neon flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Referência no seu segmento</h4>
                    <p className="text-muted-foreground">
                      Garantir que seu nome seja visto como referência no seu segmento.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
                  <Users className="w-8 h-8 text-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Clientes qualificados</h4>
                    <p className="text-muted-foreground">
                      Atrair clientes mais qualificados, dispostos a pagar o preço justo pelo seu trabalho.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
                  <TrendingUp className="w-8 h-8 text-neon flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Crescimento inteligente</h4>
                    <p className="text-muted-foreground">
                      Crescer sem precisar trabalhar dobrado.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Blindagem competitiva</h4>
                    <p className="text-muted-foreground">
                      Blindar-se contra concorrentes que disputam por preço.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm">
                  <Target className="w-8 h-8 text-neon flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Posição sólida</h4>
                    <p className="text-muted-foreground">
                      Construir uma posição sólida, para manter seu padrão de vida e continuar expandindo.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-cta/20 rounded-xl border border-cyan/30">
                <p className="text-lg font-bold text-foreground text-center">
                  👉 Você não precisa provar que é bom. Você já é.<br />
                  Agora é hora de ser lembrado, escolhido e valorizado como autoridade.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};