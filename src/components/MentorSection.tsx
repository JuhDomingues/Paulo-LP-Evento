import { User, Award, TrendingUp, Star } from "lucide-react";
import pauloPhoto from "@/assets/Paulo-2.jpg";

export const MentorSection = () => {
  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">QUEM É PAULO COLLET</h2>
          </div>

          <div className="bg-gradient-primary/20 rounded-2xl p-8 border border-primary/30">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              
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
                  <h3 className="text-2xl font-bold text-foreground mb-2">Paulo Collet</h3>
                  <p className="text-highlight font-semibold mb-4">Mentor de carreira com 17 anos de experiência</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-cyan flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground text-sm">
                      Já ajudou advogados, médicos, engenheiros, empresários e consultores a 
                      multiplicarem de 2 a 10x seu faturamento.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-highlight flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground text-sm">
                      Criador do método <strong className="text-highlight">Autoridade Máxima</strong>, que une posicionamento 
                      estratégico, imagem e diferenciação para transformar profissionais em referência no seu segmento.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Star className="w-6 h-6 text-highlight" />
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