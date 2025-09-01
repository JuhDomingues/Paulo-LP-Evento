import { CheckCircle } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-secondary-bg relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Current situation */}
          <div className="text-center mb-16">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <CheckCircle className="w-12 h-12 text-highlight mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Você já tem clientes.</h3>
              </div>
              <div className="space-y-4">
                <CheckCircle className="w-12 h-12 text-highlight mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Já construiu resultados.</h3>
              </div>
              <div className="space-y-4">
                <CheckCircle className="w-12 h-12 text-highlight mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Já conquistou espaço físico, carteira de clientes e respeito no seu mercado.</h3>
              </div>
            </div>
          </div>

          {/* The problem */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-glow">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Mas a cada dia percebe que:
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-highlight/10 rounded-lg border border-highlight/20">
                <div className="w-2 h-2 bg-highlight rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">
                  Concorrentes menos preparados estão ocupando espaço porque se posicionam melhor.
                </p>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-highlight/10 rounded-lg border border-highlight/20">
                <div className="w-2 h-2 bg-highlight rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">
                  A indicação sozinha não garante mais seu crescimento.
                </p>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-highlight/10 rounded-lg border border-highlight/20">
                <div className="w-2 h-2 bg-highlight rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">
                  O digital se tornou a maior vitrine de validação profissional do mundo.
                </p>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-highlight/10 rounded-lg border border-highlight/20">
                <div className="w-2 h-2 bg-highlight rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-muted-foreground">
                  E sem autoridade clara, até sua experiência pode ser ignorada.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-primary/20 rounded-xl border border-primary/30 text-center">
              <p className="text-xl font-bold text-foreground">
                👉 O resultado? Eles vendem mais. Mesmo sabendo menos.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};