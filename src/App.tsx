
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Mentorship from "./pages/Mentorship";
import Learning from "./pages/Learning";
import Highlights from "./pages/Highlights";
import FundingRequest from "./pages/FundingRequest";
import QuizProgram from "./pages/QuizProgram";
import Institutes from "./pages/Institutes";
import InstituteDetails from "./pages/InstituteDetails";
import LifeLab from "./pages/LifeLab";
import Podcast from "./pages/Podcast";
import Messaging from "./pages/Messaging";
import Opportunities from "./pages/Opportunities";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/funding-request" element={<FundingRequest />} />
          <Route path="/quiz-program" element={<QuizProgram />} />
          <Route path="/institutes" element={<Institutes />} />
          <Route path="/institutes/:id" element={<InstituteDetails />} />
          <Route path="/life-lab" element={<LifeLab />} />
          <Route path="/podcasts" element={<Podcast />} />
          <Route path="/messages" element={<Messaging />} />
          <Route path="/opportunities" element={<Opportunities />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
