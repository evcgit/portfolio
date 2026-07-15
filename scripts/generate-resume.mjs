import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";
import { copyFile } from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "resume.html");
const outPath = path.join(__dirname, "../public/resume.pdf");
const personalOut = path.join(
  process.env.HOME || "/Users/rae",
  "Personal/Evan_Cortez_Resume.pdf"
);

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle" });
  await page.pdf({
    path: outPath,
    format: "Letter",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
  await browser.close();

  try {
    await copyFile(outPath, personalOut);
    console.log(`Also copied to ${personalOut}`);
  } catch (err) {
    console.warn("Could not copy to Personal:", err.message);
  }

  console.log(`Wrote ${outPath}`);
}

main();
