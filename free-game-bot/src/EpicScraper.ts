import { Page } from 'playwright';
import { FreeGame, StoreScraper } from './types';

export class EpicScraper implements StoreScraper {
  constructor(private page: Page) {}

  async scrape(): Promise<FreeGame[]> {
    console.log("1. Navigating to Epic...");
    await this.page.goto('https://store.epicgames.com/en-US/free-games', { 
        waitUntil: 'domcontentloaded' 
    });

    try {
        const cardSelector = '[data-component="FreeOfferCard"]';
        
        console.log("2. Scrolling 600px...");
        await this.page.mouse.wheel(0, 600);
        
        // Wait for the cards to be present
        await this.page.waitForSelector(cardSelector, { timeout: 15000 });
        
        // IMPORTANT: Wait for the shimmer/loading to stop
        await this.page.waitForTimeout(3000); 

        const games: FreeGame[] = [];
        const allCards = await this.page.locator(cardSelector).all();
        console.log(`3. Checking ${allCards.length} cards...`);

        for (const card of allCards) {
            const cardText = await card.innerText();
    
            if (cardText.toUpperCase().includes('FREE NOW')) {
                let title = "";
                const titleElement = card.locator('[data-component*="Title"]');
        
                if (await titleElement.count() > 0) {
                    title = await titleElement.first().innerText();
                    }

                if (!title || title.length < 2) {
                    const img = card.locator('img').first();
                    title = await img.getAttribute('alt') || "";
                    }

                if (!title || title.length < 2) {
                    const aria = await card.locator('a').first().getAttribute('aria-label') || "";
                    title = aria.split(',')[0];
                }

                const href = await card.locator('a').first().getAttribute('href') || '';
                const url = `https://store.epicgames.com${href}`;

                const cleanTitle = title
                    .replace(/FREE NOW|Free Games|Coming Soon/gi, '')
                    .replace(/, \d of \d/g, '') // Removes "1 of 4" stuff
                    .trim();

                if (cleanTitle) {
                    console.log(`- Scraped: ${cleanTitle}`);
                    games.push({ title: cleanTitle, url, store: 'Epic', price: 0 });
                }
            }
        }

        return games;

    } catch (e) {
        console.error("Epic Scraper failed:", e);
        return [];
    }
}
    
}