import { Card } from "@/components/ui/card";
import { Shield, Wrench, FileCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Warranty = () => {
  const warrantyFeatures = [
    {
      icon: Shield,
      title: "1-Year Standard Warranty",
      description: "All Lenovo products come with comprehensive manufacturer warranty coverage."
    },
    {
      icon: Wrench,
      title: "Free Service Center Support",
      description: "Access to authorized Lenovo service centers across India."
    },
    {
      icon: FileCheck,
      title: "Online Service Request",
      description: "Easy online registration and tracking of your service requests."
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast repair and replacement services with minimal downtime."
    }
  ];

  const coveredIssues = [
    "Hardware defects and malfunctions",
    "Keyboard and touchpad issues",
    "Battery and charging problems",
    "Screen defects and display issues",
    "Internal component failures",
    "Pre-installed software issues"
  ];

  const notCovered = [
    "Physical damage or liquid spills",
    "Accidental damage",
    "Software issues from third-party applications",
    "Cosmetic damage that doesn't affect functionality",
    "Unauthorized repairs or modifications"
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Warranty & Support</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive protection for your Lenovo laptop
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {warrantyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                What's Covered
              </h2>
              <ul className="space-y-3">
                {coveredIssues.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">What's Not Covered</h2>
              <ul className="space-y-3 text-muted-foreground">
                {notCovered.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-8 mt-8 bg-muted/50">
            <h2 className="text-2xl font-bold mb-4">How to Claim Warranty</h2>
            <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
              <li>Keep your purchase receipt and warranty card safe</li>
              <li>Contact our support team or visit Lenovo service center</li>
              <li>Provide product details and describe the issue</li>
              <li>Our team will guide you through the process</li>
              <li>Track your service request online</li>
            </ol>
            <p className="mt-6 text-sm text-muted-foreground">
              * This is sample warranty information for demonstration purposes.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Warranty;
