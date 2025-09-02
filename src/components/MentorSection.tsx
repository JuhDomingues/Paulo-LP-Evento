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

          {/* Instagram Widget */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Siga Paulo no Instagram
            </h3>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-glow max-w-md mx-auto">
              <div className="instagram-widget" dangerouslySetInnerHTML={{
                __html: `
                  <blockquote 
                    class="instagram-media" 
                    data-instgrm-captioned 
                    data-instgrm-permalink="https://www.instagram.com/pauloandrecollet/" 
                    data-instgrm-version="14" 
                    style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
                  </blockquote>
                `
              }} />
              <div className="mt-4">
                <a 
                  href="https://www.instagram.com/pauloandrecollet?igsh=MXc0dXUyMGw1aGdwZA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @pauloandrecollet
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};