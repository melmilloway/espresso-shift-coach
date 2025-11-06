import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

import Launch from "./pages/Launch";
import Scenario from "./pages/Scenario";
import Feedback from "./pages/Feedback";
import MidShiftTip from "./pages/MidShiftTip";
import ShiftWrapUp from "./pages/ShiftWrapUp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="/scenario" element={<Scenario />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/midshift-tip" element={<MidShiftTip />} />
        <Route path="/shift-wrapup" element={<ShiftWrapUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
