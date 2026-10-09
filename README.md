# Vishnu Das & Nithya T. J. — Wedding Invitation

Static site (HTML/CSS/JS). Upload the folder contents to Vercel/Netlify/any host. Open `index.html` via a web server (not file://).

## Before sharing on WhatsApp
Replace `https://REPLACE-WITH-YOUR-DOMAIN` with your real URL in `index.html` (og:url, og:image, og:image:secure_url, twitter:image) and in `js/site-config.js` (siteUrl). Share image: `assets/images/share/wedding-og.jpg` (1200x630).
After changing it, WhatsApp may cache old previews; adding ?v=2 to the image URL helps.

## Editing details
All text/links/media paths: `js/site-config.js`.

## Enabling the reception later
In `js/site-config.js` set `reception.enabled: true` and fill dayName, date, time, venue, location, mapsUrl.
The reception card, timeline entry, fact card and venue card then appear automatically.

## Notes
- Opening video: `assets/video/wedding-opening.mp4` (H.264, no audio).
- Music: `assets/audio/inkem-inkem_g300U6Yp.mp3` is carried over from the reference site — confirm you have rights, or replace it (update media.audio in config and the preload/src in index.html).
- Maps button uses a venue-name search. For an exact pin paste your Google Maps link into wedding.venue.mapsUrl.
- Malayalam name spellings in config (couple.*.ml) should be verified.
