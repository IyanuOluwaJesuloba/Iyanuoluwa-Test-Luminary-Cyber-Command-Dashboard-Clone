import { useState, useEffect } from "react";

interface DashboardData {
  clusterName: string;
  clusterId: string;
  discoveryStats: Array<{
    label: string;
    value: string;
    percentage: number;
  }>;
  consistencyChain: Array<{
    label: string;
    value: string;
  }>;
  clusterColumns: Array<{
    id: number;
    value: string;
  }>;
  executeMetrics: Array<{
    label: string;
    value: string;
  }>;
  skillProgression: Array<{
    label: string;
    percentage: number;
    gradient: string;
  }>;
  studyTimeData: Array<{
    date: string;
    hours: number;
  }>;
  skillChainData: {
    name: string;
    completed: number;
    total: number;
  };
}

interface UseDashboardDataReturn {
  data: DashboardData | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for fetching dashboard data
 * Easily integrate your backend API by changing the endpoint
 */
export function useDashboardData(endpoint: string = "/api/dashboard"): UseDashboardDataReturn {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getMockData = (): DashboardData => ({
    clusterName: "N/A",
    clusterId: "N/A",
    discoveryStats: [
      { label: "", value: "N/A", percentage: 0 },
    ],
    consistencyChain: [
      { label: "Week 1", value: "0%" },
      { label: "Week 2", value: "0%" },
      { label: "Week 3", value: "0%" },
      { label: "Week 4", value: "0%" },
    ],
    clusterColumns: Array.from({ length: 16 }, (_, i) => ({
      id: i + 1,
      value: "0%",
    })),
    executeMetrics: [
      { label: "Completed nodes", value: "0 / 9" },
      { label: "Completed sections", value: "0 / 9" },
      { label: "Completed lessons", value: "0 / 9" },
      { label: "Completed exercises", value: "0 / 9" },
    ],
    skillProgression: [
      { label: "N/A", percentage: 0, gradient: "linear-gradient(to bottom right, #01070D, #F5F5F5)" },
      { label: "N/A", percentage: 0, gradient: "linear-gradient(to bottom right, #B81A1A, #800B0B)" },
      { label: "N/A", percentage: 0, gradient: "linear-gradient(to bottom right, #F0863A, #8A4D21)" },
      { label: "N/A", percentage: 0, gradient: "linear-gradient(to bottom right, #05131E, #176A16)" },
      { label: "N/A", percentage: 0, gradient: "linear-gradient(to bottom right, #05131E, #1C60AC)" },
      { label: "N/A", percentage: 0, gradient: "linear-gradient(to bottom right, #C89961, #A3227B)" },
      { label: "N/A", percentage: 0, gradient: "linear-gradient(to bottom right, #3D6CEB, #2AE0DB)" },
    ],
    studyTimeData: Array.from({ length: 25 }, (_, i) => ({
      date: `${9 + i}`,
      hours: Math.floor(Math.random() * 5),
    })),
    skillChainData: {
      name: "Offensive operations",
      completed: 0,
      total: 1,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(endpoint);
        
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred";
        setError(errorMessage);
        // Use mock data as fallback
        setData(getMockData());
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(endpoint);
      
      if (!response.ok) {
        throw new Error("Failed to fetch dashboard data");
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      // Use mock data as fallback
      setData(getMockData());
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
}
