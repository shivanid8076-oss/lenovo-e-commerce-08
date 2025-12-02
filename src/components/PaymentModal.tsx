import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  price: string;
}

const PaymentModal = ({ isOpen, onClose, productName, price }: PaymentModalProps) => {
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Payment Successful! 🎉",
      description: "This is a demonstration only. No real transaction occurred.",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            Demo Payment Gateway
          </DialogTitle>
          <DialogDescription>
            This is a model payment page for demonstration purposes only. No real transaction will occur.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="bg-muted/50 p-4 rounded-lg space-y-1">
            <p className="text-sm text-muted-foreground">Product</p>
            <p className="font-semibold">{productName}</p>
            <p className="text-2xl font-bold text-primary">{price}</p>
          </div>

          <form onSubmit={handlePayment} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <div className="relative">
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  defaultValue="4532 1234 5678 9010"
                />
                <CreditCard className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" maxLength={5} defaultValue="12/25" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" maxLength={3} defaultValue="123" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Cardholder Name</Label>
              <Input id="name" placeholder="John Doe" defaultValue="Demo User" />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                Pay Now (Demo Only)
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>

          <p className="text-xs text-center text-muted-foreground">
            ⚠️ This is only a mock design for educational purposes
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
