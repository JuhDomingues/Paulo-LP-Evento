import { User, Award, TrendingUp, Star } from "lucide-react";
import pauloPhoto from "@/assets/Paulo-2.jpg";

export const MentorSection = () => {
  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">QUEM É PAULO COLLET</h2>
          </div>

          <div className="bg-gradient-primary/20 rounded-2xl p-6 sm:p-8 border border-primary/30">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
              
              {/* Photo */}
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-glow">
                  <img 
                    src={pauloPhoto} 
                    alt="Paulo Collet - Mentor de Autoridade" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/10"></div>
                </div>
              </div>
              
              {/* Profile info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Paulo André Collet</h3>
                  <p className="text-highlight font-semibold mb-4">Mentor de carreira há 17 anos, especialista em posicionamento e autoridade profissional</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="w-6 h-6 text-cyan flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground text-sm">
                      Ao longo de sua trajetória, esteve com grandes referências como Tony Robbins, T. Harv Eker e Roberto Shinyashiki, absorvendo estratégias e princípios que aplica para transformar carreiras.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-highlight flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground text-sm">
                      Já atuou como treinador em mais de 400 eventos realizados em 8 estados do Brasil e no Chile.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-cyan flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground text-sm">
                      Criador do <strong className="text-highlight">Método Autoridade Máxima</strong>, ajuda profissionais a se tornarem referência no mercado e faturarem até 10x mais por meio de posicionamento estratégico, influência e valor percebido.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-highlight" />
                  Resultados Comprovados
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-highlight rounded-full"></div>
                    <span className="text-muted-foreground text-sm">17 anos de experiência em mentoria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan rounded-full"></div>
                    <span className="text-muted-foreground text-sm">Centenas de profissionais transformados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-highlight rounded-full"></div>
                    <span className="text-muted-foreground text-sm">Multiplicação de 2x a 10x no faturamento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan rounded-full"></div>
                    <span className="text-muted-foreground text-sm">Método Autoridade Máxima exclusivo</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};