# ChatGPT Page Cleaner

**Stop the lag.** When your ChatGPT conversations get too long, the website starts to slow down because there is too much data for your browser to handle. This extension helps you "clean" the page by removing old messages from your view, making the chat smooth and fast again.

---

### 🧐 What does this do?
When you have a very long chat, your computer struggles to render all the text, causing the page to "lag" or stutter. This extension gives you a simple button to **delete old messages from the current screen**. 

* **It does NOT delete your history:** Your actual conversation is safe on ChatGPT's servers. It only removes them from the **frontend (the page you are looking at)** to stop the lagging.
* **Sequential Cleaning:** It removes messages one by one with a tiny delay (100ms), ensuring the page stays stable and doesn't crash.
* **Custom Count:** You can choose exactly how many messages to clear using the `+` and `-` buttons.
* **Smart Selection:** It automatically detects how many messages are currently on your screen the moment you open the popup.

---

### 🚀 How to Install

1.  **Download** this folder to your computer.
2.  Open your Chrome browser and type `chrome://extensions/` in the address bar.
3.  Turn on **Developer mode** (the switch in the top right corner).
4.  Click the **Load unpacked** button.
5.  Select this project folder (`ChatGPT-Page-Cleaner`).
6.  Open ChatGPT, click the extension icon, and hit **OPTIMIZE**!

---

### 📂 File Structure
```text
.
├── icon128.png      # Scaled icon for Web Store
├── icon16.png       # Scaled icon for Browser Toolbar
├── icon48.png       # Scaled icon for Extension Page
├── icon.png         # Original high-res source
├── manifest.json    # Extension configuration
├── popup.html       # UI Design (Gradients & Buttons)
├── popup.js         # Logic for counter and removal
└── README.md        # Documentation

```

## License
 
The MIT License (MIT)

Copyright (c) 2026 Attaullah Khan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

