import { useState } from "react";
import { Instagram, MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "from-pink-500 to-rose-500",
      description: "Siga nosso dia a dia e fique por dentro de todas as novidades"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "#",
      color: "from-green-500 to-emerald-500",
      description: "Entre em contato direto conosco pelo WhatsApp"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contato@fraternidadedespertar.org",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(11) 9999-9999",
      color: "from-primary to-primary-light"
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua da Esperança, 123 - São Paulo, SP",
      color: "from-secondary to-secondary-light"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-warm/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-slide-up">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
            Estamos sempre prontos para ouvir você. Seja para participar dos nossos projetos, 
            fazer uma doação ou simplesmente conhecer melhor nosso trabalho.
          </p>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Conecte-se Conosco
            </h2>
            <p className="text-xl text-muted-foreground">
              Siga nossas redes sociais e fique por dentro de tudo!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="group hover-lift animate-bounce-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Card className="p-8 text-center border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {social.description}
                    </p>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gradient-to-r from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="p-8 bg-white/90 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-6 gradient-text">
                  Envie uma Mensagem
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Seu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Seu telefone (opcional)"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Sua mensagem"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div>
                <h3 className="text-3xl font-bold mb-6 gradient-text">
                  Outras Formas de Contato
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Você também pode entrar em contato conosco através dos 
                  canais abaixo. Estamos sempre disponíveis para ajudar!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={info.label}
                      className="flex items-center p-4 bg-white/50 rounded-2xl hover-lift animate-bounce-in"
                      style={{ animationDelay: `${600 + (index * 200)}ms` }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mr-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
                <h4 className="font-bold text-foreground mb-2">Horário de Atendimento</h4>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 8h às 17h<br />
                  Sábados: 8h às 12h<br />
                  Domingos: Fechado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">
              Nossa Localização
            </h3>
            <p className="text-muted-foreground">
              Venha nos visitar! Estamos localizados no coração da comunidade.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Mapa interativo será<br />adicionado em breve
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;