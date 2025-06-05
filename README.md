# Perplexity Redirect Safari Extension

A simple Safari App Extension for macOS that automatically redirects Google searches to [Perplexity AI](https://www.perplexity.ai/).  
This extension is designed for compatibility with older versions of Safari, including Safari on macOS 12 (Monterey).

---

## Features

- Seamlessly redirects all Google search queries to Perplexity AI.
- Lightweight and privacy-friendly: no data collection, no tracking.
- Works with Safari on macOS 12 and newer.

---

## Getting Started

### Prerequisites

- A Mac running macOS 12 (Monterey) or newer.
- [Xcode](https://developer.apple.com/xcode/) (download from the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12)).

---

### Installation Steps

#### 1. Clone or Download the Repository

```sh
git clone https://github.com/Sk16er/perplexity-brave.git
cd perplexity-brave
```

#### 2. Open the Project in Xcode

- Navigate to the project folder.
- Open `PerplexitySafari.xcodeproj` in Xcode.

#### 3. Build and Run the Host App

- In Xcode, select the `PerplexitySafariApp` target.
- Click the **Run** button (`▶️`) or press `Cmd + R` to build and launch the host app.

#### 4. Enable the Extension in Safari

1. Open **Safari**.
2. Go to **Safari > Settings (Preferences) > Extensions**.
3. Locate **Perplexity Redirect** in the sidebar and check the box to enable it.
4. Grant any permissions requested for google.com.

#### 5. Test the Extension

- Go to [https://www.google.com/](https://www.google.com/) and perform a search.
- You should be automatically redirected to [Perplexity AI](https://www.perplexity.ai/) with your search query.

---

## Project Structure

```
PerplexitySafari/
├── PerplexitySafari.xcodeproj
├── PerplexitySafariApp/                # Host macOS app
│   ├── AppDelegate.swift
│   └── Info.plist
└── PerplexitySafariExtension/          # Safari Extension
    ├── SafariExtensionHandler.swift
    ├── Info.plist
    └── redirect.js
```

---

## How It Works

- The extension injects a small content script on Google search result pages.
- When you perform a search, it captures your query and redirects you to Perplexity AI with that same query.

---

## Publishing the Extension

If you want to share your extension with others or publish it on the Mac App Store:

1. **Apple Developer Account:**  
   You need an [Apple Developer account](https://developer.apple.com/programs/enroll/) ($99/year).

2. **Archive and Notarize:**
   - In Xcode, select the **PerplexitySafariApp** target.
   - Go to **Product > Archive**.
   - Once archiving is complete, use the Organizer window to validate and distribute your app.
   - Follow Apple’s guide for [distributing Safari Extensions on the Mac App Store](https://developer.apple.com/documentation/safariservices/safari_app_extensions/distributing_safari_app_extensions).

3. **App Store Connect:**  
   - Upload your archived app via Xcode Organizer.
   - Fill in the required info and submit for review.

**Note:**  
Safari App Extensions are always distributed as part of a macOS app (the host app). Users install the app, then enable the extension in Safari.

---

## Resources & Links

- [Download Xcode on the Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
- [Perplexity AI](https://www.perplexity.ai/)
- [Apple Developer Program](https://developer.apple.com/programs/enroll/)
- [Safari App Extension Documentation](https://developer.apple.com/documentation/safariservices/safari_app_extensions)
- [Distribute Your Safari App Extension](https://developer.apple.com/documentation/safariservices/safari_app_extensions/distributing_safari_app_extensions)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Credits

Created by [Sk16er](https://github.com/Sk16er).

---

## Troubleshooting

- If you don’t see the extension in Safari, make sure the host app is running and built with your Developer credentials.
- If the redirect isn’t working, check that the extension is enabled for `google.com` in Safari’s Extensions settings.

---

Enjoy searching smarter with Perplexity AI!
