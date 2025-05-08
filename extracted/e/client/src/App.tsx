import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import ResumeImproved from "@/pages/resume-improved";
import Empresas from "@/pages/empresas";
import ContactImproved from "@/pages/contact-improved";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-16"> {/* pt-16 to account for fixed navbar */}
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={ResumeImproved} />
          <Route path="/empresas" component={Empresas} />
          <Route path="/contact" component={ContactImproved} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </LanguageProvider>
  );
}

export default App;
