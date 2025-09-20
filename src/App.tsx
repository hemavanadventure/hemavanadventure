
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ToppturPrivatguide from "./pages/ToppturPrivatguide";
import OffPistGuiding from "./pages/OffPistGuiding";
import SkiSchool from "./pages/SkiSchool";
import ToppturHelgeland from "./pages/ToppturHelgeland";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            {/* Swedish routes (default, no prefix) */}
            <Route path="/" element={<Index />} />
            <Route path="/topptur-privatguide" element={<ToppturPrivatguide />} />
            <Route path="/off-pist-guiding" element={<OffPistGuiding />} />
            <Route path="/ski-school" element={<SkiSchool />} />
            <Route path="/topptur-helgeland" element={<ToppturHelgeland />} />
            
            {/* English routes (with /en prefix) */}
            <Route path="/en" element={<Index />} />
            <Route path="/en/topptur-privatguide" element={<ToppturPrivatguide />} />
            <Route path="/en/off-pist-guiding" element={<OffPistGuiding />} />
            <Route path="/en/ski-school" element={<SkiSchool />} />
            <Route path="/en/topptur-helgeland" element={<ToppturHelgeland />} />
            
            {/* Legacy routes for backwards compatibility */}
            <Route path="/offpist-skidskola" element={<SkiSchool />} />
            <Route path="/en/offpist-skidskola" element={<SkiSchool />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
