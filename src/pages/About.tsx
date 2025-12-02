import { Card } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower students, professionals, and creators with powerful, durable, and stylish Lenovo laptops."
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "Clear and honest product descriptions with user-friendly and responsive UI design."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Focus on quality and authenticity. Every product is 100% genuine and certified."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Model payment demo for project learning and continuous improvement."
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Us</h1>
          
          <div className="prose prose-lg max-w-none space-y-8 mb-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Lenovo Laptop Store is an online platform designed to showcase the best Lenovo laptops with clean design, clear details, and easy navigation. We bring you the latest technology with stylish designs and powerful features — making your study, work, and entertainment smoother than ever.
              </p>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                    <value.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10">
              <h2 className="text-3xl font-bold mb-4">What Makes Us Different?</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Clear and honest product descriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>User-friendly and responsive UI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Model payment demo for project learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span>Focus on quality and authenticity</span>
                </li>
              </ul>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
