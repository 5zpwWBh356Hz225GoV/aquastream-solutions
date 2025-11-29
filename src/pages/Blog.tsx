import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";

const featuredPost = {
  id: 1,
  title: "The Hidden Costs of Bottled Water in Restaurants: A Comprehensive Analysis",
  excerpt: "Discover the true cost of bottled water for your restaurant, including storage, logistics, environmental impact, and how switching to filtered systems can transform your bottom line.",
  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
  author: "Marie Laurent",
  date: "November 25, 2024",
  readTime: "8 min read",
  category: "Cost Savings",
};

const posts = [
  {
    id: 2,
    title: "5 Ways to Reduce Your Restaurant's Carbon Footprint",
    excerpt: "Practical steps to make your establishment more environmentally friendly, starting with water management.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
    author: "Pierre Dumont",
    date: "November 20, 2024",
    readTime: "5 min read",
    category: "Sustainability",
  },
  {
    id: 3,
    title: "HACCP Compliance: Water Safety Standards for Food Service",
    excerpt: "Understanding the hygiene regulations for water dispensing systems in the hospitality industry.",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=300&fit=crop",
    author: "Dr. Sophie Martin",
    date: "November 15, 2024",
    readTime: "7 min read",
    category: "Compliance",
  },
  {
    id: 4,
    title: "Sparkling Water Trends: What Customers Really Want",
    excerpt: "New research reveals growing demand for sparkling water in restaurants and how to capitalize on it.",
    image: "https://images.unsplash.com/photo-1527816106925-f3df4fa4a3f4?w=400&h=300&fit=crop",
    author: "Antoine Mercier",
    date: "November 10, 2024",
    readTime: "4 min read",
    category: "Trends",
  },
  {
    id: 5,
    title: "Hotel Water Strategy: From Rooms to Restaurants",
    excerpt: "A comprehensive guide to implementing water solutions across all hotel departments.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    author: "Claire Bernard",
    date: "November 5, 2024",
    readTime: "10 min read",
    category: "Hotels",
  },
  {
    id: 6,
    title: "The Science of Perfect Water: Filtration Explained",
    excerpt: "Understand how modern filtration technology works and why it matters for taste and safety.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop",
    author: "Dr. Jean-Paul Rousseau",
    date: "October 28, 2024",
    readTime: "6 min read",
    category: "Technology",
  },
  {
    id: 7,
    title: "Customer Experience: Why Water Matters More Than You Think",
    excerpt: "How the quality of water you serve impacts guest satisfaction and reviews.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    author: "Marie Laurent",
    date: "October 22, 2024",
    readTime: "5 min read",
    category: "Customer Experience",
  },
];

const categories = [
  "All Posts",
  "Cost Savings",
  "Sustainability",
  "Technology",
  "Compliance",
  "Trends",
  "Hotels",
  "Customer Experience",
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              AquaPure Blog
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Insights for{" "}
              <span className="text-gradient-ocean">Hospitality Professionals</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert articles on water solutions, cost optimization, sustainability, 
              and the latest trends in the hospitality industry.
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
                Featured
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

              <Button variant="ocean" size="lg">
                Read Full Article
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated group"
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
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
              Stay Updated with Industry Insights
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest trends, tips, and news 
              in hospitality water solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50"
              />
              <Button variant="cta" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
