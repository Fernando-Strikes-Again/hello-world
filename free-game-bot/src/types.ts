export interface FreeGame {
  title: string;
  url: string;
  store: 'Steam' | 'Epic' | 'GOG';
  price: number; 
}

export interface StoreScraper {
  scrape(): Promise<FreeGame[]>;
}