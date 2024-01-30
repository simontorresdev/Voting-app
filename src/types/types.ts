export type ViewType = 'list' | 'grid';
export type VoteType = 'positive' | 'negative' | null;

export interface Vote {
  positive: number;
  negative: number;
}

export interface Character {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: Vote;
}
