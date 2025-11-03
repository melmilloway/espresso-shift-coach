import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/AppLayout";
import feedbackImage from "@/assets/cat-cafe-3.png";

const Feedback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const choiceId = location.state?.choiceId || 1;

  const getFeedbackContent = () => {
    switch (choiceId) {
      case 1:
        return {
          choice: "Step in calmly and coach in the moment.",
          feedback: "Redirecting in the moment helps everyone stay calm. Customers see leadership in action, and the barista learns by example. Waiting too long can make small moments snowball.",
          takeaway: "Calm correction in real time teaches confidence and protects the vibe.",
        };
      case 2:
        return {
          choice: "Pause and coach privately after.",
          feedback: "Taking a moment to pause shows thoughtfulness, but in fast-moving situations, immediate guidance can prevent escalation. The barista might feel uncertain in the moment without your support.",
          takeaway: "Balance timing—some moments need immediate action, others can wait for a private conversation.",
        };
      case 3:
        return {
          choice: "Take over and explain later.",
          feedback: "Stepping in keeps service flowing, but the barista misses the learning opportunity. They may not connect the lesson to the real situation later on.",
          takeaway: "When possible, coach in the moment to make learning stick. Taking over should be a last resort.",
        };
      default:
        return {
          choice: "Step in calmly and coach in the moment.",
          feedback: "Redirecting in the moment helps everyone stay calm.",
          takeaway: "Calm correction in real time teaches confidence.",
        };
    }
  };

  const content = getFeedbackContent();

  return (
    <AppLayout showBack showTimer timerText="5 min" currentStep={3} totalSteps={5}>
      <div className="space-y-6 animate-slide-up">
        {/* Header */}
        <div className="space-y-2">
          <h1>
            How that played out
          </h1>
          <p style={{ color: '#605145', fontSize: '1.125rem', lineHeight: '1.5rem', fontWeight: 600 }}>
            Your choice: {content.choice}
          </p>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-medium">
          <img 
            src={feedbackImage} 
            alt="Calm leadership and coaching moment" 
            className="w-full h-52 object-cover"
          />
        </div>

        {/* Feedback Content */}
        <div className="space-y-4">
          <p style={{ color: '#605145', fontSize: '1.125rem', lineHeight: '1.5rem', fontWeight: 600 }}>
            {content.feedback}
          </p>

          <div className="bg-accent/30 border-l-4 border-primary rounded-lg p-4">
            <p className="text-sm font-semibold text-foreground">
              Takeaway:
            </p>
            <p className="text-sm leading-relaxed text-foreground/90 mt-1">
              {content.takeaway}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={() => navigate("/scenario")}
            variant="outline"
            size="lg"
            className="flex-1 border-2 border-primary text-foreground font-semibold py-6 rounded-xl hover:bg-accent transition-all"
          >
            Retry scenario
          </Button>
          <Button
            onClick={() => navigate("/midshift-tip")}
            size="lg"
            className="flex-1 bg-primary hover:bg-secondary text-primary-foreground font-semibold py-6 rounded-xl shadow-soft hover:shadow-medium transition-all"
          >
            Continue
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Feedback;
