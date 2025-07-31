# Brazilian Coffee Investigation Web App

This project presents a concise, interactive investigation of the 1940s film *A Story of Coffee*, focusing on Brazilian coffee production. The application identifies nine important segments within the video and displays them as a responsive grid of cards.

## Project Structure

```
investigation-app/
├── index.html          # Main web page with header and container for cards
├── styles.css          # Responsive styling and category colours
├── app.js              # JavaScript that builds the cards from segment data
├── segments-data.js    # Structured data describing each segment
├── assets/
│   └── images/         # Illustrations corresponding to each segment
└── README.md           # This documentation
```

### Segment Data

The `segments-data.js` file defines an array of objects. Each object contains:

* `id` – numeric identifier
* `title` – a short headline for the moment
* `start`/`end` – human‑readable timestamps (MM:SS)
* `quote` – a verbatim excerpt from the transcript
* `significance` – why this moment matters in the broader investigation
* `keywords` – search terms to aid discoverability
* `category` – high‑level classification (used for colour coding)
* `youtubeLink` – deep link to the specific timestamp on YouTube
* `image` – relative path to an illustration for the card

### Running Locally

1. Clone or download this repository and navigate to the `investigation-app` folder.
2. If you have Python installed, you can launch a simple web server:

   ```bash
   python -m http.server 8000
   ```

3. Open your browser at `http://localhost:8000` to view the app.

The site uses only vanilla HTML, CSS and JavaScript, so no build steps or dependencies are required.

### Notes on Images

The images included in `assets/images` are conceptual illustrations generated to accompany each segment. In a full investigation setting you would replace these with high‑quality screenshots taken at the specified timestamps from the source video. Each image has been resized and cropped to **1280×720** pixels to ensure consistent presentation.

### Accessibility

* All cards include `alt` text for screen readers.
* Links open in new tabs so users can explore the source material without losing their place.

### Deployment

This project is static and can be hosted on GitHub Pages or any static web host. Simply ensure that the entire `investigation-app` directory is uploaded to the hosting environment.