import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";
import tipImage from "@/assets/midshift-tip.jpg";

const MidShiftTip = () => {
  const navigate = useNavigate();

  return (
    <AppLayout showBack>
      <div className="space-y-6 animate-slide-up">
        {/* Header with Badge */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">☕</span>
          <h1 className="text-2xl font-bold text-foreground">
            Mid-Shift Tip
          </h1>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-medium">
          <img 
            src={tipImage} 
            alt="Coffee break with coaching notes" 
            className="w-full h-52 object-cover"
          />
        </div>

        {/* Tip Content */}
        <div className="space-y-4">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Daily Tip
            </h2>
            <p className="text-base leading-relaxed text-foreground/90">
              Try this today: When you notice a barista doing something right, tell them why it worked.
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-secondary">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              Example:
            </p>
            <p className="text-sm italic leading-relaxed text-foreground/80">
              "I liked how you handled that customer calmly when the cat jumped. 
              Your tone kept everyone relaxed."
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={() => navigate("/endshift-reflection")}
          size="lg"
          className="w-full bg-primary hover:bg-secondary text-primary-foreground font-semibold text-lg py-6 rounded-xl shadow-soft hover:shadow-medium transition-all"
        >
          Got it
        </Button>
      </div>
    </AppLayout>
  );
};

export default MidShiftTip;
