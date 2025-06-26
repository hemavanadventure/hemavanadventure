
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FullDayAdventures from "./pages/FullDayAdventures";
import OffPistGuiding from "./pages/OffPistGuiding";
import SkiSchool from "./pages/SkiSchool";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/hemavanadventure">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privatguide-topptur" element={<FullDayAdventures />} />
            <Route path="/off-pist-guidning" element={<OffPistGuiding />} />
            <Route path="/skidskola" element={<SkiSchool />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
