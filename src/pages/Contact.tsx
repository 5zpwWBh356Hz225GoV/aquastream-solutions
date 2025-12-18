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

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Contact cards */}
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-lg mb-10">
              <h3 className="font-display font-semibold text-2xl text-foreground mb-8 text-center">
                Informations de Contact
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <a href="tel:+41123456789" className="flex items-center gap-4 p-5 rounded-2xl bg-muted hover:bg-muted/80 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Appelez-Nous</div>
                    <div className="font-semibold text-foreground text-lg">+41 1 23 45 67 89</div>
                  </div>
                </a>

                <a href="mailto:contact@idrasystems.ch" className="flex items-center gap-4 p-5 rounded-2xl bg-muted hover:bg-muted/80 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Écrivez-Nous</div>
                    <div className="font-semibold text-foreground text-lg">contact@idrasystems.ch</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-muted">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Rendez-Nous Visite</div>
                    <div className="font-semibold text-foreground text-lg">Neuchâtel, Suisse</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-muted">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Heures d'Ouverture</div>
                    <div className="font-semibold text-foreground text-lg">Lun-Ven : 9h - 18h</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What to expect & Stats */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* What to expect */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-border">
                <h3 className="font-display font-semibold text-xl text-foreground mb-6 text-center">
                  À Quoi S'attendre
                </h3>
                <ul className="space-y-4">
                  {["Réponse sous 24 heures", "Analyse d'économies personnalisée", "Consultation sur site gratuite", "Devis sans engagement", "Options de paiement flexibles"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick stats */}
              <div className="bg-card rounded-3xl p-8 border border-border">
                <h3 className="font-display font-semibold text-xl text-foreground mb-6 text-center">
                  Pourquoi Nous Contacter ?
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-muted rounded-2xl">
                    <div className="text-3xl font-display font-bold text-primary mb-1">300+</div>
                    <div className="text-sm text-muted-foreground">Clients Satisfaits</div>
                  </div>
                  <div className="text-center p-6 bg-muted rounded-2xl">
                    <div className="text-3xl font-display font-bold text-primary mb-1">98%</div>
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