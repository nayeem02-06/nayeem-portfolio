/**
 * Midnight Signal style reminder: use an ink-dark, precise, low-noise foundation;
 * structural clarity is the visual ornament.
 */
import NotFound from "@/pages/NotFound";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

const ArcStudio = lazy(() => import("./pages/ArcStudio"));
const BeatOfDhaka = lazy(() => import("./pages/BeatOfDhaka"));

function VentureLoading() {
  return <main className="route-loading">LOADING SIGNAL...</main>;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/arc-studio"><Suspense fallback={<VentureLoading />}><ArcStudio /></Suspense></Route>
      <Route path="/beat-of-dhaka"><Suspense fallback={<VentureLoading />}><BeatOfDhaka /></Suspense></Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}

export default App;
