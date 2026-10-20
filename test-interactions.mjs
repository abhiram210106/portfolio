import puppeteer from 'puppeteer-core';

async function testInteractions() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  // 1. Verify link elements
  const links = await page.$$eval('a', els => els.map(a => ({
    href: a.href,
    target: a.target,
    rel: a.rel,
    text: a.innerText.trim()
  })));

  console.log('Total interactive links found:', links.length);
  const linkedinLink = links.find(l => l.href.includes('linkedin.com'));
  console.log('LinkedIn link detected:', linkedinLink);

  // 2. Test hovering on first project card
  const firstCard = await page.$('.group\\/card');
  if (firstCard) {
    await firstCard.hover();
    console.log('Card hover executed successfully.');
  }

  // 3. Check for any console errors
  console.log('Console errors encountered:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors);
  }

  await browser.close();
}

testInteractions().catch(console.error);
