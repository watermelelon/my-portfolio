import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Coldchain from "./pages/projects/coldchain";
import Mojito from "./pages/projects/mojito";
import Taxi from "./pages/projects/taxi";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
       <Routes>
  <Route path="/" element={<Index />} />
        <Route path="/projects/coldchain" element={<Coldchain />} />
        <Route path="/projects/mojito" element={<Mojito />} />
        <Route path="/projects/taxi" element={<Taxi />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
