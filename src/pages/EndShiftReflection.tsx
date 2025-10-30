import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AppLayout from "@/components/AppLayout";
import reflectionImage from "@/assets/endshift-reflection.jpg";
import { toast } from "sonner";

const reflectionChoices = [
  {
    id: 1,
    emoji: "👍",
    text: "Yes — and it went well.",
  },
  {
    id: 2,
    emoji: "🤔",
    text: "Not yet, but I noticed a moment where I could have.",
  },
  {
    id: 3,
    emoji: "🕐",
    text: "No — it didn't come up today.",
  },
];

const EndShiftReflection = () => {
  const navigate = useNavigate();
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSubmit = () => {
    if (selectedChoice !== null) {
      setShowFeedback(true);
      toast.success("Thanks for reflecting on today!");
    }
  };

  const handleFinish = () => {
    toast.success("Great work today! See you tomorrow.");
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <AppLayout showBack>
      <div className="space-y-6 animate-slide-up">
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌙</span>
          <h1 className="text-2xl font-bold text-foreground">
            End of Shift Reflection
          </h1>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-medium">
          <img 
            src={reflectionImage} 
            alt="End of shift reflection moment" 
            className="w-full h-52 object-cover"
          />
        </div>

        {!showFeedback ? (
          <>
            {/* Reflection Prompt */}
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-foreground/90">
                Quick follow-up on today's tip: Earlier you practiced recognizing 
                and naming what someone did well.
              </p>
              <p className="text-base font-medium text-foreground">
                Did you get a chance to try it today?
              </p>
            </div>

            {/* Choices */}
            <div className="space-y-3">
              {reflectionChoices.map((choice) => (
                <Card
                  key={choice.id}
                  onClick={() => setSelectedChoice(choice.id)}
                  className={`p-4 cursor-pointer transition-all ${
                    selectedChoice === choice.id
                      ? "bg-accent border-2 border-primary shadow-medium"
                      : "bg-card hover:bg-muted border border-border shadow-soft"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl flex-shrink-0">{choice.emoji}</span>
                    <p className="text-sm font-medium text-foreground">
                      {choice.text}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={selectedChoice === null}
              size="lg"
              className="w-full bg-primary hover:bg-secondary text-primary-foreground font-semibold text-lg py-6 rounded-xl shadow-soft hover:shadow-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </Button>
          </>
        ) : (
          <>
            {/* Feedback Content */}
            <div className="space-y-4">
              <div className="bg-accent/30 border-l-4 border-primary rounded-lg p-4">
                <p className="text-base leading-relaxed text-foreground/90">
                  Thanks for checking in. This helps you spot real moments to use 
                  what you learned.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  Tomorrow's focus:
                </p>
                <p className="text-sm leading-relaxed text-foreground/90">
                  Spotting early signs of risk before they escalate.
                </p>
              </div>
            </div>

            {/* Finish Button */}
            <Button
              onClick={handleFinish}
              size="lg"
              className="w-full bg-primary hover:bg-secondary text-primary-foreground font-semibold text-lg py-6 rounded-xl shadow-soft hover:shadow-medium transition-all"
            >
              Finish Session
            </Button>
          </>
        )}
      </div>
    </AppLayout>
  );
};

export default EndShiftReflection;
