
export const TargetSection = () => {
  return (
    <section className="py-20 bg-primary-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-16">
            <div className="inline-block bg-highlight/20 border border-highlight/40 rounded-full px-6 py-3 mb-6">
              <span className="text-highlight font-bold text-xl">PARA QUEM É</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50 shadow-glow">
              <div className="bg-highlight/20 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-xl sm:text-2xl font-bold text-highlight">01</span>
              </div>
              <p className="text-base sm:text-lg text-foreground">
                Para quem quer parar de disputar por preço e começar a ser valorizado pelo que realmente entrega.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50 shadow-glow">
              <div className="bg-cyan/20 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-xl sm:text-2xl font-bold text-cyan">02</span>
              </div>
              <p className="text-base sm:text-lg text-foreground">
                Para quem já tem clientes e resultados, mas quer consolidar e ampliar sua posição no mercado.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50 shadow-glow">
              <div className="bg-highlight/20 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-xl sm:text-2xl font-bold text-highlight">03</span>
              </div>
              <p className="text-base sm:text-lg text-foreground">
                Para quem não aceita perder espaço para concorrentes menos qualificados.
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};