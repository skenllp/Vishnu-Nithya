/* ============================================================
   CENTRAL WEDDING CONFIGURATION  ·  Vishnu Das & Nithya T. J.
   Edit this file to update names, date, venue, families, contacts,
   media paths, and to switch the reception on later.
   (index.html carries the same text as a no-JS fallback.)
   ============================================================ */
window.weddingConfig = {

  /* Deployed address — also update the og:/twitter: tags in index.html (see README) */
  siteUrl: 'https://REPLACE-WITH-YOUR-DOMAIN/',

  invocation: '|| Om Shri Ganeshaya Namah ||',

  couple: {
    displayNames: 'Vishnu & Nithya',
    groom: {
      name: 'Vishnu Das',
      first: 'Vishnu',
      ml: 'വിഷ്ണു ദാസ്',
      parents: ['Mr. G. Kalidasan', 'Mrs. Jaya P.'],
      parentsLine: 'Son of Mr.\u00A0G.\u00A0Kalidasan & Mrs.\u00A0Jaya\u00A0P.',
      address: 'Puthiyath Veedu, Vishwakarma Nagar, Valamchuzhy, Pathanamthitta',
      contacts: ['9495572709', '9961616958']
    },
    bride: {
      name: 'Nithya T. J.',
      first: 'Nithya',
      ml: 'നിത്യ ടി. ജെ.',
      parents: ['Mr. Janardhanan T. S.', 'Mrs. Thankamani K. S.'],
      parentsLine: 'Daughter of Mr.\u00A0Janardhanan\u00A0T.\u00A0S. & Mrs.\u00A0Thankamani\u00A0K.\u00A0S.',
      address: 'Thenalethu Nithin Villa, Mallapuzhassery, Aranmula, Pathanamthitta'
    }
  },

  wedding: {
    dayName: 'Sunday',
    dayShort: 'Sun',
    date: '01 November 2026',
    isoStart: '2026-11-01T12:00:00+05:30',   /* countdown target */
    malayalamDate: '1202 Thulam 15',
    muhurtham: '12:00 PM \u2013 12:18 PM',
    departure: '10:00 AM',
    venue: {
      name: 'Balakrishna Convention Centre',
      place: 'Manappally, Kidangannur',
      /* Search-query based links (no invented coordinates).
         To use an exact pin instead, paste the family's Google Maps link here. */
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Balakrishna+Convention+Centre+Manappally+Kidangannur',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Balakrishna+Convention+Centre+Manappally+Kidangannur'
    }
  },

  bestCompliments: 'Archana K.',

  /* RECEPTION — hidden everywhere while enabled is false.
     When the family confirms details, fill these in and set enabled: true.
     Sections, timeline entry, event card, venue card and map button appear automatically. */
  reception: {
    enabled: false,
    dayName: null,    /* e.g. 'Sunday' */
    date: null,       /* e.g. '01 November 2026' */
    time: null,       /* e.g. '6:30 PM \u2013 9:30 PM' */
    venue: null,
    location: null,
    mapsUrl: null
  },

  media: {
    closeup: 'assets/images/couple/couple-closeup.webp',
    outdoor: 'assets/images/couple/couple-outdoor.webp',
    family: 'assets/images/couple/family-photo.webp',
    groomFamily: 'assets/images/couple/family-photo.webp',
    brideFamily: 'assets/images/couple/bride family.jpeg',
    groomPortrait: 'assets/images/couple/groom-portrait.png',
    bridePortrait: 'assets/images/couple/bride-portrait.jpeg',
    audio: 'assets/audio/inkem-inkem_g300U6Yp.mp3'
    /* Opening video: assets/video/wedding-opening.mp4 (set in index.html for preloading) */
  }
};
