import { useState } from "react";
import { Users, BookOpen, Heart, Utensils, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projetos = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Educação Musical",
      icon: BookOpen,
      color: "from-primary to-primary-light",
      shortDescription: "Aulas de música gratuitas para crianças e jovens",
      fullDescription: "Nosso programa de educação musical oferece aulas gratuitas de diversos instrumentos para crianças e jovens da comunidade. Com professores qualificados e instrumentos disponíveis, criamos oportunidades para que cada participante descubra e desenvolva seu talento musical.",
      impact: "Mais de 150 jovens já passaram pelo programa",
      activities: [
        "Aulas individuais e em grupo",
        "Empréstimo de instrumentos",
        "Workshops e masterclasses",
        "Apresentações públicas"
      ]
    },
    {
      id: 2,
      title: "Apoio Social",
      icon: Heart,
      color: "from-secondary to-secondary-light",
      shortDescription: "Assistência às famílias em situação de vulnerabilidade",
      fullDescription: "Programa de assistência social que oferece suporte integral às famílias em situação de vulnerabilidade. Incluímos distribuição de cestas básicas, roupas, material escolar e apoio psicológico quando necessário.",
      impact: "80 famílias atendidas mensalmente",
      activities: [
        "Distribuição de cestas básicas",
        "Doação de roupas e calçados",
        "Material escolar",
        "Orientação e apoio psicológico"
      ]
    },
    {
      id: 3,
      title: "Integração Comunitária",
      icon: Users,
      color: "from-accent to-warm",
      shortDescription: "Eventos que fortalecem os laços da comunidade",
      fullDescription: "Organizamos eventos e atividades que promovem a integração e o fortalecimento dos laços comunitários. Festas, encontros culturais e atividades recreativas que unem pessoas de todas as idades.",
      impact: "Mais de 500 pessoas participam dos eventos",
      activities: [
        "Festas comunitárias",
        "Saraus culturais",
        "Atividades recreativas",
        "Encontros intergeracionais"
      ]
    },
    {
      id: 4,
      title: "Alimentação Solidária",
      icon: Utensils,
      color: "from-warm to-secondary",
      shortDescription: "Combate à fome através de refeições gratuitas",
      fullDescription: "Programa de distribuição de refeições gratuitas para pessoas em situação de rua e famílias em extrema vulnerabilidade. Servimos almoços nutritivos e balanceados, promovendo não apenas alimentação, mas também dignidade.",
      impact: "200 refeições servidas semanalmente",
      activities: [
        "Preparação de refeições",
        "Distribuição em pontos estratégicos",
        "Atendimento humanizado",
        "Campanhas de arrecadação"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-warm/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-slide-up">
            Nossos Projetos
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
            Cada projeto nasce do nosso compromisso com a transformação social. 
            Conheça as iniciativas que fazem a diferença na nossa comunidade.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="group cursor-pointer hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 hover:shadow-xl transition-all duration-300">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {project.shortDescription}
                    </p>
                    <div className="text-sm text-primary font-medium">
                      Clique para saber mais →
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-bounce-in">
            <div className="p-8">
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                const Icon = project.icon;
                return (
                  <>
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedProject(null)}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4 gradient-text">
                      {project.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 text-lg">
                      {project.fullDescription}
                    </p>
                    
                    <div className="bg-primary/5 rounded-xl p-4 mb-6">
                      <h4 className="font-semibold text-primary mb-2">Impacto:</h4>
                      <p className="text-foreground">{project.impact}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Atividades:</h4>
                      <ul className="space-y-2">
                        {project.activities.map((activity, index) => (
                          <li key={index} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Placeholder for project photos */}
                    <div className="mt-8">
                      <h4 className="font-semibold text-foreground mb-4">Galeria do Projeto:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((index) => (
                          <div
                            key={index}
                            className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center"
                          >
                            <div className="text-center">
                              <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                              <p className="text-xs text-muted-foreground">Foto {index}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-3 text-center">
                        *Fotos oficiais serão adicionadas em breve
                      </p>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projetos;