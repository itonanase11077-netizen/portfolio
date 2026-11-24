// Videos shown at the end of the Overview grid (after the photos) and on moving-image.html.
// Kept separate so portfolio-data.js stays photo data. Same schema as a
// portfolio-data.js project; overview.js already handles media `type: 'video'` (`src`).
// The Faddy video uses the web-optimized MP4.
window.OVERVIEW_VIDEO_PROJECTS = [
  {
    "id": "dr-martin-video",
    "category": "overview",
    "title": "DR MARTIN",
    "line1": "Dani Aphrodite",
    "line2": "",
    "media": [
      { "type": "video", "src": "video/dr-martin/01.mp4", "alt": "DR MARTIN", "dataW": 1916, "dataH": 1080 }
    ]
  },
  {
    "id": "faddy-magazine-video",
    "category": "overview",
    "title": "FADDY MAGAZINE",
    "line1": "Tugcan S Temizkan",
    "line2": "",
    "media": [
      { "type": "video", "src": "video/faddy-magazine/01-web.mp4", "alt": "FADDY MAGAZINE", "dataW": 1920, "dataH": 1080 }
    ]
  },
  {
    "id": "v-magazine-video",
    "category": "overview",
    "title": "V MAGAZINE",
    "line1": "Joshua Charow",
    "line2": "",
    "media": [
      { "type": "video", "src": "video/v-magazine/01.mp4", "alt": "V MAGAZINE", "dataW": 1280, "dataH": 674 }
    ]
  }
];
