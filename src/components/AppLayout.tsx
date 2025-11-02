import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/whiskerbeans-logo.png";

interface AppLayoutProps {
  children: ReactNode;
  showBack?: boolean;
  showTimer?: boolean;
  timerText?: string;
  currentStep?: number;
  totalSteps?: number;
}

const AppLayout = ({ children, showBack = false, showTimer = false, timerText = "⏱ 5 min", currentStep, totalSteps = 5 }: AppLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {showBack && location.pathname !== "/" && (
                <button
                  onClick={() => navigate(-1)}
                  className="p-2 -ml-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label="Go back"
                >
                  <ArrowLeft className="h-5 w-5 text-foreground" />
                </button>
              )}
              <img src={logo} alt="WhiskerBeans" className="w-14 h-14" />
            </div>
            
            {showTimer && (
              <div className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                {timerText}
              </div>
            )}
          </div>
          
          {/* Progress Bar */}
          {currentStep !== undefined && (
            <div className="flex gap-1 mt-3">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className="h-1 flex-1 rounded-full bg-muted overflow-hidden"
                >
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: index < currentStep ? '100%' : '0%' }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 py-6 animate-fade-in">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
