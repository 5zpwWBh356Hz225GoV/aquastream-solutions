import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, Building, User, MessageSquare, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    establishmentType: "",
    coversPerDay: "",
    message: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Demande Envoyée !",
      description: "Notre équipe vous contactera sous 24 heures avec un devis personnalisé."
    });
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      establishmentType: "",
      coversPerDay: "",
      message: ""
    });
  };
  return <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Contactez-Nous
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Demandez Votre{" "}
              <span className="text-gradient-ocean">Devis Gratuit</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Parlez-nous de votre établissement et nous préparerons une proposition personnalisée 
              montrant exactement combien vous pouvez économiser avec Idra.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact cards */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  Informations de Contact
                </h3>
                <div className="space-y-4">
                  <a href="tel:+33123456789" className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Appelez-Nous</div>
                      <div className="font-semibold text-foreground">+41 1 23 45 67 89</div>
                    </div>
                  </a>

                  <a href="mailto:contact@idra.fr" className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Écrivez-Nous</div>
                      <div className="font-semibold text-foreground">contact@idrasystems.ch</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Rendez-Nous Visite</div>
                      <div className="font-semibold text-foreground">Neuchâtel, Suisse</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Heures d'Ouverture</div>
                      <div className="font-semibold text-foreground">Lun-Ven : 9h - 18h</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-border">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  À Quoi S'attendre
                </h3>
                <ul className="space-y-4">
                  {["Réponse sous 24 heures", "Analyse d'économies personnalisée", "Consultation sur site gratuite", "Devis sans engagement", "Options de paiement flexibles"].map(item => <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                      {item}
                    </li>)}
                </ul>
              </div>

              {/* Quick stats */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  Pourquoi Nous Contacter ?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-xl">
                    <div className="text-2xl font-display font-bold text-primary">300+</div>
                    <div className="text-sm text-muted-foreground">Clients Satisfaits</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-xl">
                    <div className="text-2xl font-display font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contact;