import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lenovo Store
            </h3>
            <p className="text-sm text-muted-foreground">
              Your trusted destination for premium Lenovo laptops, designed for performance and modern productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <NavLink to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </NavLink>
              <NavLink to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Products
              </NavLink>
              <NavLink to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </NavLink>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <div className="flex flex-col space-y-2">
              <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </NavLink>
              <NavLink to="/warranty" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Warranty
              </NavLink>
              <NavLink to="/returns" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Returns
              </NavLink>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>📧 support@lenovostore.com</p>
              <p>📱 +91 98765 43210</p>
              <p>📍 New Delhi, India</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Lenovo Laptop Store — All Rights Reserved</p>
          <p className="mt-2">Designed for educational and demonstration purposes only. Not an official Lenovo store.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
