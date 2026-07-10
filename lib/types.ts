export interface RecentFight {
  opponent: string;
  result: "W" | "L" | "D" | "NC";
  method: string;
  year: number;
}

export interface Fighter {
  name: string;
  nickname?: string;
  country: string;
  record: string;
  uFCRecord: string;
  rank?: number;
  age: number;
  recentFights: RecentFight[];
}

export interface BoutOdds {
  fighters: [
    { decimal: number; bookmaker: string },
    { decimal: number; bookmaker: string }
  ];
  updatedAt: number;
  favouriteIndex: 0 | 1;
  impliedProbability: [number, number];
}

export interface MethodOfVictory {
  prediction: string;
  marketPrice?: number;
  methodMarkets?: {
    KO: [number, number];
    Submission: [number, number];
    Decision: [number, number];
  };
}

export type BoutType =
  | "main event"
  | "co-main"
  | "main card"
  | "featured prelim"
  | "prelim";

export type NotableFlag =
  | "title fight"
  | "debut"
  | "rematch"
  | "retirement fight"
  | "grudge match"
  | "late replacement"
  | "missed weight";

export interface Editorial {
  thePick: string;
  sneakyAngle?: string;
  recentForm: string;
  fightingStyle: string;
  historyBetweenThem?: string;
  weightClassMovement?: string;
  experienceAndRecord: string;
  popularityAndPopCulture: string;
  oneLiner: string;
  oneLinnerSubstantiation?: string[];
}

export interface Fight {
  boutIndex: number;
  boutType: BoutType;
  rounds: number;
  division: string;
  fighters: [Fighter, Fighter];
  notableFlag?: NotableFlag;
  editorial: Editorial;
  odds: BoutOdds;
  methodOfVictory: MethodOfVictory;
  _changed?: boolean;
}

export interface CachedEvent {
  eventId: string;
  eventName: string;
  eventDate: string;
  eventDateAEST: string;
  venue: string;
  broadcast: string;
  fights: Fight[];
  generatedAt: number;
  oddsLastUpdated: number;
  cardSummary: string;
  nextEvent?: {
    name: string;
    date: string;
  };
  _metadata: {
    generationDurationMs: number;
    oddsRefreshCount: number;
  };
}

export interface RefreshStatus {
  status: "pending" | "done" | "error";
  eventId?: string;
  changedFightIndices: number[];
  mode?: "full" | "odds" | "changes";
  error?: string;
  message?: string;
}

export interface CacheStatus {
  eventId?: string;
  cachedAt?: number;
  oddsAge: number;
  needsRefresh: boolean;
  reason?: string;
}
