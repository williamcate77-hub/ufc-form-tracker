export const ODDS_API_KEY = process.env.ODDS_API_KEY || "";
export const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || "";

export const ODDS_STALE_THRESHOLD = 24 * 60 * 60 * 1000; // 24 hours
export const GENERATION_TIMEOUT = 90 * 1000; // 90 seconds
export const FIGHT_DAY_THRESHOLD = 48 * 60 * 60 * 1000; // 48 hours before event

export const ODDS_API_BASE = "https://api.the-odds-api.com/v4";
export const ANTHROPIC_API_BASE = "https://api.anthropic.com/v1";

export const MMA_SPORT_KEY = "mma_mixed_martial_arts";
export const ODDS_REGION = "au";
