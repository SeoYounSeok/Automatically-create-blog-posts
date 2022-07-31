const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://news.ycombinator.com");
  await page.setViewport({
    width: 1366,
    height: 758,
  });
  await browser.close();
})();
