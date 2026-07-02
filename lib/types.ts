export interface BibleVerse {
  reference: string;
  translation: string;
  full: string;
  tagline: string;
  sentences: string[];
}

export interface Contact {
  name: string;
  role: string;
  phone: string;
}

export interface Purpose {
  title: string;
  description: string;
}

export interface Config {
  eventName: string;
  theme: string;
  bibleVerse: BibleVerse;
  venue: {
    name: string;
    address: string;
    fullAddress: string;
    mapsUrl: string;
    embedUrl: string;
  };
  contacts: Contact[];
  social: {
    instagram: {
      handle: string;
      url: string;
    };
  };
  guidelines: string[];
  about: {
    story: string;
    purposes: Purpose[];
  };
  closing: {
    headline: string;
    subtext: string;
    buttonText: string;
  };
}

export interface Event {
  id: string;
  title: string;
  icon: string;
  type: "On-Site" | "Online";
  emoji: string;
  description: string;
  rules: string[];
}
