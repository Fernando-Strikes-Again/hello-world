// tests/steam.spec.ts
import { chromium } from 'playwright';
import { SteamScraper } from '../src/SteamScraper';
import { EpicScraper } from './EpicScraper';

async function main() {
  console.log("--- BOTTING STARTING ---");

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // --- STEAM SECTION ---
    console.log("Calling Steam scraper...");
    const steam = new SteamScraper(page);
    const steamGames = await steam.scrape();
    console.log("Steam Games found:", steamGames);

    // --- EPIC SECTION ---
    console.log("Calling Epic scraper...");
    const epic = new EpicScraper(page);
    const epicGames = await epic.scrape();
    console.log("Epic Games found:", epicGames);

  } catch (error) {
    console.error("CRITICAL ERROR during execution:", error);
  } finally {
    await browser.close();
    console.log("--- BOTTING FINISHED ---");
  }
}

main();