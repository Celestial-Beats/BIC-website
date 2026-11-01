// Library posts. Empty until real, club-written articles are added here.
// BiC's actual writing lives on Medium — the Library page links there when this is empty.
// To add one: { tag, min, title, excerpt, body } — body is an HTML string.
export const POSTS = [];

export const MEMBERS = [
  {
    group: "2026–27 — current",
    people: [
      { name: "Anvi Wadhwa", role: "President" },
      { name: "Srivats", role: "Vice President" },
      { name: "Daksh Sablok", role: "General Secretary" },
      { name: "Sharan Gopinath Bailur", role: "Events Lead" },
      { name: "S J Advaith", role: "Software Lead" },
      { name: "Cedric Antony Joseph", role: "R&D Lead" },
      { name: "Ardhra Arunkumar", role: "Curation Lead" },
      { name: "Sri Hasini Chowdhary", role: "Design Lead" },
    ]
  },
  {
    group: "2025–26",
    people: [
      { name: "Dhanvanthini Balaji", role: "President" },
      { name: "Arjuun Bharath", role: "Vice President" },
      { name: "Kanishk M", role: "General Secretary" },
      { name: "Adithya", role: "Events Lead" },
      { name: "Anvi Wadhwa", role: "Curation Lead" },
      { name: "Sandhya", role: "Design Lead" },
      { name: "Jane Bernice", role: "Design Lead" },
    ]
  },
  {
    group: "2024–25",
    people: [
      { name: "Kishan Madhav", role: "President" },
      { name: "Akhilesh Donthula", role: "Vice President" },
      { name: "Dhanvanthini", role: "General Secretary" },
      { name: "Seyan Singampalli", role: "R&D Lead" },
      { name: "Sagnik Debnath", role: "Curation Lead" },
      { name: "Sreya Mynampati", role: "Design Lead" },
      { name: "Sahaana R", role: "Management Lead" },
    ]
  },
  {
    group: "Founding committee",
    people: [
      { name: "Mitra Vinda", role: "Founder" },
      { name: "Riddhi Satija", role: "Co-Founder" },
      { name: "Syed Owais", role: "Co-Founder" },
      { name: "Nihar Thampi", role: "Events Lead" },
      { name: "Shaahid Ahmed", role: "R&D Lead" },
      { name: "Parthivi Singh", role: "Social Media Lead" },
      { name: "Samruth A.", role: "Content Lead" },
      { name: "Nikhil Nair", role: "Design Lead" },
    ]
  }
];

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/bic-vitc/posts/?feedView=all" },
  { label: "Instagram", href: "https://www.instagram.com/bic_vitc/?hl=en" },
  { label: "Medium", href: "https://medium.com/@businessinnovationcommunityvit" },
];

export const DEFY_NEXT = {
  label: "Next edition",
  title: "DeFy",
  blurb: "The next edition is in the works. Dates, tracks and the prize pool are announced on our socials first.",
  chips: ["Status: in the works", "Dates: TBA", "Tracks: TBA"],
  link: { text: "Visit the DeFy site ↗", href: "https://defy26.vercel.app" }
};

// A separate hackathon, co-run with OSPC (Open Source Programming Club) — not a DeFy edition.
export const VOID_EVENT = {
  label: "Previous event — with OSPC",
  title: "VOID",
  when: "28–29 Oct 2025 · MG Auditorium, VIT Chennai",
  blurb: "A 24-hour in-person hackathon run alongside the Open Source Programming Club — first edition, open to students, professionals and first-timers alike. Teams of 4–6 (solo builders welcome, forms happen onsite) picked from five tracks — FinTech & Digital Payments, HealthTech & EdTech, RetailTech/SaaS/Smart Mobility, AgriTech & SDG, and Open Innovation — then pitched live to judges on impact, technical depth, design and originality. Backed by VIT Chennai's Office of Student Welfare and Institution's Innovation Council, with ETHIndia, Polygon and HCLTech among the partners on board.",
  chips: ["24-hour build", "5 tracks", "Winners: TBA"],
  link: { text: "Visit the VOID site ↗", href: "https://www.void25.site" }
};

// `winners` is optional — add it only when the results are confirmed.
// e.g. winners: [{ pos: "1st", team: "Team name", prize: "₹25,000/-" }]
export const DEFY_EDITIONS = [
  {
    ed: "DeFy'26",
    when: "12–13 Jan 2026 · VIT Chennai",
    theme: "Third edition. Web3 × entrepreneurship — online ideation round, then a 24-hour onsite build and a top-nine finale. Bounties from ThinkRoot, INCO and Shardeum pushed the total pool past ₹3,20,000.",
    facts: ["₹40,000 pool / track", "1st — ₹25,000", "2nd — ₹15,000", "+ ₹3.2L+ w/ bounties", "Top 9 finale"]
  },
  {
    ed: "DeFy'25",
    when: "10–11 Jan 2025 · MG Auditorium, VIT Chennai",
    theme: "Second edition. 24 hours of Web3 across two tracks — DeFi and Public Goods.",
    facts: ["Track: DeFi", "Track: Public Goods", "24-hour build"]
  },
  {
    ed: "DeFy'24",
    when: "Jan 2024 · VIT Chennai",
    theme: "Where it started. The first edition that proved a business-first hackathon could pull a crowd.",
    facts: ["The original"]
  }
];

export const EVENTS = {
  technovit: [
    {
      title: "Title under wraps",
      lead: "Daksh",
      blurb: "Scope locked, name pending — details drop here first.",
      chips: ["TechnoVIT '26", "Flagship"]
    },
    {
      title: "Title under wraps",
      lead: "Sharan",
      blurb: "Scope locked, name pending — details drop here first.",
      chips: ["TechnoVIT '26", "Flagship"]
    }
  ]
};