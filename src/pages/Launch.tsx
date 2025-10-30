import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";
import launchScene from "@/assets/cafe-launch-scene.jpg";

const Launch = () => {
  const navigate = useNavigate();

  return (
    <AppLayout showTimer timerText="⏱ 5 min">
      <div className="space-y-6 animate-slide-up">
        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden shadow-medium">
          <img 
            src={launchScene} 
            alt="WhiskerBeans Café scene with barista and cats" 
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Manager Espresso Shot
            </h1>
            <p className="text-xl font-medium text-muted-foreground">
              Ready to sharpen your coaching reflexes?
            </p>
          </div>

          <p className="text-base leading-relaxed text-foreground/90">
            You'll run through a short café scenario, try out a quick coaching decision, 
            and get one tip to apply before your next shift.
          </p>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={() => navigate("/scenario")}
          size="lg"
          className="w-full bg-primary hover:bg-secondary text-primary-foreground font-semibold text-lg py-6 rounded-xl shadow-soft hover:shadow-medium transition-all"
        >
          Start scenario
        </Button>
      </div>
    </AppLayout>
  );
};

export default Launch;
