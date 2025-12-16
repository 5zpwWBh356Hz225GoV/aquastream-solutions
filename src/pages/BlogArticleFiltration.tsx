import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react";

const BlogArticleFiltration = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au Blog
            </Link>

            <span className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-4">
              <Tag className="w-4 h-4" />
              Technologie
            </span>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              La Science de l'Eau Parfaite : La Filtration Expliquée
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Dr. Jean-Paul Rousseau
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                28 octobre 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                6 min de lecture
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1200&h=600&fit=crop"
              alt="La science de la filtration de l'eau"
              className="w-full h-64 sm:h-80 lg:h-[450px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-8">
                Introduction : pourquoi la qualité de l'eau est stratégique en restauration
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                L'eau est l'ingrédient le plus utilisé dans un restaurant, pourtant c'est aussi l'un des moins maîtrisés. Elle entre dans la préparation des plats, des boissons chaudes, du café, du thé, de la glace et du lavage de la vaisselle. Une eau de qualité irrégulière peut altérer le goût, nuire à l'expérience client et accélérer l'usure des équipements. Comprendre la science de la filtration de l'eau permet aux restaurateurs de transformer une ressource banale en un véritable atout de qualité, de performance et de différenciation.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                Comprendre la composition de l'eau du réseau
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                L'eau du réseau est potable et conforme aux normes sanitaires, mais sa composition varie selon les régions. Elle peut contenir du chlore, des chloramines, des sédiments, des matières organiques, des micro-organismes et des minéraux responsables du calcaire. Ces éléments ne sont pas forcément dangereux pour la santé, mais ils ont un impact direct sur le goût, les odeurs, l'aspect de l'eau et la longévité des installations professionnelles. La filtration ne vise donc pas à rendre l'eau potable, mais à l'optimiser pour un usage gastronomique et technique.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                La filtration au charbon actif : la base d'une eau au goût maîtrisé
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La filtration au charbon actif est l'une des technologies les plus répandues et les plus efficaces pour améliorer la qualité organoleptique de l'eau. Le charbon actif agit par adsorption : il capte le chlore, les composés responsables des mauvaises odeurs et des goûts indésirables, ainsi qu'une partie des polluants organiques. Le résultat est une eau plus douce en bouche, neutre et agréable, idéale pour le service en carafe, les boissons chaudes et la préparation culinaire. En restauration, le charbon actif constitue souvent la première étape indispensable d'un système de filtration performant.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                L'ultrafiltration : une barrière physique contre les impuretés
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                L'ultrafiltration repose sur l'utilisation de membranes très fines capables de retenir les particules en suspension, les bactéries et certains micro-organismes, tout en laissant passer les minéraux naturellement présents dans l'eau. Cette technologie offre un excellent équilibre entre sécurité sanitaire et respect du profil minéral de l'eau. Contrairement à des procédés plus agressifs, l'ultrafiltration ne dénature pas l'eau : elle la clarifie et la sécurise. Dans un restaurant, elle garantit une eau limpide et constante, parfaitement adaptée au service et à la production alimentaire.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                La désinfection par UV : une sécurité microbiologique sans chimie
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Le traitement par ultraviolets est une solution de désinfection physique particulièrement appréciée en milieu professionnel. Les UV neutralisent les micro-organismes en empêchant leur reproduction, sans ajout de produits chimiques ni modification du goût de l'eau. Ce procédé agit comme une assurance sanitaire supplémentaire, notamment dans les établissements à fort débit ou sensibles à la constance de la qualité de l'eau. En complément de la filtration, les UV renforcent la sécurité microbiologique tout en préservant la pureté et les qualités gustatives de l'eau servie.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                L'antiscalant : protéger les équipements et la performance
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Le calcaire est l'un des principaux ennemis des équipements de restauration. Il provoque des dépôts, réduit les performances thermiques et entraîne pannes et surconsommation énergétique. L'antiscalant agit en empêchant la cristallisation du calcium et du magnésium, responsables du tartre. Contrairement à un adoucisseur classique, il limite la formation de calcaire sans modifier la composition minérale de l'eau. Pour les machines à café, les lave-vaisselle et les fours vapeur, l'antiscalant est un allié discret mais essentiel pour prolonger la durée de vie du matériel et réduire les coûts de maintenance.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                La synergie des technologies : vers une eau parfaitement équilibrée
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chaque technologie de filtration répond à un besoin précis, mais c'est leur combinaison intelligente qui permet d'obtenir une eau réellement adaptée à la restauration. Le charbon actif améliore le goût, l'ultrafiltration sécurise et clarifie, les UV désinfectent et l'antiscalant protège les équipements. Ensemble, ces solutions créent une eau stable, savoureuse et fiable, capable de répondre aux exigences du service, de la cuisine et des appareils professionnels. Cette approche globale garantit une qualité constante, indépendamment des variations du réseau.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                Une eau maîtrisée pour une expérience client supérieure
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Servir une eau filtrée de haute qualité n'est plus un détail. C'est un signal fort envoyé aux clients sur l'exigence et le professionnalisme de l'établissement. Une eau agréable rehausse la perception des plats et des boissons, améliore l'expérience globale et renforce la cohérence d'une démarche qualitative et responsable. En expliquant simplement la démarche de filtration, le restaurant transforme un choix technique en argument de confiance et de différenciation.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                Conclusion : la filtration, une science au service de la rentabilité
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La science de l'eau parfaite repose sur la compréhension et la maîtrise de technologies complémentaires. Investir dans un système de filtration professionnel intégrant charbon actif, ultrafiltration, UV et antiscalant permet d'offrir une eau d'excellence, de protéger les équipements et de réduire les coûts liés à l'entretien et à l'achat d'eau en bouteille. Pour les restaurateurs, la filtration de l'eau n'est pas une dépense supplémentaire, mais un levier stratégique de qualité, de performance et de rentabilité durable.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mt-12">
                <p className="text-foreground font-medium leading-relaxed">
                  Mettre en place la bonne solution commence par une analyse précise de la qualité de l'eau et des usages de l'établissement. Un système bien dimensionné garantit une eau parfaite au quotidien, transformant une ressource invisible en un véritable pilier de l'excellence en restauration.
                </p>
              </div>
            </article>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Découvrez nos solutions de filtration
              </h3>
              <p className="text-muted-foreground mb-6">
                Nos experts vous accompagnent pour choisir le système adapté à votre établissement.
              </p>
              <Link to="/contact">
                <Button variant="ocean" size="lg">
                  Demander une Consultation
                </Button>
              </Link>
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour au Blog
              </Link>
              <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                Partager
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticleFiltration;
