import { Card } from "@/components/ui/card";
import { Package, RefreshCw, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Returns = () => {
  const returnSteps = [
    {
      icon: Package,
      title: "Step 1: Initiate Return",
      description: "Contact us within 7 days of delivery to start the return process."
    },
    {
      icon: CheckCircle,
      title: "Step 2: Verification",
      description: "Our team will verify the product condition and eligibility."
    },
    {
      icon: RefreshCw,
      title: "Step 3: Product Pickup",
      description: "We'll arrange pickup of the product from your location."
    },
    {
      icon: Clock,
      title: "Step 4: Refund Processing",
      description: "Refund will be processed within 5-7 business days after verification."
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Return & Refund Policy</h1>
            <p className="text-xl text-muted-foreground">
              Easy returns and hassle-free refunds (Demo policy)
            </p>
          </div>

          <Card className="p-8 mb-8 bg-gradient-to-br from-primary/10 to-accent/10">
            <h2 className="text-2xl font-bold mb-6">Return Conditions</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Product must be returned within 7 days of delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Laptop should be unused and in original condition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Original box, packaging, and all accessories must be included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>Product invoice and warranty card must be provided</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span>No physical damage or signs of use</span>
              </li>
            </ul>
          </Card>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Return Process</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {returnSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                    <step.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Refund Conditions</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Refund processed within 5-7 business days after verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Amount credited to original payment method</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Shipping charges are non-refundable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Bank processing may take additional 3-5 days</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-muted/50">
              <h2 className="text-2xl font-bold mb-6">Non-Returnable Items</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-destructive">✗</span>
                  <span>Products with physical damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive">✗</span>
                  <span>Items used or installed software</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive">✗</span>
                  <span>Missing accessories or packaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive">✗</span>
                  <span>Products beyond 7-day return window</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 mt-8 border-primary/20">
            <p className="text-center text-muted-foreground">
              <strong>Important Notice:</strong> This return and refund policy is sample content created for
              educational and demonstration purposes only. This is not an official Lenovo store policy.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Returns;
