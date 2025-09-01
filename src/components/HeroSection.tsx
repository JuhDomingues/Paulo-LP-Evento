import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              "O mais conhecido vence o melhor… até que o melhor decida se tornar{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                mais conhecido.
              </span>"
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Participe do Evento <strong className="text-gold">Posicionamento de Autoridade</strong> e 
              descubra como transformar sua experiência em autoridade incontestável, atrair os 
              clientes certos e crescer com previsibilidade — mesmo em um mercado competitivo.
            </p>
            
            <div className="bg-destructive/20 border border-destructive/40 rounded-lg p-4">
              <p className="text-destructive font-semibold flex items-center gap-2">
                ⚠️ Atenção: os valores especiais deste evento são exclusivos para as 30 primeiras vagas.
              </p>
            </div>
            
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full sm:w-auto text-lg font-bold"
            >
              QUERO MINHA VAGA AGORA
            </Button>
          </div>
          
          {/* Right content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Autoridade e liderança profissional" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/30"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-deep-blue rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};