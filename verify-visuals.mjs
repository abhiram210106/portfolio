import puppeteer from 'puppeteer-core';

async function main() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  // 1. Desktop Full page
  await page.screenshot({ path: 'screenshot_full_desktop.png', fullPage: true });

  // 2. Mobile Viewport
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  await page.reload({ waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'screenshot_full_mobile.png', fullPage: true });

  console.log('Screenshots captured successfully!');
  await browser.close();
}

main().catch(err => {
  console.error('Error running visual verification:', err);
  process.exit(1);
});
