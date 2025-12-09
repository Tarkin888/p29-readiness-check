import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AssessmentProvider } from "./context/AssessmentContext";
import { ScrollToTop } from "./components/ScrollToTop";
import Landing from "./pages/Landing";
import CompanyProfile from "./pages/CompanyProfile";
import AssessmentSection from "./pages/AssessmentSection";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutAssessment from "./pages/AboutAssessment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AssessmentProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/assessment/profile" element={<CompanyProfile />} />
            <Route path="/assessment/section/:sectionId" element={<AssessmentSection />} />
            <Route path="/results" element={<Results />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about-assessment" element={<AboutAssessment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AssessmentProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
