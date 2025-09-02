import { Brain, Instagram, BarChart3, Sparkles } from "lucide-react";
import JessicaImage from "@/assets/Jessica.jpeg";

export const LearningSection = () => {
  return (
    <section className="py-20 bg-primary-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              No Evento Posicionamento de Autoridade
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
              você terá 4 horas de imersão prática para transformar a forma como o mercado te enxerga.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-highlight">Você vai aprender:</h3>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50 shadow-glow hover:shadow-gold transition-all duration-300">
              <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-highlight mb-4" />
              <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4">O Efeito Halo</h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Como sua imagem decide se o cliente confia em você em segundos.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50 shadow-glow hover:shadow-gold transition-all duration-300">
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-cyan mb-4" />
              <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4">3 Forças da Autoridade</h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Posicionamento, Exclusividade e Diferenciação para se destacar.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50 shadow-glow hover:shadow-gold transition-all duration-300">
              <Instagram className="w-10 h-10 sm:w-12 sm:h-12 text-highlight mb-4" />
              <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4">Instagram Estratégico</h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Como transformar seu perfil na maior vitrine de validação profissional do mundo.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50 shadow-glow hover:shadow-gold transition-all duration-300 md:col-span-2 lg:col-span-1">
              <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-cyan mb-4" />
              <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4">Casos Reais</h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Profissionais que multiplicaram faturamento aplicando esse método.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-border/50 shadow-glow hover:shadow-gold transition-all duration-300 md:col-span-2 lg:col-span-3">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <div className="w-40 h-52 sm:w-48 sm:h-64 rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={JessicaImage} 
                    alt="Jessica Collet" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Participação Especial</h4>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Jessica Collet, consultora de imagem, mostrando como sua presença acelera sua autoridade.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};