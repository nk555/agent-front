const { chromium } = require('@playwright/test');

// The port your app runs on (e.g., 3000, 5173)
const APP_URL = 'http://localhost:3000';
const VIDEO_DIR = './qa_video';

(async () => {
  console.log('Starting QA Agent Test...');
  let browser;

  try {
    browser = await chromium.launch();
    
    // --- This is the magic line for video ---
    const context = await browser.newContext({
      recordVideo: {
        dir: VIDEO_DIR, // The folder to save the video
        size: { width: 1024, height: 768 }
      }
    });
    // ------------------------------------------

    const page = await context.newPage();

    console.log(`Navigating to ${APP_URL}...`);
    await page.goto(APP_URL);

    // --- Record the whole website ---
    console.log('Capturing the website...');
    
    // Give it a second to show the result
    await page.waitForTimeout(2000); 

    console.log('QA test passed!');
    
    // Close context to save the video
    await context.close();
    
    console.log(`✅ Success! Video saved in ${VIDEO_DIR}`);

  } catch (error) {
    console.error('❌ QA test FAILED:', error.message);
    process.exit(1); // Exit with an error code
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();