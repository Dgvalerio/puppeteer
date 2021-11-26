import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://luby-timesheet.azurewebsites.net/');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
