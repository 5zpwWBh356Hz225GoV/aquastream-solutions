import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Building,
  User,
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    establishmentType: "",
    coversPerDay: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Request Submitted!",
      description: "Our team will contact you within 24 hours with a personalized quote.",
    });
    
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      establishmentType: "",
      coversPerDay: "",
      message: "",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Request Your{" "}
              <span className="text-gradient-ocean">Free Quote</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your establishment and we'll prepare a customized proposal 
              showing exactly how much you can save with AquaPure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-soft">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Tell Us About Your Needs
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          placeholder="Jean Dupont"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          placeholder="jean@restaurant.com"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Establishment Name *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          placeholder="Le Petit Bistro"
                        />
                      </div>
                    </div>

                    {/* Establishment Type */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Type of Establishment *
                      </label>
                      <select
                        name="establishmentType"
                        value={formData.establishmentType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      >
                        <option value="">Select type...</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="hotel">Hotel</option>
                        <option value="cafe">Café</option>
                        <option value="bar">Bar</option>
                        <option value="catering">Catering</option>
                        <option value="events">Event Venue</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Covers per day */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Average Covers/Day
                      </label>
                      <select
                        name="coversPerDay"
                        value={formData.coversPerDay}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      >
                        <option value="">Select range...</option>
                        <option value="0-50">0-50</option>
                        <option value="50-100">50-100</option>
                        <option value="100-200">100-200</option>
                        <option value="200-500">200-500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Information
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                        placeholder="Tell us about your current water setup, specific requirements, or any questions..."
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Request Free Quote
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact cards */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+33123456789"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Call Us</div>
                      <div className="font-semibold text-foreground">+33 1 23 45 67 89</div>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@aquapure.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email Us</div>
                      <div className="font-semibold text-foreground">contact@aquapure.com</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Visit Us</div>
                      <div className="font-semibold text-foreground">Paris, France</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Business Hours</div>
                      <div className="font-semibold text-foreground">Mon-Fri: 8am - 6pm</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-border">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  {[
                    "Response within 24 hours",
                    "Personalized savings analysis",
                    "Free on-site consultation",
                    "No-obligation quote",
                    "Flexible payment options",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick stats */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  Why Contact Us?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-xl">
                    <div className="text-2xl font-display font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
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
    </Layout>
  );
};

export default Contact;
