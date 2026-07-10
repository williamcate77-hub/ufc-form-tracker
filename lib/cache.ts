import { CachedEvent } from "./types";

export interface CacheAdapter {
  get(key: string): Promise<CachedEvent | null>;
  set(key: string, value: CachedEvent): Promise<void>;
  delete(key: string): Promise<void>;
}

class FileCacheAdapter implements CacheAdapter {
  private cacheFile = "/tmp/ufc-cache.json";

  async get(key: string): Promise<CachedEvent | null> {
    try {
      const fs = await import("fs/promises");
      const data = await fs.readFile(this.cacheFile, "utf-8");
      const cache = JSON.parse(data) as Record<string, CachedEvent>;
      return cache[key] || null;
    } catch {
      return null;
    }
  }

  async set(key: string, value: CachedEvent): Promise<void> {
    try {
      const fs = await import("fs/promises");
      let cache: Record<string, CachedEvent> = {};
      try {
        const data = await fs.readFile(this.cacheFile, "utf-8");
        cache = JSON.parse(data);
      } catch {
        // File doesn't exist yet
      }
      cache[key] = value;
      await fs.writeFile(this.cacheFile, JSON.stringify(cache, null, 2));
    } catch (error) {
      console.error("Cache write failed:", error);
    }
  }

  async delete(key: string): Promise<void> {
    try {
      const fs = await import("fs/promises");
      const data = await fs.readFile(this.cacheFile, "utf-8");
      const cache = JSON.parse(data) as Record<string, CachedEvent>;
      delete cache[key];
      await fs.writeFile(this.cacheFile, JSON.stringify(cache, null, 2));
    } catch (error) {
      console.error("Cache delete failed:", error);
    }
  }
}

class KVCacheAdapter implements CacheAdapter {
  async get(key: string): Promise<CachedEvent | null> {
    try {
      const kv = await import("@vercel/kv").then((m) => m.kv);
      const data = await kv.get(key);
      return data as CachedEvent | null;
    } catch (error) {
      console.error("KV get failed:", error);
      return null;
    }
  }

  async set(key: string, value: CachedEvent): Promise<void> {
    try {
      const kv = await import("@vercel/kv").then((m) => m.kv);
      await kv.set(key, JSON.stringify(value));
    } catch (error) {
      console.error("KV set failed:", error);
    }
  }

  async delete(key: string): Promise<void> {
    try {
      const kv = await import("@vercel/kv").then((m) => m.kv);
      await kv.del(key);
    } catch (error) {
      console.error("KV delete failed:", error);
    }
  }
}

let cacheAdapter: CacheAdapter;

function initCache() {
  const isProduction = process.env.NODE_ENV === "production";
  cacheAdapter = isProduction ? new KVCacheAdapter() : new FileCacheAdapter();
  return cacheAdapter;
}

export function getCache(): CacheAdapter {
  if (!cacheAdapter) {
    initCache();
  }
  return cacheAdapter;
}

const cacheKeyPrefix = "ufc:event:";

export async function getCachedEvent(eventId: string): Promise<CachedEvent | null> {
  return getCache().get(cacheKeyPrefix + eventId);
}

export async function cacheEvent(event: CachedEvent): Promise<void> {
  return getCache().set(cacheKeyPrefix + event.eventId, event);
}

export async function clearCachedEvent(eventId: string): Promise<void> {
  return getCache().delete(cacheKeyPrefix + eventId);
}
