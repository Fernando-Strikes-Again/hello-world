import { Page } from 'playwright';
import { FreeGame, StoreScraper } from './types';

export class SteamScraper implements StoreScraper {
  constructor(private page: Page) {}

  async scrape(): Promise<FreeGame[]> {
    console.log("1. Starting scrape function..."); 
    await this.page.goto('https://store.steampowered.com/search/?maxprice=free&specials=1&ndl=1');
    
    console.log("2. Page loaded, waiting for #search_resultsRows...");
    try {
        await this.page.waitForSelector('#search_resultsRows', { timeout: 15000 });
        console.log("3. Found the search container!");
        
        const items = await this.page.locator('#search_resultsRows a.search_result_row').all();
        console.log(`4. Found ${items.length} total items.`);

        const games: FreeGame[] = [];
        for (const item of items) {
            const title = await item.locator('.search_name .title').innerText();
            console.log(`5. Found game: ${title}`);
            const url = await item.getAttribute('href') || '';
            games.push({ title, url, store: 'Steam', price: 0 });
        }
        return games;
    } catch (e) {
        console.error("DEBUG ERROR: ", e);
        return [];
    }
  }
}