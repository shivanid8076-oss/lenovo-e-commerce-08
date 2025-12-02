import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import PaymentModal from "@/components/PaymentModal";
import ideapadImage from "@/assets/ideapad-slim.jpg";
import thinkpadImage from "@/assets/thinkpad.jpg";
import yogaImage from "@/assets/yoga-slim.jpg";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; price: string } | null>(null);

  const products = [
    {
      id: 1,
      name: "Lenovo IdeaPad Slim 5",
      price: "₹54,999",
      image: ideapadImage,
      featured: true,
      description: "A perfect combination of power, speed, and elegance.",
      highlights: [
        "11th/12th Gen Intel Processor",
        "Ultra Thin & Lightweight",
        "Full HD Display",
        "Long Battery Backup",
        "Best for Students, Office Work & Daily Use"
      ]
    },
    {
      id: 2,
      name: "Lenovo ThinkPad E14",
      price: "₹62,499",
      image: thinkpadImage,
      featured: false,
      description: "Ultra-durable business-grade laptop built for professionals.",
      highlights: [
        "Ultra-durable business-grade laptop",
        "Backlit keyboard",
        "Fingerprint sensor security",
        "Long-lasting performance"
      ]
    },
    {
      id: 3,
      name: "Lenovo Yoga Slim 7",
      price: "₹78,999",
      image: yogaImage,
      featured: false,
      description: "Flexible innovation meets premium design.",
      highlights: [
        "Flexible 360° touchscreen",
        "Premium lightweight body",
        "Perfect for creators & designers"
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Featured Laptops</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover premium Lenovo laptops designed for every need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="relative">
                  {product.featured && (
                    <Badge className="absolute top-4 right-4 z-10 bg-accent">
                      Featured
                    </Badge>
                  )}
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow space-y-4">
                  <div className="text-3xl font-bold text-primary">{product.price}</div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {product.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  <Button
                    className="flex-1"
                    onClick={() => setSelectedProduct({ name: product.name, price: product.price })}
                  >
                    Buy Now (Demo)
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <PaymentModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        productName={selectedProduct?.name || ""}
        price={selectedProduct?.price || ""}
      />
    </div>
  );
};

export default Products;
