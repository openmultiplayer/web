export type Content = {
  title: string;
  description?: string;
  date?: string;
  author?: string;
  slug?: string;
};

export type RawContent = {
  source: string;
  fallback: boolean;
};
