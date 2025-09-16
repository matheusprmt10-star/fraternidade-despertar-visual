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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/10 to-secondary/10">
        
        {/* Enhanced Rope Pulling Animation */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="animate-rope-pull">
            <svg 
              width="280" 
              height="200" 
              viewBox="0 0 280 200" 
              className="absolute -top-24 left-1/2 transform -translate-x-1/2"
            >
              {/* Ground line */}
              <line x1="0" y1="140" x2="280" y2="140" stroke="hsl(var(--muted-foreground))" strokeWidth="2" opacity="0.3"/>
              
              {/* Person pulling rope */}
              <g className="fill-primary animate-person-strain" style={{ transformOrigin: '50px 110px' }}>
                {/* Shadow */}
                <ellipse cx="50" cy="135" rx="18" ry="4" fill="hsl(var(--muted-foreground))" opacity="0.2"/>
                
                {/* Body */}
                <ellipse cx="50" cy="90" rx="16" ry="28" />
                
                {/* Head */}
                <circle cx="50" cy="50" r="14" />
                <circle cx="47" cy="47" r="2" fill="white"/>
                <circle cx="53" cy="47" r="2" fill="white"/>
                
                {/* Arms - more detailed */}
                <ellipse cx="72" cy="75" rx="22" ry="10" transform="rotate(20 72 75)" />
                <circle cx="85" cy="82" r="6" />
                
                {/* Legs - more dynamic */}
                <ellipse cx="42" cy="120" rx="10" ry="18" transform="rotate(-15 42 120)" />
                <ellipse cx="58" cy="120" rx="10" ry="18" transform="rotate(15 58 120)" />
                <circle cx="38" cy="135" r="5" />
                <circle cx="62" cy="135" r="5" />
                
                {/* Hair */}
                <path d="M 42 42 Q 50 35 58 42 Q 55 38 50 37 Q 45 38 42 42" fill="hsl(var(--primary-dark))"/>
              </g>
              
              {/* Dynamic Rope with tension effect */}
              <path 
                d="M 88 82 Q 140 85 200 90" 
                stroke="hsl(var(--secondary))" 
                strokeWidth="4" 
                fill="none"
                className="animate-rope-tension"
                strokeDasharray="0"
              />
              
              {/* Rope highlight for tension */}
              <path 
                d="M 88 82 Q 140 85 200 90" 
                stroke="hsl(var(--primary-light))" 
                strokeWidth="2" 
                fill="none"
                className="animate-rope-tension"
                opacity="0.6"
              />
              
              {/* Object being pulled (representing the project) */}
              <g className="animate-button-rope-reveal" style={{ transformOrigin: '220px 95px' }}>
                {/* Shadow of object */}
                <ellipse cx="220" cy="110" rx="15" ry="3" fill="hsl(var(--muted-foreground))" opacity="0.2"/>
                
                {/* Main object - representing "Conheça Nossos Projetos" */}
                <rect x="200" y="85" width="40" height="20" rx="10" fill="hsl(var(--primary))" />
                <rect x="202" y="87" width="36" height="16" rx="8" fill="hsl(var(--primary-light))" />
                <text x="220" y="98" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">PROJETO</text>
                
                {/* Sparkles around the object */}
                <circle cx="195" cy="80" r="1.5" fill="hsl(var(--accent))" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="245" cy="88" r="2" fill="hsl(var(--warm))" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="205" cy="110" r="1" fill="hsl(var(--secondary))" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.8s" repeatCount="indefinite"/>
                </circle>
              </g>
              
              {/* Effort lines */}
              <g opacity="0.4">
                <line x1="25" y1="85" x2="30" y2="80" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <line x1="25" y1="90" x2="30" y2="85" stroke="hsl(var(--primary))" strokeWidth="2"/>
                <line x1="25" y1="95" x2="30" y2="90" stroke="hsl(var(--primary))" strokeWidth="2"/>
              </g>
            </svg>
          </div>
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" asChild className="animate-button-appear bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/projetos">
                  Conheça Nossos Projetos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="animate-button-appear border-primary text-primary hover:bg-primary hover:text-white" style={{ animationDelay: '2.4s' }}>
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