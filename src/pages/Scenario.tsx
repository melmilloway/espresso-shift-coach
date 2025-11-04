import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AppLayout from "@/components/AppLayout";
import catCafe2 from "@/assets/cat-cafe-2.png";

const choices = [
  {
    id: 1,
    text: "Step in calmly to guide the cat off the counter and coach the barista through what to do next.",
  },
  {
    id: 2,
    text: "Pause the guest interaction to steady the moment, then coach the barista privately right after the situation.",
  },
  {
    id: 3,
    text: "Take over the task yourself to keep service moving, then plan to explain the standard later.",
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
    <AppLayout showBack showTimer timerText="5 min" currentStep={2} totalSteps={5}>
      <div className="space-y-6 animate-slide-up">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-heading">
            Scenario: The morning rush
          </h1>
          <p>
            A new barista is juggling drinks when a cat jumps on the counter.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-medium">
          <img 
            src={catCafe2} 
            alt="Barista with cat on counter during morning rush" 
            className="w-full h-60 object-cover"
          />
        </div>

        {/* Description */}
        <p>
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
              <p className="text-base leading-normal font-semibold text-foreground">
                {choice.text}
              </p>
            </Card>
          ))}
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          disabled={selectedChoice === null}
          size="lg"
          className="w-full font-semibold text-lg py-6 rounded-xl shadow-soft hover:shadow-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit choice
        </Button>
      </div>
    </AppLayout>
  );
};

export default Scenario;
