import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Phone, Mail, Clock, Shield, Wrench, CheckCircle, HeadphonesIcon, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Maintenance = () => {
  const services = [
    {
      icon: Wrench,
      title: "Maintenance préventive",
      description: "Interventions régulières planifiées pour garantir le bon fonctionnement de vos équipements et prévenir les pannes.",
    },
    {
      icon: Settings,
      title: "Maintenance corrective",
      description: "Intervention rapide en cas de dysfonctionnement pour remettre votre fontaine en état de marche optimal.",
    },
    {
      icon: Shield,
      title: "Remplacement des filtres",
      description: "Changement périodique des filtres pour maintenir une qualité d'eau irréprochable et conforme aux normes.",
    },
    {
      icon: CheckCircle,
      title: "Contrôle sanitaire",
      description: "Vérifications régulières et désinfection pour garantir une eau pure et saine à vos utilisateurs.",
    },
  ];

  const advantages = [
    "Techniciens certifiés et formés aux équipements Idra",
    "Pièces détachées d'origine garanties",
    "Délai d'intervention rapide sur toute la Suisse",
    "Contrats de maintenance sur mesure",
    "Rapport d'intervention détaillé",
    "Hotline dédiée pour les urgences",
  ];

  return (
    <Layout>
      <Helmet>
        <title>Support technique & Maintenance | Idra</title>
        <meta
          name="description"
          content="Service de maintenance et support technique Idra en Suisse. Maintenance préventive, corrective et assistance pour vos fontaines à eau."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Support technique & Maintenance
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Un service de maintenance professionnelle pour garantir la performance 
              et la longévité de vos fontaines Idra.
            </p>
            <Button asChild size="lg" variant="cta">
              <Link to="/contact">Demander un contrat de maintenance</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos services de maintenance
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une gamme complète de services pour assurer le fonctionnement optimal de vos équipements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Pourquoi choisir le support Idra ?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Notre équipe de techniciens qualifiés assure un service de maintenance 
                  de qualité pour prolonger la durée de vie de vos équipements et garantir 
                  une eau de qualité optimale.
                </p>
                <ul className="space-y-3">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contactez notre support
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Téléphone</p>
                      <a href="tel:+41225551234" className="text-foreground font-medium hover:text-primary transition-colors">
                        +41 22 555 12 34
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:support@idra.ch" className="text-foreground font-medium hover:text-primary transition-colors">
                        support@idra.ch
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Horaires</p>
                      <p className="text-foreground font-medium">Lun - Ven : 8h - 18h</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <HeadphonesIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Urgences</p>
                      <p className="text-foreground font-medium">Hotline 24h/24</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-primary/5 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Besoin d'une intervention ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Nos équipes techniques sont disponibles pour répondre à vos besoins 
              de maintenance et d'assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="cta">
                <Link to="/contact">Demander une intervention</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+41225551234">Appeler le support</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Maintenance;
