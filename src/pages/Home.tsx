import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Laptop, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-laptop.jpg";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Laptop, title: "100% Genuine Models", description: "All Lenovo laptops are authentic and certified" },
    { icon: Zap, title: "Latest Technology", description: "Powered by latest processors and features" },
    { icon: Shield, title: "Warranty Included", description: "1-year manufacturer warranty on all products" },
    { icon: CheckCircle, title: "Student & Work Friendly", description: "Perfect for productivity and entertainment" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Lenovo Laptop Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Experience Power.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Speed. Style.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4"
            >
              Discover the Latest Lenovo Laptops Built for Your Success.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
            >
              Boost your productivity, enhance your creativity, and enjoy top-performance with Lenovo's latest range of sleek and powerful laptops. Perfect for students, professionals, creators & everyday use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" onClick={() => navigate("/products")} className="text-lg px-8">
                Explore Laptops
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/products")} className="text-lg px-8">
                Buy Now (Demo)
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Shop With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted destination for premium Lenovo laptops with unbeatable features
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-primary-foreground"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Shop Now & Explore the Future of Computing
            </h2>
            <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
              High-performance Lenovo laptops at the best value. Fast, smooth, and portable — designed for your lifestyle.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/products")}
              className="text-lg px-8"
            >
              View All Products
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
