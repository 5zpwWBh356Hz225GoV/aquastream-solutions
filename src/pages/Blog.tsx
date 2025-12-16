import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";

const featuredPost = {
  id: 1,
  title: "Les Coûts Cachés de l'Eau en Bouteille dans les Restaurants : Une Analyse Complète",
  excerpt: "Découvrez le véritable coût de l'eau en bouteille pour votre restaurant, incluant stockage, logistique, impact environnemental, et comment le passage aux systèmes filtrés peut transformer votre résultat net.",
  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
  author: "Marie Laurent",
  date: "25 novembre 2024",
  readTime: "8 min de lecture",
  category: "Économies",
};

const posts = [
  {
    id: 2,
    title: "5 Façons de Réduire l'Empreinte Carbone de Votre Restaurant",
    excerpt: "Étapes pratiques pour rendre votre établissement plus respectueux de l'environnement, en commençant par la gestion de l'eau.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
    author: "Pierre Dumont",
    date: "20 novembre 2024",
    readTime: "5 min de lecture",
    category: "Développement Durable",
  },
  {
    id: 3,
    title: "Conformité HACCP : Normes de Sécurité de l'Eau pour la Restauration",
    excerpt: "Comprendre les réglementations d'hygiène pour les systèmes de distribution d'eau dans l'industrie hôtelière.",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=300&fit=crop",
    author: "Dr. Sophie Martin",
    date: "15 novembre 2024",
    readTime: "7 min de lecture",
    category: "Conformité",
  },
  {
    id: 4,
    title: "Tendances Eau Gazeuse : Ce Que Veulent Vraiment les Clients",
    excerpt: "Une nouvelle étude révèle la demande croissante d'eau gazeuse dans les restaurants et comment en tirer parti.",
    image: "https://images.unsplash.com/photo-1527816106925-f3df4fa4a3f4?w=400&h=300&fit=crop",
    author: "Antoine Mercier",
    date: "10 novembre 2024",
    readTime: "4 min de lecture",
    category: "Tendances",
  },
  {
    id: 5,
    title: "Stratégie Eau pour Hôtels : Des Chambres aux Restaurants",
    excerpt: "Un guide complet pour implémenter des solutions d'eau dans tous les départements hôteliers.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    author: "Claire Bernard",
    date: "5 novembre 2024",
    readTime: "10 min de lecture",
    category: "Hôtellerie",
  },
  {
    id: 6,
    title: "La Science de l'Eau Parfaite : La Filtration Expliquée",
    excerpt: "Comprenez comment fonctionne la technologie de filtration moderne et pourquoi elle compte pour le goût et la sécurité.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop",
    author: "Dr. Jean-Paul Rousseau",
    date: "28 octobre 2024",
    readTime: "6 min de lecture",
    category: "Technologie",
    slug: "science-eau-parfaite-filtration",
  },
  {
    id: 7,
    title: "Expérience Client : Pourquoi l'Eau Compte Plus Que Vous Ne Le Pensez",
    excerpt: "Comment la qualité de l'eau que vous servez impacte la satisfaction des clients et les avis.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    author: "Marie Laurent",
    date: "22 octobre 2024",
    readTime: "5 min de lecture",
    category: "Expérience Client",
  },
];

const categories = [
  "Tous les Articles",
  "Économies",
  "Développement Durable",
  "Technologie",
  "Conformité",
  "Tendances",
  "Hôtellerie",
  "Expérience Client",
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
              Actualités pour les{" "}
              <span className="text-gradient-ocean">Professionnels de l'Hôtellerie</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Articles experts sur les solutions d'eau, l'optimisation des coûts, le développement durable 
              et les dernières tendances de l'industrie hôtelière.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-80 lg:h-[450px] object-cover"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                À la Une
              </span>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-4">
                <Tag className="w-4 h-4" />
                {featuredPost.category}
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </span>
              </div>

              <Link to="/blog/couts-caches-eau-bouteille-restaurants">
                <Button variant="ocean" size="lg">
                  Lire l'Article Complet
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">
            Derniers Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const articleLink = post.slug ? `/blog/${post.slug}` : "#";
              return (
                <Link key={post.id} to={articleLink}>
                  <article
                    className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated group h-full"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="font-display font-semibold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                        <span>{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Charger Plus d'Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
              Restez Informé des Actualités du Secteur
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Abonnez-vous à notre newsletter pour les dernières tendances, conseils et actualités 
              sur les solutions d'eau pour l'hôtellerie.
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
