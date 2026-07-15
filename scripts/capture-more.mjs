import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/screenshots");

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  await page.goto("https://bidzbase.com/login?demo=1", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);

  const email = page.locator('input[type="email"], input[name="email"]').first();
  if (await email.count()) {
    await email.fill("demo@bidzbase.com");
    await page.locator('input[type="password"]').first().fill("portfolio-demo");
    await page.locator('button[type="submit"]').first().click();
  }
  await page.waitForTimeout(3000);
  console.log("URL after login:", page.url());

  // dump nav links
  const links = await page.locator("a").evaluateAll((as) =>
    as.map((a) => ({ href: a.getAttribute("href"), text: (a.textContent || "").trim() })).filter((x) => x.href || x.text).slice(0, 80)
  );
  console.log(JSON.stringify(links, null, 2));

  const routes = [
    ["jobs", ["/jobs", "/app/jobs"]],
    ["schedule", ["/schedule", "/app/schedule"]],
    ["analytics", ["/analytics", "/app/analytics", "/reports"]],
    ["customers", ["/customers", "/app/customers"]],
  ];

  for (const [name, paths] of routes) {
    let ok = false;
    for (const p of paths) {
      try {
        await page.goto(`https://bidzbase.com${p}`, { waitUntil: "networkidle", timeout: 20000 });
        await page.waitForTimeout(1500);
        if (!page.url().includes("login")) {
          await page.screenshot({ path: path.join(outDir, `${name}.png`) });
          console.log("saved", name, page.url());
          ok = true;
          break;
        }
      } catch {}
    }
    if (!ok) console.log("missed", name);
  }

  await browser.close();
}
main();
