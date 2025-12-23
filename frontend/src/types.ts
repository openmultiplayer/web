export interface CoreServerData {
  ip: string;
  hn: string;
  pc: number;
  pm: number;
  gm: string;
  la: string;
  pa: boolean;
  vn: string;
  omp: boolean;
  pr: boolean;
}

export interface ServerAllData {
  ip: string;
  dm?: string;
  core: CoreServerData;
  ru: { [x: string]: string };
  description?: string;
  banner?: string;
  active: boolean;
  pending: boolean;
  lastUpdated: string;
  lastActive?: string;
}

export type Stats = {
  players: number;
  servers: number;
};

export type SortBy = "relevance" | "pc";