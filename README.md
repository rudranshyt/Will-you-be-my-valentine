# 💖 Vanshika's Valentine Player

A beautiful, interactive web-based music player designed with a "soft and warm" aesthetic. This project features a landing page with interactive popups, heart confetti celebrations, and a "fridge magnet" style music player.

---

## 📂 Project Architecture

The project is organized to keep logic, styles, and assets separated for better maintainability.

| Directory | Purpose |
| :--- | :--- |
| `songs/` | MP3 files with simplified filenames. |
| `styles/` | CSS files for the landing and player pages. |
| `controllers/` | JavaScript logic for popups and audio handling. |
| `templates/` | Secondary HTML pages (like the player). |

```text
/
├── index.html               # Main landing page
├── songs/                   # MP3 files
│   ├── mera_mann.mp3
│   ├── pehli_dafa.mp3
│   └── tu_hi_mera.mp3
├── styles/                  
│   ├── main.css             
│   └── player.css           
├── controllers/             
│   ├── main.js              
│   └── player.js            
└── assets/                  
    └── memory_photo.jpg     # The polaroid/magnet image