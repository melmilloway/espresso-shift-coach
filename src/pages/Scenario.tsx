import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AppLayout from "@/components/AppLayout";
import scenarioImage from "@/assets/scenario-morning-rush.jpg";

const choices = [
  {
    id: 1,
    emoji: "🐾",
    text: "Step in calmly to guide the cat off the counter and coach the barista through what to do next.",
  },
  {
    id: 2,
    emoji: "🕓",
    text: "Pause the guest interaction to steady the moment, then coach the barista privately right after the situation so they can absorb it without an audience.",
  },
  {
    id: 3,
    emoji: "☕",
    text: "Take over the task yourself to keep service moving, then plan to explain the standard later when the floor is quiet and the barista can focus.",
  },
];

const Scenario = () => {
  const navigate = useNavigate();
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

  const handleSubmit = () => {
    if (selectedChoice !== null) {
      navigate("/feedback", { state: { choiceId: selectedChoice } });
    }
  };

  return (
    <AppLayout showBack showTimer>
      <div className="space-y-6 animate-slide-up">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            Scenario: The Morning Rush
          </h1>
          <p className="text-lg text-muted-foreground">
            A new barista is juggling drinks when a cat jumps on the counter.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-medium">
          <img 
            src={scenarioImage} 
            alt="Barista with cat on counter during morning rush" 
            className="w-full h-52 object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-base leading-relaxed text-foreground/90">
          Customers laugh, but one looks uneasy. The barista freezes, unsure what to do. 
          What do you do next?
        </p>

        {/* Choices */}
        <div className="space-y-3">
          {choices.map((choice) => (
            <Card
              key={choice.id}
              onClick={() => setSelectedChoice(choice.id)}
              className={`p-4 cursor-pointer transition-all ${
                selectedChoice === choice.id
                  ? "bg-accent border-2 border-primary shadow-medium"
                  : "bg-card hover:bg-muted border border-border shadow-soft"
              }`}
            >
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">{choice.emoji}</span>
                <p className="text-sm leading-relaxed text-foreground">
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
          Submit Choice
        </Button>
      </div>
    </AppLayout>
  );
};

export default Scenario;
