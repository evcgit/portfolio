import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/screenshots");

async function shot(page, name) {
  await page.waitForTimeout(1200);
  await page.screenshot({
    path: path.join(outDir, `${name}.png`),
    fullPage: false,
  });
  console.log(`saved ${name}.png`);
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  try {
    await page.goto("https://bidzbase.com/login?demo=1", {
      waitUntil: "networkidle",
      timeout: 60000,
    });
    await page.waitForTimeout(2000);

    // Demo may auto-fill; otherwise fill credentials
    const email = page.locator('input[type="email"], input[name="email"], input[autocomplete="username"]').first();
    const password = page.locator('input[type="password"]').first();
    if (await email.count()) {
      await email.fill("demo@bidzbase.com");
      await password.fill("portfolio-demo");
      const submit = page.locator('button[type="submit"], button:has-text("Sign in"), button:has-text("Log in"), button:has-text("Login")').first();
      if (await submit.count()) await submit.click();
      else await password.press("Enter");
    }

    await page.waitForURL(/dashboard|jobs|home|app/i, { timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(2500);
    await shot(page, "dashboard");

    const routes = [
      ["jobs", /jobs/i],
      ["schedule", /schedule/i],
      ["analytics", /analytics/i],
      ["customers", /customers|clients/i],
    ];

    for (const [name, pattern] of routes) {
      const link = page.getByRole("link", { name: pattern }).first();
      if (await link.count()) {
        await link.click();
        await page.waitForTimeout(2000);
        await shot(page, name);
      } else {
        // try nav text
        const text = page.locator(`nav a, aside a, [role="navigation"] a`).filter({ hasText: pattern }).first();
        if (await text.count()) {
          await text.click();
          await page.waitForTimeout(2000);
          await shot(page, name);
        }
      }
    }

    // Try job detail
    const jobRow = page.locator('a[href*="job"], tr, [data-testid*="job"]').first();
    if (await jobRow.count()) {
      await jobRow.click().catch(() => {});
      await page.waitForTimeout(2000);
      await shot(page, "job-detail");
    }
  } catch (err) {
    console.error("Capture error:", err.message);
    await page.screenshot({ path: path.join(outDir, "error.png") }).catch(() => {});
  } finally {
    await browser.close();
  }
}

main();
