import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PolicePatrolLogin from "./pages/PolicePatrolLogin";
import PolicePatrolDashboard from "./pages/PolicePatrolDashboard";
import PolicePatrolVehicleDetails from "./pages/PolicePatrolVehicleDetails";
import CommandCenterLogin from "./pages/CommandCenterLogin";
import CommandCenterDashboard from "./pages/CommandCenterDashboard";
import CommandCenterReports from "./pages/CommandCenterReports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Police Patrol App Routes */}
          <Route path="/police-patrol/login" element={<PolicePatrolLogin />} />
          <Route
            path="/police-patrol/dashboard"
            element={<PolicePatrolDashboard />}
          />
          <Route
            path="/police-patrol/vehicle/:plate"
            element={<PolicePatrolVehicleDetails />}
          />
          {/* Command Center App Routes */}
          <Route
            path="/command-center/login"
            element={<CommandCenterLogin />}
          />
          <Route
            path="/command-center/dashboard"
            element={<CommandCenterDashboard />}
          />
          <Route
            path="/command-center/reports"
            element={<CommandCenterReports />}
          />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const rootElement = document.getElementById("root");

if (rootElement) {
  // Use createRoot with proper HMR handling
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );

  // Handle HMR updates
  if (import.meta.hot) {
    import.meta.hot.accept(() => {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      );
    });
  }
}
