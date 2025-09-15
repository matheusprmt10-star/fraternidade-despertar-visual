import { Music, Users, Award, Calendar } from "lucide-react";

const Orquestra = () => {
  const stats = [
    { icon: Users, label: "Músicos", value: "45+" },
    { icon: Music, label: "Instrumentos", value: "15+" },
    { icon: Calendar, label: "Anos de História", value: "8" },
    { icon: Award, label: "Apresentações", value: "100+" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Nossa Orquestra
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Através da música, transformamos vidas e criamos oportunidades para jovens 
              da nossa comunidade descobrirem seus talentos e construírem um futuro melhor.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center animate-bounce-in hover-lift"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold mb-6 gradient-text">
                  Música que Transforma
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Nossa orquestra é mais que um grupo musical - é uma família que cresce junta, 
                  aprende junta e sonha junta. Aqui, cada jovem encontra seu lugar e descobre 
                  que a música pode abrir portas para um futuro repleto de possibilidades.
                </p>
                <p className="text-lg text-muted-foreground">
                  Com ensaios regulares, apresentações em eventos da comunidade e oportunidades 
                  de crescimento pessoal, nossa orquestra tem sido um refúgio de esperança e 
                  desenvolvimento para dezenas de jovens ao longo dos anos.
                </p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                {/* Placeholder for orchestra photo */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Music className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Foto da orquestra será<br />adicionada em breve
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Placeholder */}
            <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <h3 className="text-3xl font-bold mb-8 text-center gradient-text">
                Momentos Especiais
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-2xl flex items-center justify-center hover-lift"
                  >
                    <div className="text-center">
                      <Music className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Foto {index}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-6">
                *Galeria de fotos será atualizada com as imagens oficiais
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Quer Fazer Parte da Nossa Orquestra?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Estamos sempre abertos a novos talentos e pessoas dispostas a crescer conosco. 
            Entre em contato e saiba como participar!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Orquestra;