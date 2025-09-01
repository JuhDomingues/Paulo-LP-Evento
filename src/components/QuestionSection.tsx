import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const QuestionSection = () => {
  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Questions */}
          <div className="mb-12">
            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-glow">
                <CheckCircle2 className="w-6 h-6 text-highlight flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">
                  Já sentiu que sua experiência não é reconhecida como deveria?
                </p>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-glow">
                <CheckCircle2 className="w-6 h-6 text-highlight flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">
                  Já perdeu clientes para concorrentes menos preparados, mas mais visíveis?
                </p>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-glow">
                <CheckCircle2 className="w-6 h-6 text-highlight flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">
                  Sente que depende demais da indicação e gostaria de mais previsibilidade?
                </p>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-glow">
                <CheckCircle2 className="w-6 h-6 text-highlight flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">
                  Quer consolidar sua posição no mercado e ainda crescer com segurança?
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Se respondeu sim, esse evento é para você.
            </h2>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};