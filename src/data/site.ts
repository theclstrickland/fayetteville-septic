/**
 * SITE CONFIG — Single source of truth for the entire rank-and-rent site.
 *
 * To spin up a new city or niche:
 *   1. Duplicate this project
 *   2. Edit this file
 *   3. Push to GitHub → auto-deploys on Cloudflare Pages
 *
 * That's it. Every page, schema, and meta tag pulls from here.
 */

export const site = {
  // ── Brand ──────────────────────────────────────────────
  name: 'Fayetteville Septic',
  domain: 'fayettevilleseptic.com',
  url: 'https://fayettevilleseptic.com',
  phone: '(910) 994-6791',
  phoneTel: '+19109946791',
  tagline: 'Septic Tank Pumping & Repair',
  description:
    'Local septic tank pumping, cleaning, repair, and inspection across the Fayetteville metro. Flat-rate pricing. 24/7 emergency response.',

  // ── Location ───────────────────────────────────────────
  city: 'Fayetteville',
  state: 'NC',
  stateFull: 'North Carolina',
  county: 'Cumberland',
  region: 'Piedmont', // used in soil/climate copy

  // ── Services ───────────────────────────────────────────
  services: [
    {
      slug: 'septic-tank-pumping',
      icon: '🚛',
      title: 'Septic Tank Pumping',
      shortDesc:
        'Routine septic tank pumping every 3–5 years keeps your system healthy. Same-day service available for most Fayetteville addresses. Flat-rate pricing confirmed before we send a truck.',
      linkText: 'View Pricing',
      linkHref: '#pricing',
    },
    {
      slug: 'septic-tank-cleaning',
      icon: '💧',
      title: 'Septic Tank Cleaning',
      shortDesc:
        'Full cleaning goes beyond pumping. We wash the tank walls, inspect baffles, clean the effluent filter, and check for cracks or root intrusion. Recommended every other pump cycle.',
      linkText: 'Call for Details',
      linkHref: 'tel:+19109946791',
    },
    {
      slug: 'septic-tank-repair',
      icon: '🔧',
      title: 'Septic Tank Repair',
      shortDesc:
        'Cracked lids, damaged baffles, collapsed lines, or failing drain fields. We diagnose the problem honestly and quote repair vs. replacement so you can make the right call.',
      linkText: 'Get a Quote',
      linkHref: 'tel:+19109946791',
    },
    {
      slug: 'emergency-septic-service',
      icon: '🚨',
      title: 'Emergency Septic Service',
      shortDesc:
        "Sewage backup, overflow, or tank failure? We answer 24/7 and dispatch within 90 to 120 minutes across the Fayetteville metro. Don't wait — call now.",
      linkText: 'Emergency Line',
      linkHref: 'tel:+19109946791',
    },
    {
      slug: 'septic-inspection',
      icon: '📋',
      title: 'Septic Inspection',
      shortDesc:
        'Selling or buying a home in Cumberland County? North Carolina requires a certified evaluation before property transfers involving septic systems. Full report delivered to your title company.',
      linkText: 'Schedule Inspection',
      linkHref: 'tel:+19109946791',
    },
  ],

  // ── Pricing ────────────────────────────────────────────
  pricing: [
    { label: '1,000-gal tank (standard)', value: '$350 – $475' },
    { label: '1,500-gal tank', value: '$475 – $650' },
    { label: 'Lid digging / riser install', value: '$75 – $150' },
    { label: 'After-hours / emergency fee', value: '+$125' },
    { label: 'Full tank cleaning (add-on)', value: '+$100 – $175' },
  ],

  // ── Service Area ───────────────────────────────────────
  locations: [
    { name: 'Fayetteville, NC', slug: 'fayetteville' },
    { name: 'Spring Lake, NC', slug: 'spring-lake' },
    { name: 'Hope Mills, NC', slug: 'hope-mills' },
    { name: 'Raeford, NC', slug: 'raeford' },
    { name: 'Sanford, NC', slug: 'sanford' },
    { name: 'Southern Pines, NC', slug: 'southern-pines' },
    { name: 'Lillington, NC', slug: 'lillington' },
    { name: 'Fort Liberty Area', slug: 'fort-liberty' },
  ],
  counties: 'Cumberland, Hoke, Harnett, Moore, Lee, Sampson, and Robeson',

  // ── Trust Signals ──────────────────────────────────────
  trustBadges: [
    { icon: '✓', text: 'NC Licensed & Insured' },
    { icon: '🚨', text: '24/7 Emergency Service' },
    { icon: '🏠', text: 'Residential & Commercial' },
    { icon: '📋', text: 'Certified Inspections' },
    { icon: '💰', text: 'Free Estimates' },
  ],

  // ── Why Us ─────────────────────────────────────────────
  reasons: [
    {
      icon: '📍',
      title: 'Local NC Team',
      desc: 'Real (910) number, real local dispatch. Not a call center in another state routing your call.',
    },
    {
      icon: '🕐',
      title: '24/7 Emergency Response',
      desc: "Septic emergencies don't wait for business hours. Neither do we. 90–120 minute dispatch window.",
    },
    {
      icon: '💲',
      title: 'Flat-Rate Pricing',
      desc: 'Confirmed on the phone before we send a truck. No surprise charges. No hidden fees.',
    },
    {
      icon: '📋',
      title: 'NC Certified Inspections',
      desc: 'For Cumberland, Hoke, Harnett, and Moore county property transfers and real estate closings.',
    },
    {
      icon: '🤝',
      title: 'Honest Quotes',
      desc: 'We inspect before recommending repair vs. replacement. No upselling. No scare tactics.',
    },
    {
      icon: '🛡️',
      title: 'Licensed & Insured',
      desc: 'Full liability coverage and proper NC septage hauler licensing. We do it by the book.',
    },
  ],

  // ── FAQ ────────────────────────────────────────────────
  faqs: [
    {
      q: 'How often should a septic tank be pumped in Fayetteville?',
      a: "Most Fayetteville area homes should pump every 3 to 5 years. The exact interval depends on tank size and household size. North Carolina's clay-heavy Piedmont soils are less forgiving than sandier coastal soils — if you can't remember the last pump, it's time. Push toward the shorter end if you have more than 4 people in the home or use a garbage disposal regularly.",
    },
    {
      q: 'What are signs my septic tank is full?',
      a: 'Slow drains throughout the house, sewage smell indoors or in the yard, gurgling pipes, standing water or bright green grass over the drain field, or sewage backing up into tubs and floor drains. Any of these means you need septic tank pumping now, not later.',
    },
    {
      q: 'Do you offer emergency septic pumping in Fayetteville?',
      a: 'Yes. We answer 24/7 and typically dispatch within 90 to 120 minutes for emergency septic service across the Fayetteville metro. Call (910) 994-6791 anytime — day or night.',
    },
    {
      q: 'How much does septic tank pumping cost in Fayetteville, NC?',
      a: 'Standard residential septic pumping in the Fayetteville area runs $350 to $650 depending on tank size and access. We confirm the final price on the phone before sending a truck. No surprise charges. Emergency or after-hours service adds a $125 fee.',
    },
    {
      q: 'Do you service both residential and commercial septic?',
      a: 'Yes. We handle residential septic in Fayetteville plus commercial septic, grease interceptor pumping, and hydro-jetting for restaurants and businesses across the metro and surrounding counties.',
    },
    {
      q: 'What areas around Fayetteville do you serve?',
      a: "Fayetteville, Spring Lake, Hope Mills, Raeford, Sanford, Southern Pines, Lillington, and the Fort Liberty area. We cover Cumberland, Hoke, Harnett, Moore, Lee, Sampson, and Robeson county addresses. If you're in the Fayetteville metro and you're on septic, we probably cover you.",
    },
    {
      q: 'Do you handle NC septic inspections for real estate?',
      a: 'Yes. North Carolina requires a certified evaluation before property transfers involving septic systems. We provide certified inspections and deliver a full report to your title company or the county environmental health office. We can typically schedule within 3 to 5 business days.',
    },
  ],

  // ── Footer ─────────────────────────────────────────────
  disclaimer:
    'This website shares information with local, licensed, and insured septic vendors in the Fayetteville metro who will reach out to provide service.',
};
