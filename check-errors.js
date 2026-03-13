import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.error('PAGE ERROR:', error.message));
    page.on('requestfailed', request => console.error('REQUEST FAILED:', request.url(), request.failure().errorText));
    
    await page.goto('http://localhost:5174/', { waitUntil: 'networkidle0' });
    const isVisible = await page.evaluate(() => {
        const nav = document.querySelector('nav');
        if (!nav) return 'no nav';
        const style = window.getComputedStyle(nav);
        return style.opacity + ' ' + style.display + ' ' + style.visibility;
    });
    console.log("NAV VISIBILITY:", isVisible);
    
    await page.screenshot({ path: 'screenshot.png' });
    await browser.close();
  } catch(e) {
    console.error(e);
  }
})();
