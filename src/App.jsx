import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import AnimatedBackground from "./components/AnimatedBackground";
import { ThemeProvider } from "./components/ThemeProvider";

import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" enableSystem={false} storageKey="vite-ui-theme-v2" attribute="class">
        <TooltipProvider>
          {loading ? (
            <SplashScreen onComplete={() => setLoading(false)} />
          ) : (
            <>
              <Toaster />
              <Sonner />
              <AnimatedBackground />
              <HashRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </HashRouter>
            </>
          )}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
