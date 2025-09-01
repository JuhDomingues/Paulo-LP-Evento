import { Brain, Users, Instagram, BarChart3, Sparkles } from "lucide-react";

export const LearningSection = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              No Evento Posicionamento de Autoridade
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              você terá 4 horas de imersão prática para transformar a forma como o mercado te enxerga.
            </p>
            <h3 className="text-2xl font-bold text-neon">Você vai aprender:</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-glow hover:shadow-neon transition-all duration-300">
              <Brain className="w-12 h-12 text-neon mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-4">O Efeito Halo</h4>
              <p className="text-muted-foreground">
                Como sua imagem decide se o cliente confia em você em segundos.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-glow hover:shadow-neon transition-all duration-300">
              <Sparkles className="w-12 h-12 text-cyan mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-4">3 Forças da Autoridade</h4>
              <p className="text-muted-foreground">
                Posicionamento, Exclusividade e Diferenciação para se destacar.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-glow hover:shadow-neon transition-all duration-300">
              <Instagram className="w-12 h-12 text-neon mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-4">Instagram Estratégico</h4>
              <p className="text-muted-foreground">
                Como transformar seu perfil na maior vitrine de validação profissional do mundo.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-glow hover:shadow-neon transition-all duration-300 md:col-span-2 lg:col-span-1">
              <BarChart3 className="w-12 h-12 text-cyan mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-4">Casos Reais</h4>
              <p className="text-muted-foreground">
                Profissionais que multiplicaram faturamento aplicando esse método.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-glow hover:shadow-neon transition-all duration-300 md:col-span-2">
              <Users className="w-12 h-12 text-neon mb-4" />
              <h4 className="text-xl font-bold text-foreground mb-4">Participação Especial</h4>
              <p className="text-muted-foreground">
                Jessica Collet, consultora de imagem, mostrando como sua presença acelera sua autoridade.
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};