import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react";

const BlogArticle = () => {
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
              Économies
            </span>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Les Coûts Cachés de l'Eau en Bouteille dans les Restaurants : Une Analyse Complète
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Marie Laurent
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                25 novembre 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min de lecture
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
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop"
              alt="Coûts cachés de l'eau en bouteille dans les restaurants"
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
                Introduction : l'eau en bouteille, une fausse évidence en restauration
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dans de nombreux restaurants, l'eau en bouteille est encore perçue comme un standard de qualité et de simplicité. Pourtant, derrière cette pratique largement répandue se cache une réalité bien plus complexe. Les coûts de l'eau en bouteille ne se limitent pas à son prix d'achat : ils impactent la rentabilité, l'organisation, l'image de marque et même la durabilité des équipements. À l'heure où les marges se réduisent et où les clients sont de plus en plus sensibles aux enjeux environnementaux, il devient essentiel de repenser ce modèle et d'envisager des alternatives comme les systèmes de filtration d'eau professionnels.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                Le coût réel de l'eau en bouteille : bien au-delà du prix d'achat
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                L'achat d'eau en bouteille représente une dépense continue et difficilement compressible. Palettes à commander, stocks à gérer, pertes liées à la casse ou aux invendus, immobilisation de trésorerie : autant de charges qui s'accumulent discrètement. Même lorsque l'eau est facturée au client, la marge réelle est souvent amoindrie par les coûts logistiques et de gestion. À l'inverse, un système de filtration pour restaurant transforme cette dépense récurrente en un investissement maîtrisé, avec des coûts prévisibles et amortissables dans le temps.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                Logistique et contraintes opérationnelles : un poids invisible au quotidien
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Stocker des bouteilles nécessite de l'espace, un bien précieux en restauration. À cela s'ajoutent les livraisons fréquentes, la manutention, le rangement et l'évacuation des déchets. Ces contraintes mobilisent du temps et de l'énergie pour les équipes, au détriment du cœur de métier : le service et l'expérience client. L'eau filtrée, produite directement sur place, élimine ces contraintes logistiques et simplifie considérablement l'exploitation quotidienne.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                Impact environnemental et image de marque : un enjeu commercial majeur
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Les consommateurs sont de plus en plus attentifs aux engagements écologiques des restaurants. Le plastique à usage unique et l'empreinte carbone liée au transport de l'eau en bouteille sont devenus des points de vigilance. Continuer à proposer exclusivement de l'eau embouteillée peut nuire à l'image d'un établissement, notamment auprès d'une clientèle sensible aux valeurs de durabilité. À l'inverse, communiquer sur l'utilisation d'une eau locale, filtrée et servie en carafe renforce une image moderne, responsable et engagée, tout en créant un véritable avantage concurrentiel.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                Les risques sanitaires et réglementaires à ne pas sous-estimer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Même si l'eau en bouteille bénéficie d'une image rassurante, elle n'est pas exempte de risques : variations de qualité, rappels de lots ou stockage inadapté peuvent affecter la confiance des clients. Par ailleurs, la réglementation impose aux restaurateurs de proposer de l'eau potable. Un système de filtration professionnel, correctement installé et entretenu, garantit une qualité d'eau constante, conforme aux normes et parfaitement traçable, réduisant ainsi les risques sanitaires et juridiques.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                L'usure prématurée des équipements : un coût indirect souvent ignoré
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La qualité de l'eau a un impact direct sur la longévité des équipements professionnels. Le calcaire et certaines impuretés accélèrent l'usure des lave-vaisselle, machines à café, fours vapeur et chauffe-eau, entraînant pannes, surconsommation de produits lessiviels et frais de maintenance élevés. Un système de filtration et de traitement de l'eau protège ces équipements, prolonge leur durée de vie et réduit significativement les coûts d'entretien, générant des économies indirectes mais substantielles.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                L'évolution des attentes clients : une opportunité à saisir
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Aujourd'hui, de nombreux clients acceptent, voire privilégient, l'eau filtrée lorsqu'elle est clairement expliquée et valorisée. Une eau de qualité, fraîche, au goût neutre ou amélioré, servie dans une belle carafe, est perçue comme un choix cohérent et responsable. Bien présentée sur la carte et par le personnel, l'eau filtrée devient un élément de l'expérience client et un symbole d'engagement, plutôt qu'une simple mesure d'économie.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                Rentabilité et retour sur investissement d'un système de filtration
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sur le plan financier, remplacer l'achat de bouteilles par un système de filtration professionnel permet de réduire drastiquement les coûts à moyen et long terme. L'investissement initial est rapidement compensé par la suppression des achats d'eau, la baisse des frais logistiques, la réduction des coûts de maintenance des équipements et la valorisation de l'image de marque. Dans de nombreux restaurants, le retour sur investissement est atteint en quelques mois, tout en améliorant la performance globale de l'établissement.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4 mt-12">
                Conclusion : passer de l'eau en bouteille à l'eau filtrée, un choix stratégique
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Les coûts cachés de l'eau en bouteille sont nombreux et impactent directement la rentabilité et la durabilité des restaurants. Adopter un système de filtration d'eau professionnel, ce n'est pas seulement réduire des dépenses : c'est optimiser l'exploitation, protéger les équipements, renforcer son image et répondre aux attentes actuelles des clients. Pour tout restaurateur souhaitant éliminer l'achat de bouteilles d'eau et reprendre le contrôle de ses coûts, la filtration de l'eau s'impose comme une solution logique, rentable et porteuse de valeur.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mt-12">
                <p className="text-foreground font-medium leading-relaxed">
                  Mettre en place un système de filtration adapté commence par un diagnostic personnalisé de votre établissement. Un audit de votre consommation et de la qualité de votre eau permettra de chiffrer précisément les économies réalisables et de choisir la solution la plus performante. Passer à l'eau filtrée, c'est transformer une contrainte invisible en un véritable levier de performance pour votre restaurant.
                </p>
              </div>
            </article>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Prêt à réduire vos coûts d'eau ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Demandez un audit gratuit de votre établissement et découvrez combien vous pourriez économiser.
              </p>
              <Link to="/contact">
                <Button variant="ocean" size="lg">
                  Demander un Audit Gratuit
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

export default BlogArticle;
