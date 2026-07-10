"use client";

import { useState, useEffect } from "react";
import { CachedEvent, CacheStatus } from "@/lib/types";

interface UseCacheStateReturn {
  event: CachedEvent | null;
  loading: boolean;
  error: string | null;
  cacheStatus: CacheStatus | null;
  isRefreshing: boolean;
  refresh: (forceMode?: "full" | "odds" | "changes") => Promise<void>;
}

export function useCacheState(): UseCacheStateReturn {
  const [event, setEvent] = useState<CachedEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cacheStatus, setCacheStatus] = useState<CacheStatus | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Load initial cache state
  useEffect(() => {
    async function loadCache() {
      try {
        const response = await fetch("/api/cache-status");
        const status = (await response.json()) as CacheStatus;
        setCacheStatus(status);

        // In a real app, we'd also load the cached event from localStorage or a separate API
        // For now, we'll treat it as pending until refresh
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to check cache");
      } finally {
        setLoading(false);
      }
    }

    loadCache();
  }, []);

  async function refresh(forceMode?: "full" | "odds" | "changes") {
    setIsRefreshing(true);
    setError(null);

    try {
      const response = await fetch("/api/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ forceMode }),
      });

      if (!response.ok) {
        throw new Error("Refresh failed");
      }

      const result = await response.json();

      if (result.status === "error") {
        throw new Error(result.error || "Refresh failed");
      }

      // In a real app, fetch the updated event from cache/API
      setCacheStatus({
        eventId: result.eventId,
        oddsAge: 0,
        needsRefresh: false,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Refresh failed");
    } finally {
      setIsRefreshing(false);
    }
  }

  return {
    event,
    loading,
    error,
    cacheStatus,
    isRefreshing,
    refresh,
  };
}
