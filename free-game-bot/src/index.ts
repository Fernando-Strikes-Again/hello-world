// tests/steam.spec.ts
import { chromium } from 'playwright';
import { SteamScraper } from '../src/SteamScraper';

async function main() {
  console.log("--- BOTTING STARTING ---");

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    const steam = new SteamScraper(page);

    console.log("Calling scraper...");

    const games = await steam.scrape();
    
    console.log("Games found:", games);

  } catch (error) {
    console.error("CRITICAL ERROR during execution:", error);
  } finally {
    await browser.close();
    console.log("--- BOTTING FINISHED ---");
  }
}

main();