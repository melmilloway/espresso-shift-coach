import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const ShiftWrapUp = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    toast.success("You've got this!", {
      description: "See you next shift",
      duration: 3000,
    });
    setTimeout(() => navigate("/"), 500);
  };

  return (
    <AppLayout showBack={false}>
      <div className="space-y-6 animate-fade-in">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="bg-primary/10 rounded-full p-6">
            <CheckCircle2 className="w-16 h-16 text-primary" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            Great work today!
          </h1>
          <p className="text-lg text-muted-foreground">
            Here's what you practiced:
          </p>
        </div>

        {/* Summary Cards */}
        <div className="space-y-3">
          <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
            <p className="text-sm font-semibold text-foreground mb-1">
              Navigated a real scenario
            </p>
            <p className="text-sm text-foreground/80">
              You practiced making decisions under pressure
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
            <p className="text-sm font-semibold text-foreground mb-1">
              Learned leadership timing
            </p>
            <p className="text-sm text-foreground/80">
              You explored when and how to coach effectively
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-accent">
            <p className="text-sm font-semibold text-foreground mb-1">
              Got a coaching tip
            </p>
            <p className="text-sm text-foreground/80">
              Try giving specific positive feedback today
            </p>
          </div>
        </div>

        {/* Next Shift Preview */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            For your next shift:
          </h2>
          <p className="text-base leading-relaxed text-foreground/90">
            Look for one moment to give clear, specific positive feedback to a team member. Notice how it affects their confidence and the shift energy.
          </p>
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleBackToHome}
          size="lg"
          className="w-full bg-primary hover:bg-secondary text-primary-foreground font-semibold text-lg py-6 rounded-xl shadow-soft hover:shadow-medium transition-all"
        >
          Home
        </Button>
      </div>
    </AppLayout>
  );
};

export default ShiftWrapUp;
