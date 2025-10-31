
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Vacancies from "./pages/Vacancies";
import VacancyDetail from "./pages/VacancyDetail";
import Map from "./pages/Map";
import AIAssistant from "./pages/AIAssistant";
import Business from "./pages/Business";
import Blog from "./pages/Blog";
import ArticleDetail from "./pages/ArticleDetail";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

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
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/vacancy/:id" element={<VacancyDetail />} />
          <Route path="/map" element={<Map />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/business" element={<Business />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;