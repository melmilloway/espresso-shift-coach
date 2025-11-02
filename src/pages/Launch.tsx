import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";
import catCafe from "@/assets/cat-cafe.png";

const Launch = () => {
  const navigate = useNavigate();

  return (
    <AppLayout showTimer timerText="5 min" currentStep={1} totalSteps={5}>
      <div className="space-y-6 animate-slide-up">
        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden shadow-medium">
          <img 
            src={catCafe} 
            alt="WhiskerBeans Café scene with barista and cats" 
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="font-heading" style={{ fontSize: '2.35rem', lineHeight: '2.25rem' }}>
              Manager Espresso Shot
            </h1>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.5rem', fontWeight: 600 }}>
              Ready to sharpen your coaching reflexes?
            </p>
          </div>

          <p>
            You'll run through a short café scenario, try out a quick coaching decision, 
            and get one tip to apply before your next shift.
          </p>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={() => navigate("/scenario")}
          size="lg"
          className="w-full font-semibold text-lg py-6 rounded-xl shadow-soft hover:shadow-medium transition-all"
        >
          Start scenario
        </Button>
      </div>
    </AppLayout>
  );
};

export default Launch;
