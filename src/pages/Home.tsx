import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Laptop, Shield, Zap, Sparkles, Cpu, Wifi } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-laptop.jpg";
import FuturisticParticles from "@/components/FuturisticParticles";
import AnimatedLines from "@/components/AnimatedLines";

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
      {/* Futuristic AI Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated background layers */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
          
          {/* Hero image with blend */}
          <div className="absolute inset-0 opacity-20">
            <img
              src={heroImage}
              alt="Lenovo Laptop Hero"
              className="w-full h-full object-cover mix-blend-luminosity"
            />
          </div>
          
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Futuristic particles */}
        <FuturisticParticles />
        
        {/* Animated lines */}
        <AnimatedLines />

        {/* Floating tech icons */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            className="absolute"
            style={{ left: "15%", top: "20%" }}
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cpu className="h-16 w-16 text-primary/20" />
          </motion.div>
          
          <motion.div
            className="absolute"
            style={{ right: "20%", top: "30%" }}
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <Wifi className="h-12 w-12 text-accent/20" />
          </motion.div>
          
          <motion.div
            className="absolute"
            style={{ left: "70%", bottom: "25%" }}
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-14 w-14 text-primary/20" />
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">AI-Powered Performance</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              Experience{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow-pulse">
                  Power
                </span>
                <motion.span
                  className="absolute -inset-1 bg-primary/20 blur-xl -z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
              <br />
              Speed. Style.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4 font-light"
            >
              Discover the Latest Lenovo Laptops Built for Your Success
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-2xl leading-relaxed"
            >
              Boost your productivity, enhance your creativity, and enjoy top-performance with Lenovo's latest range of sleek and powerful laptops. Perfect for students, professionals, creators & everyday use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                onClick={() => navigate("/products")} 
                className="text-lg px-8 shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 animate-glow-pulse"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Explore Laptops
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => navigate("/products")} 
                className="text-lg px-8 border-2 hover:bg-primary/5 backdrop-blur-sm"
              >
                Buy Now (Demo)
              </Button>
            </motion.div>

            {/* Feature stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-primary/10"
            >
              {[
                { label: "Ultra Fast", icon: Zap },
                { label: "Premium Design", icon: Sparkles },
                { label: "Long Battery", icon: Shield },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <stat.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
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
