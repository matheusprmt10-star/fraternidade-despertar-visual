import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Music, Users, Handshake, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/AnimatedText";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Music,
      title: "Orquestra",
      description: "Transformando vidas através da música",
      href: "/orquestra",
      color: "from-primary to-primary-light"
    },
    {
      icon: Users,
      title: "Projetos Sociais",
      description: "Iniciativas que fazem a diferença",
      href: "/projetos", 
      color: "from-secondary to-secondary-light"
    },
    {
      icon: Handshake,
      title: "Parcerias",
      description: "Construindo juntos um futuro melhor",
      href: "/parcerias",
      color: "from-accent to-warm"
    },
    {
      icon: MessageCircle,
      title: "Contato",
      description: "Conecte-se conosco",
      href: "/contato",
      color: "from-warm to-secondary"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-40 right-10 w-12 h-12 bg-warm/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">
                <AnimatedText text="Projeto Social" delay={500} />
              </span>
              <br />
              <span className="text-primary animate-bounce-in">
                <AnimatedText text="Fraternidade Despertar" delay={1500} />
              </span>
            </h1>
            
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '2.5s' }}>
                Transformando vidas através da música, educação e solidariedade. 
                Juntos construímos um futuro de esperança e acolhimento para nossa comunidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in" style={{ animationDelay: '3s' }}>
              <Button variant="hero" size="lg" asChild className="animate-gradient">
                <Link to="/projetos">
                  Conheça Nossos Projetos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="social" size="lg" asChild>
                <Link to="/orquestra">
                  Nossa Orquestra
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Nossos Pilares
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça as diferentes formas como fazemos a diferença na comunidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  to={feature.href}
                  className="group hover-lift"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 hover:shadow-xl transition-all duration-300 animate-fade-in">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Faça Parte Desta Transformação
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Sua colaboração pode fazer a diferença na vida de muitas pessoas. 
            Entre em contato e descubra como participar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="lg" asChild className="hover-glow">
              <Link to="/contato">
                Entre em Contato
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover-lift">
              <Link to="/parcerias">
                Seja um Parceiro
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;