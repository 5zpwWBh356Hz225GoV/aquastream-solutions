import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Les Coûts Cachés de l'Eau en Bouteille dans les Restaurants : Une Analyse Complète",
    excerpt: "Découvrez le véritable coût de l'eau en bouteille pour votre restaurant, incluant stockage, logistique, impact environnemental, et comment le passage aux systèmes filtrés peut transformer votre résultat net.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
    author: "Marie Laurent",
    date: "25 novembre 2024",
    readTime: "8 min de lecture",
    category: "Économies",
    slug: "couts-caches-eau-bouteille-restaurants",
    featured: true,
  },
  {
    id: 2,
    title: "La Science de l'Eau Parfaite : La Filtration Expliquée",
    excerpt: "Comprenez comment fonctionne la technologie de filtration moderne et pourquoi elle compte pour le goût et la sécurité. Du charbon actif à l'ultrafiltration, découvrez les secrets d'une eau d'excellence.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&h=500&fit=crop",
    author: "Dr. Jean-Paul Rousseau",
    date: "28 octobre 2024",
    readTime: "6 min de lecture",
    category: "Technologie",
    slug: "science-eau-parfaite-filtration",
    featured: false,
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Blog Idra
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Ressources pour les{" "}
              <span className="text-gradient-ocean">Professionnels de la Restauration</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Analyses approfondies sur les solutions d'eau, l'optimisation des coûts 
              et les technologies de filtration pour votre établissement.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {articles.map((article, index) => (
              <article 
                key={article.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <Link 
                  to={`/blog/${article.slug}`}
                  className={`relative overflow-hidden rounded-3xl group ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-72 lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {article.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      À la Une
                    </span>
                  )}
                </Link>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-4">
                    <Tag className="w-4 h-4" />
                    {article.category}
                  </span>
                  
                  <Link to={`/blog/${article.slug}`}>
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                  </Link>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm text-muted-foreground mb-8">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>

                  <Link to={`/blog/${article.slug}`}>
                    <Button variant="ocean" size="lg">
                      Lire l'Article
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
              Restez Informé des Actualités du Secteur
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Abonnez-vous à notre newsletter pour recevoir nos prochains articles 
              sur les solutions d'eau pour la restauration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Entrez votre email"
                className="flex-1 px-6 py-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50"
              />
              <Button variant="cta" size="lg">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
