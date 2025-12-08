/**
 * Route configuration for the application
 * Centralized routing paths for easy maintenance and navigation
 */

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/Dashboard",
  CYBER: "/cyber",
  CYBER_CLUSTERS: "/cyber/clusters",
} as const;

/**
 * Navigation items for sidebar
 */
export const SIDEBAR_NAVIGATION = [
  {
    id: "dashboard",
    label: "Dashboard",
    route: ROUTES.DASHBOARD,
    icon: "Component1.png",
  },
  {
    id: "reporting",
    label: "Reporting",
    route: "/reporting",
    icon: "Component2.png",
  },
  {
    id: "automations",
    label: "Automations",
    route: "/automations",
    icon: "Component3.png",
  },
  {
    id: "signals",
    label: "Signals",
    route: "/signals",
    icon: "Component4.png",
  },
  {
    id: "monitoring",
    label: "Monitoring",
    route: "/monitoring",
    icon: "Component5.png",
  },
  {
    id: "integrations",
    label: "Integrations",
    route: "/integrations",
    icon: "Component6.png",
  },
  {
    id: "settings",
    label: "Settings",
    route: "/settings",
    icon: "Component7.png",
  },
];

export type RouteKey = keyof typeof ROUTES;
