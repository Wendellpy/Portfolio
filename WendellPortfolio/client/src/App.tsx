import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import { ThemeProvider, ThemeContextProvider } from "./components/ui/theme-provider";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <div className="min-h-screen bg-background text-foreground">
            <Router />
            <Toaster />
          </div>
        </ThemeProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}

export default App;