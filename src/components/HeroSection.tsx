import { Button } from "@/components/ui/button";
import { VolumeX } from "lucide-react";
import { useState, useRef } from "react";

export const HeroSection = () => {
  const [showUnmuteButton, setShowUnmuteButton] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleUnmute = () => {
    if (iframeRef.current) {
      // Restart video with sound enabled
      const currentSrc = iframeRef.current.src;
      const newSrc = currentSrc.replace('mute=1', 'mute=0');
      iframeRef.current.src = newSrc;
      setShowUnmuteButton(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* Headline */}
          <div>
            <h1 className="text-4xl font-bold text-foreground leading-tight">
              O mais conhecido vence o melhor… até que o melhor decida se tornar{" "}
              <span className="text-highlight">
                mais conhecido.
              </span>
            </h1>
          </div>
          
          {/* YouTube Video - Mobile */}
          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-glow max-w-sm w-full">
              <div className="relative w-full aspect-[9/16]">
                <iframe
                  ref={iframeRef}
                  src="https://www.youtube.com/embed/J8lrowpQ8MY?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=J8lrowpQ8MY"
                  title="Posicionamento de Autoridade"
                  className="w-full h-full object-cover"
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Unmute Button */}
                {showUnmuteButton && (
                  <button
                    onClick={handleUnmute}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 z-10"
                    title="Ativar som"
                  >
                    <VolumeX className="w-6 h-6" />
                  </button>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-primary/30 pointer-events-none"></div>
            </div>
          </div>
          
          {/* Rest of content */}
          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Participe do Evento <strong className="text-highlight">Posicionamento de Autoridade</strong> e 
              descubra como transformar sua experiência em autoridade incontestável, atrair os 
              clientes certos e crescer com previsibilidade — mesmo em um mercado competitivo.
            </p>
            
            <div className="bg-highlight/20 border border-highlight/40 rounded-lg p-4">
              <p className="text-highlight font-semibold flex items-center gap-2">
                ⚠️ Atenção: os valores especiais deste evento são exclusivos para as 30 primeiras vagas.
              </p>
            </div>
            
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full sm:w-auto text-lg font-bold"
              onClick={() => document.getElementById('ingressos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              QUERO MINHA VAGA AGORA
            </Button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center min-h-screen py-8">
          
          {/* Text content - Desktop */}
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-foreground leading-tight">
              O mais conhecido vence o melhor… até que o melhor decida se tornar{" "}
              <span className="text-highlight">
                mais conhecido.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Participe do Evento <strong className="text-highlight">Posicionamento de Autoridade</strong> e 
              descubra como transformar sua experiência em autoridade incontestável, atrair os 
              clientes certos e crescer com previsibilidade — mesmo em um mercado competitivo.
            </p>
            
            <div className="bg-highlight/20 border border-highlight/40 rounded-lg p-4">
              <p className="text-highlight font-semibold flex items-center gap-2">
                ⚠️ Atenção: os valores especiais deste evento são exclusivos para as 30 primeiras vagas.
              </p>
            </div>
            
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full sm:w-auto text-lg font-bold"
              onClick={() => document.getElementById('ingressos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              QUERO MINHA VAGA AGORA
            </Button>
          </div>

          {/* YouTube Video - Desktop */}
          <div className="relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-glow max-w-sm w-full">
              <div className="relative w-full aspect-[9/16]">
                <iframe
                  ref={iframeRef}
                  src="https://www.youtube.com/embed/J8lrowpQ8MY?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=J8lrowpQ8MY"
                  title="Posicionamento de Autoridade"
                  className="w-full h-full object-cover"
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Unmute Button */}
                {showUnmuteButton && (
                  <button
                    onClick={handleUnmute}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 z-10"
                    title="Ativar som"
                  >
                    <VolumeX className="w-6 h-6" />
                  </button>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-primary/30 pointer-events-none"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-highlight rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-bg rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};