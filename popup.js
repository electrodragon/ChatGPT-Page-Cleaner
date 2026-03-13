let count = 1;
const countDisplay = document.getElementById('count-display');

// --- INITIALIZATION: Get count from page on popup open ---
async function initializeCount() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // Logic to count articles on the page
      const presentation = document.querySelectorAll('div[role="presentation"]')[0];
      return presentation ? presentation.querySelectorAll('article').length : 1;
    },
  }, (results) => {
    if (results && results[0].result !== undefined) {
      count = results[0].result;

      if (count === 2) {
	count = 1;
      }

      if (count > 2) {
	count = count - 2;
      }

      countDisplay.textContent = count;
    }
  });
}

initializeCount();
// -------------------------------------------------------

const updateDisplay = (val) => {
  count = Math.max(0, count + val); // Prevents negative numbers
  countDisplay.textContent = count;
};

// Event Listeners for Counter
document.getElementById('inc1').addEventListener('click', () => updateDisplay(1));
document.getElementById('dec1').addEventListener('click', () => updateDisplay(-1));
document.getElementById('inc10').addEventListener('click', () => updateDisplay(10));
document.getElementById('dec10').addEventListener('click', () => updateDisplay(-10));

// Optimization Injection
document.getElementById('optimize-btn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: runOptimization,
    args: [count]
  });
});

async function runOptimization(currentCount) {
  const presentation = document.querySelectorAll('div[role="presentation"]')[0];
  if (!presentation) return;

  // Initial check to see how many we have
  const initialArticles = presentation.querySelectorAll('article');
  const len = initialArticles.length;

  // Helper function for the 100ms delay
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  if (currentCount === 1) {
    const firstArticle = presentation.querySelector('article');
    if (firstArticle) firstArticle.remove();
  } 
  else if (currentCount > 1 && len > 2) {
    // Determine the total number of removals (floored to even)
    let limit = Math.min(currentCount, len);
    let evenLimit = Math.floor(limit / 2) * 2;

    for (let i = 0; i < evenLimit; i++) {
      // Always select the current "first" article found in the presentation
      const target = presentation.querySelector('article');
      
      if (target) {
        target.remove();
        // Wait 100ms before the next iteration
        await sleep(100);
      }
    }
  }
}
