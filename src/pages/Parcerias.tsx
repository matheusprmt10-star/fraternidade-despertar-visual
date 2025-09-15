import { Building, Handshake, Heart, Users } from "lucide-react";

const Parcerias = () => {
  const partnerCategories = [
    {
      title: "Instituições Públicas",
      icon: Building,
      color: "from-primary to-primary-light",
      partners: [
        { name: "Prefeitura Municipal", logo: "PM" },
        { name: "Secretaria de Educação", logo: "SE" },
        { name: "Conselho Tutelar", logo: "CT" },
        { name: "Centro de Referência", logo: "CR" }
      ]
    },
    {
      title: "ONGs e Associações",
      icon: Heart,
      color: "from-secondary to-secondary-light",
      partners: [
        { name: "Instituto Social Local", logo: "IS" },
        { name: "Associação de Moradores", logo: "AM" },
        { name: "Casa da Criança", logo: "CC" },
        { name: "Fundação Esperança", logo: "FE" }
      ]
    },
    {
      title: "Empresas Privadas",
      icon: Handshake,
      color: "from-accent to-warm",
      partners: [
        { name: "Supermercado Regional", logo: "SR" },
        { name: "Farmácia Comunitária", logo: "FC" },
        { name: "Construtora Local", logo: "CL" },
        { name: "Loja de Instrumentos", logo: "LI" }
      ]
    },
    {
      title: "Voluntários",
      icon: Users,
      color: "from-warm to-secondary",
      partners: [
        { name: "Professores Voluntários", logo: "PV" },
        { name: "Profissionais da Saúde", logo: "PS" },
        { name: "Artistas Locais", logo: "AL" },
        { name: "Estudantes Universitários", logo: "EU" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-slide-up">
            Nossas Parcerias
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
            Acreditamos que sozinhos chegamos mais rápido, mas juntos chegamos mais longe. 
            Conheça quem caminha conosco nesta jornada de transformação social.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {partnerCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                  <div className="text-center mb-12">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold gradient-text mb-4">
                      {category.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {category.partners.map((partner, index) => (
                      <div
                        key={partner.name}
                        className="group hover-lift animate-bounce-in"
                        style={{ animationDelay: `${(categoryIndex * 200) + (index * 100)}ms` }}
                      >
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:shadow-xl transition-all duration-300 hover-glow">
                          {/* Logo Placeholder */}
                          <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white font-bold text-lg">
                              {partner.logo}
                            </span>
                          </div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {partner.name}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 gradient-text">
              Juntos Somos Mais Fortes
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Cada parceria representa uma oportunidade de amplificar nosso impacto social. 
              Através da colaboração, conseguimos oferecer mais recursos, mais oportunidades 
              e mais esperança para nossa comunidade.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Parceiros Ativos</p>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl font-bold text-secondary mb-2">8</div>
                <p className="text-muted-foreground">Anos de Colaboração</p>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="text-4xl font-bold text-accent mb-2">1000+</div>
                <p className="text-muted-foreground">Vidas Impactadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Quer Ser Nosso Parceiro?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Estamos sempre abertos a novas parcerias que compartilhem nossos valores 
            de solidariedade, esperança e transformação social. Vamos construir juntos!
          </p>
        </div>
      </section>

      {/* Note */}
      <div className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            *Os logos oficiais das instituições parceiras serão adicionados em breve
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parcerias;