# Base Apparel — Static Site

Small static site for the Base Apparel project.

## What this repo contains

- `index.html` — main HTML page
- `style.css` — site styles
- `script.js` — client-side JavaScript

## Purpose

This is a simple static front-end project for demonstrating the Base Apparel site layout and behavior.

## How to run (development)

Because this is a static site, you can open `index.html` directly in your browser. For a better development experience (and to avoid issues with some JS modules or fetch requests), serve the folder with a simple HTTP server.

Windows (cmd) — using Python 3:

```
# from the project folder (where index.html is located):
python -m http.server 8000
# open http://localhost:8000 in your browser
```

If you prefer Node.js, you can install a tiny static server (optional):

```
# install once (PowerShell or cmd)
npm install -g serve
# then run from the project folder
serve -p 5000
# open http://localhost:5000
```

## Files to edit

- Edit `index.html` to change markup or content
- Edit `style.css` for styles
- Edit `script.js` for any interactive behavior

## Notes

- No build step required — this is a plain static site.
- If you add package files (package.json) or build tooling later, include instructions here.

## License

Add a license file if you want to declare the project's license (e.g., `LICENSE`).

## Contact

If you want changes or help, add an issue or contact the project owner.
