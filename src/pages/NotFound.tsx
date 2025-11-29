import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Droplets } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Droplets className="w-12 h-12 text-primary" />
          </div>
          
          <h1 className="font-display text-6xl sm:text-8xl font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Page Non Trouvée
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            La page que vous recherchez semble s'être évaporée. Revenons sur la bonne voie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="ocean" size="lg">
                <Home className="w-5 h-5" />
                Retour à l'Accueil
              </Button>
            </Link>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5" />
              Revenir en Arrière
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
