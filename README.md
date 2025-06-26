# 🌙 Wingify Dream Portal – Automated UI Testing
The automation suite uses **Playwright (JavaScript)** and follows a Page Object Model (POM) architecture.
Automate functional testing of a dream journaling platform, validating the correctness of the:
- Home page behavior
- Dream Diary entries
- Summary statistics

## 📁 Project Structure

Wingify/
├── pages/
│ ├── HomePage.js # Page Object for index.html
│ ├── DiaryPage.js # Page Object for dreams-diary.html
│ └── SummaryPage.js # Page Object for dreams-total.html
├── tests/
│ ├── home.spec.js # Test cases for index.html
│ ├── diary.spec.js # Test cases for dreams-diary.html
│ └── total.spec.js # Test cases for dreams-total.html
├── playwright.config.js # Playwright configuration
├── package.json # Project metadata and dependencies

##  Test Coverage

### 🏠 Home Page (index.html)

-  Loader animation appears and disappears in ~3 seconds.
-  "My Dreams" button is visible.
-  Clicking the button opens `dreams-diary.html` and `dreams-total.html` in new tabs.

### 📓 Diary Page (dreams-diary.html)

-  Exactly 10 dream entries are present.
-  Each entry contains 3 columns: Dream Name, Days Ago, Dream Type.
-  Dream Type is either “Good” or “Bad”.
-  Recurring dream logic implemented (reused by Summary Page).

### 📊 Summary Page (dreams-total.html)

-  Good Dreams: 6
-  Bad Dreams: 4
-  Total Dreams: 10
-  Recurring Dreams: 2
-  Recurring: “Flying over mountains”, “Lost in maze”
