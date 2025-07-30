import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import QuiSommesNous from "./pages/QuiSommesNous";
import NosServices from "./pages/NosServices";
import NosPartenaires from "./pages/NosPartenaires";
import Temoignages from "./pages/Temoignages";
import FAQ from "./pages/FAQ";
import NotreApplication from "./pages/NotreApplication";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import WhatsAppButton from "./components/WhatsAppButton";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/SENGARMI">
          <ScrollToTop />
          <ScrollToTopButton />
          <WhatsAppButton />
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
                <Route path="/nos-services" element={<NosServices />} />
                <Route path="/nos-partenaires" element={<NosPartenaires />} />
                <Route path="/temoignages" element={<Temoignages />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/notre-application" element={<NotreApplication />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
