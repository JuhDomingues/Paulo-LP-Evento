import { Button } from "@/components/ui/button";
import { VolumeX, Volume2 } from "lucide-react";
import { useState, useRef } from "react";

export const HeroSection = () => {
  const [showUnmuteButton, setShowUnmuteButton] = useState(true);
  const [isUnmuting, setIsUnmuting] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleUnmute = () => {
    if (iframeRef.current) {
      setIsUnmuting(true);
      setHasUserInteracted(true);
      
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const videoId = 'J8lrowpQ8MY';
      
      if (isMobile) {
        // Mobile strategy: Reset video to beginning with audio enabled, but paused
        // This forces user to click play again with audio permission
        const newSrc = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=1&rel=0&playsinline=1&enablejsapi=1&start=0&origin=${window.location.origin}`;
        
        // Force complete iframe replacement
        const iframe = iframeRef.current;
        const parent = iframe.parentNode;
        
        // Create completely new iframe
        const newIframe = document.createElement('iframe');
        newIframe.src = newSrc;
        newIframe.title = iframe.title;
        newIframe.className = iframe.className;
        newIframe.style.cssText = iframe.style.cssText;
        newIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        newIframe.allowFullscreen = true;
        newIframe.setAttribute('playsinline', 'true');
        
        // Replace iframe completely
        if (parent) {
          parent.removeChild(iframe);
          parent.appendChild(newIframe);
          iframeRef.current = newIframe;
        }
        
        // Hide unmute button immediately since video will be paused and user needs to click play
        setTimeout(() => {
          setShowUnmuteButton(false);
          setIsUnmuting(false);
        }, 1000);
        
      } else {
        // Desktop version - can autoplay with audio after user interaction
        const newSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&loop=1&playlist=${videoId}&start=0&enablejsapi=1`;
        
        // Force complete reload for desktop
        const iframe = iframeRef.current;
        const parent = iframe.parentNode;
        const newIframe = iframe.cloneNode() as HTMLIFrameElement;
        newIframe.src = newSrc;
        
        if (parent) {
          parent.removeChild(iframe);
          parent.appendChild(newIframe);
          iframeRef.current = newIframe;
        }
        
        setTimeout(() => {
          setShowUnmuteButton(false);
          setIsUnmuting(false);
        }, 2000);
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Headline */}
          <div>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              O mais conhecido vence o melhor… até que o melhor decida se tornar{" "}
              <span className="text-highlight">
                mais conhecido.
              </span>
            </h1>
          </div>
          
          {/* YouTube Video - Mobile */}
          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-glow max-w-xs xs:max-w-sm w-full">
              <div className="relative w-full aspect-[9/16]">
                <iframe
                  ref={iframeRef}
                  src="https://www.youtube.com/embed/J8lrowpQ8MY?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=J8lrowpQ8MY&playsinline=1"
                  title="Posicionamento de Autoridade"
                  className="w-full h-full object-cover"
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                  allowFullScreen
                ></iframe>
                
                {/* Unmute Button */}
                {showUnmuteButton && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="flex flex-col items-center gap-2">
                      <button
                        onClick={handleUnmute}
                        className={`bg-black/70 hover:bg-black/90 text-white p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg ${
                          isUnmuting ? 'cursor-not-allowed' : 'cursor-pointer'
                        }`}
                        title={isUnmuting ? "Ativando som..." : "Ativar som"}
                        disabled={isUnmuting}
                      >
                        {isUnmuting ? (
                          <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse text-green-400" />
                        ) : (
                          <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                      </button>
                    </div>
                    
                    {/* Helper text for users */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                      <p className="text-xs sm:text-sm text-white bg-black/60 px-2 py-1 rounded whitespace-nowrap">
                        {isUnmuting ? (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "Habilitando áudio..." : "Ativando som...") : 
                         hasUserInteracted ? "Processando..." : 
                         (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "🎵 Clique para habilitar som" : "👆 Clique para ativar som")}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-primary/30 pointer-events-none"></div>
            </div>
          </div>
          
          {/* Rest of content */}
          <div className="space-y-6">
            <p className="text-lg xs:text-xl text-muted-foreground leading-relaxed">
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
                  src="https://www.youtube.com/embed/J8lrowpQ8MY?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=J8lrowpQ8MY&playsinline=1"
                  title="Posicionamento de Autoridade"
                  className="w-full h-full object-cover"
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                  allowFullScreen
                ></iframe>
                
                {/* Unmute Button */}
                {showUnmuteButton && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="flex flex-col items-center gap-2">
                      <button
                        onClick={handleUnmute}
                        className={`bg-black/70 hover:bg-black/90 text-white p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg ${
                          isUnmuting ? 'cursor-not-allowed' : 'cursor-pointer'
                        }`}
                        title={isUnmuting ? "Ativando som..." : "Ativar som"}
                        disabled={isUnmuting}
                      >
                        {isUnmuting ? (
                          <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse text-green-400" />
                        ) : (
                          <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                      </button>
                    </div>
                    
                    {/* Helper text for users */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                      <p className="text-xs sm:text-sm text-white bg-black/60 px-2 py-1 rounded whitespace-nowrap">
                        {isUnmuting ? (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "Habilitando áudio..." : "Ativando som...") : 
                         hasUserInteracted ? "Processando..." : 
                         (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "🎵 Clique para habilitar som" : "👆 Clique para ativar som")}
                      </p>
                    </div>
                  </div>
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