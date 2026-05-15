import { site } from './site';

const p = site.phone;
const t = site.phoneTel;
const c = site.city;
const s = site.state;
const sf = site.stateFull;

export interface LocationPage {
  title: string;
  meta: string;
  h1: string;
  intro: string;
  cityName: string;
  county: string;
  bodyHeading: string;
  body: string;
  servicesIntro: string;
  whyLocal: string;
  faqs: { q: string; a: string }[];
}

export const locationPages: Record<string, LocationPage> = {
  fayetteville: {
    title: `Septic Tank Service Fayetteville, ${s} | Pumping, Repair & Inspection`,
    meta: `Septic tank pumping, cleaning, repair, and inspection in Fayetteville, NC. Same-day service, flat-rate pricing, 24/7 emergency response. Call ${p}.`,
    h1: `Septic Tank Service in Fayetteville, ${s}`,
    intro: `Fayetteville Septic provides septic tank pumping, cleaning, repair, and inspection across Fayetteville and greater Cumberland County. Local crews, flat-rate pricing, same-day dispatch for most addresses.`,
    cityName: 'Fayetteville',
    county: 'Cumberland County',
    bodyHeading: 'Local Septic Experts in Fayetteville',
    body: `Fayetteville is the heart of our service area. As the largest city in Cumberland County with over 210,000 residents, the surrounding suburban and rural neighborhoods rely heavily on septic systems — especially outside the city sewer grid in areas like Vanstory Hills, Seventy-First, and the outskirts near Fort Liberty.\n\nThe Piedmont clay soils common across the Fayetteville area make proper septic maintenance critical. Clay drains slowly, which means a full or neglected tank puts more stress on your drain field than it would in sandier coastal soils. Regular pumping every 3 to 5 years is the single most effective way to protect your system and avoid costly repairs.`,
    servicesIntro: `We offer the full range of septic services for Fayetteville homeowners and businesses, including routine pumping, deep cleaning, system repair, 24/7 emergency response, and certified inspections for real estate transactions.`,
    whyLocal: `When you call ${p}, you reach a real local team with a (910) number — not a call center routing your call across state lines. We dispatch from within the ${c} metro and can typically arrive same-day for routine service or within 90–120 minutes for emergencies.`,
    faqs: [
      { q: 'How much does septic pumping cost in Fayetteville?', a: `Standard residential pumping in Fayetteville runs $350 to $650 depending on tank size and access. We confirm the price on the phone before dispatching.` },
      { q: 'Do you service areas outside Fayetteville city limits?', a: `Yes. We cover all of Cumberland County plus Hoke, Harnett, Moore, Lee, Sampson, and Robeson counties.` },
      { q: 'Can you do same-day septic pumping in Fayetteville?', a: `Most routine requests called in before noon are scheduled same-day. Emergency calls are dispatched immediately, 24/7.` },
    ],
  },

  'spring-lake': {
    title: `Septic Tank Service Spring Lake, ${s} | Pumping & Repair`,
    meta: `Septic tank pumping, cleaning, and repair in Spring Lake, NC near Fort Liberty. Same-day service. Call ${p}.`,
    h1: `Septic Tank Service in Spring Lake, ${s}`,
    intro: `Serving Spring Lake and the Fort Liberty corridor with reliable septic tank pumping, cleaning, repair, and inspection. Fast local service, flat-rate pricing.`,
    cityName: 'Spring Lake',
    county: 'Cumberland County',
    bodyHeading: 'Septic Service for Spring Lake & Fort Liberty',
    body: `Spring Lake sits just south of Fort Liberty (formerly Fort Bragg), making it home to a large population of military families and rental properties. Many homes in the Spring Lake area — particularly along the Manchester Road corridor and south toward Harnett County — are on septic systems rather than city sewer.\n\nWhether you're a homeowner maintaining your own system or a landlord managing rental properties near base, routine septic pumping every 3 to 5 years protects your investment and prevents expensive drain field failures. We provide same-day service to Spring Lake addresses and can handle both residential and commercial systems.`,
    servicesIntro: `Our Spring Lake septic services include routine pumping, full tank cleaning, system repair, emergency response, and certified inspections for property sales and PCS moves.`,
    whyLocal: `We're local to the Fayetteville metro and dispatch to Spring Lake daily. Military families on PCS orders who need a fast inspection before closing — we can typically schedule within 3 to 5 business days.`,
    faqs: [
      { q: 'Do you offer septic inspections for home sales in Spring Lake?', a: `Yes. We provide certified septic inspections and deliver the report to your title company. Typically scheduled within 3–5 business days.` },
      { q: 'How soon can you pump my septic tank in Spring Lake?', a: `Same-day for most requests called in before noon. Emergency calls dispatched 24/7.` },
      { q: 'Do you service rental properties near Fort Liberty?', a: `Yes. We work with landlords and property managers across the Spring Lake and Fort Liberty area for routine maintenance and emergency service.` },
    ],
  },

  'hope-mills': {
    title: `Septic Tank Service Hope Mills, ${s} | Pumping & Repair`,
    meta: `Septic tank pumping, cleaning, and repair in Hope Mills, NC. Same-day service, flat-rate pricing. Call ${p}.`,
    h1: `Septic Tank Service in Hope Mills, ${s}`,
    intro: `Hope Mills septic tank pumping, cleaning, repair, and inspection. Local team, flat-rate pricing, same-day service for most addresses.`,
    cityName: 'Hope Mills',
    county: 'Cumberland County',
    bodyHeading: 'Reliable Septic Service in Hope Mills',
    body: `Hope Mills is a growing community in southern Cumberland County where many residential neighborhoods rely on septic systems — especially newer developments and rural properties along the Rockfish Road and Camden Road corridors.\n\nThe mix of clay and loam soils in the Hope Mills area requires careful septic maintenance. A properly pumped and maintained system will last decades, but neglect can lead to drain field saturation and costly replacement. We recommend pumping every 3 to 5 years for most Hope Mills households.`,
    servicesIntro: `We provide full septic services in Hope Mills including pumping, cleaning, repair, 24/7 emergency response, and inspections for real estate closings in Cumberland County.`,
    whyLocal: `Hope Mills is part of our core service area. We dispatch to Hope Mills addresses daily and can typically provide same-day service for routine pumping requests.`,
    faqs: [
      { q: 'How much does septic pumping cost in Hope Mills?', a: `Standard residential pumping in Hope Mills runs $350 to $650 depending on tank size. Price confirmed on the phone before dispatch.` },
      { q: 'Do you offer emergency septic service in Hope Mills?', a: `Yes. We answer 24/7 and dispatch to Hope Mills within 90–120 minutes for sewage backups, overflows, and tank emergencies.` },
      { q: 'How do I know if my Hope Mills home is on septic?', a: `Check your water bill — if you pay for water but not sewer, you're on septic. You can also check Cumberland County property records or look for a cleanout cap in your yard.` },
    ],
  },

  raeford: {
    title: `Septic Tank Service Raeford, ${s} | Pumping & Repair`,
    meta: `Septic tank pumping, cleaning, and repair in Raeford, NC. Serving Hoke County. Same-day service. Call ${p}.`,
    h1: `Septic Tank Service in Raeford, ${s}`,
    intro: `Serving Raeford and Hoke County with professional septic tank pumping, cleaning, repair, and inspection. Local crew, honest pricing, fast response.`,
    cityName: 'Raeford',
    county: 'Hoke County',
    bodyHeading: 'Septic Service for Raeford & Hoke County',
    body: `Raeford is the county seat of Hoke County, one of the fastest-growing counties in ${sf}. As new subdivisions expand west of Fayetteville, many homes in the Raeford area are built on septic systems — and the sandy loam soils common in Hoke County mean drain fields work differently than in clay-heavy Cumberland County.\n\nWhile sandy soils drain faster (which is generally easier on a septic system), they also offer less natural filtration. This makes proper pump schedules and system inspections especially important for Raeford homeowners to protect local groundwater quality.`,
    servicesIntro: `Our Raeford services include residential and commercial septic pumping, full tank cleaning, system diagnosis and repair, emergency service, and certified inspections for Hoke County property transfers.`,
    whyLocal: `Raeford is a short drive from our Fayetteville base. We dispatch to Hoke County addresses regularly and can typically provide same-day service for routine pumping.`,
    faqs: [
      { q: 'Do you serve all of Hoke County?', a: `Yes. We cover Raeford, the surrounding rural areas, and all Hoke County addresses.` },
      { q: 'Is septic tank pumping different in Raeford than Fayetteville?', a: `The process is the same, but Hoke County's sandier soils mean your drain field behaves differently. We adjust our inspection recommendations based on your soil type.` },
      { q: 'How much does septic service cost in Raeford?', a: `Standard residential pumping runs $350–$650. Same flat-rate pricing as our Fayetteville service area. Confirmed on the phone before dispatch.` },
    ],
  },

  sanford: {
    title: `Septic Tank Service Sanford, ${s} | Pumping & Repair`,
    meta: `Septic tank pumping, cleaning, and repair in Sanford, NC. Serving Lee County. Same-day service. Call ${p}.`,
    h1: `Septic Tank Service in Sanford, ${s}`,
    intro: `Professional septic tank pumping, cleaning, repair, and inspection in Sanford and Lee County. Flat-rate pricing, same-day service available.`,
    cityName: 'Sanford',
    county: 'Lee County',
    bodyHeading: 'Trusted Septic Service in Sanford & Lee County',
    body: `Sanford sits at the crossroads of Lee County, where a mix of older established homes and newer rural developments rely on septic systems. The Deep River corridor and the clay-heavy Triassic Basin soils found across Lee County can present unique challenges for septic drain fields.\n\nThese heavy soils drain slowly, which means a neglected or overloaded tank puts your drain field at higher risk of failure. Routine pumping every 3 to 5 years — and sooner if you have a large household — is the most cost-effective way to protect your system in the Sanford area.`,
    servicesIntro: `We offer the full range of septic services for Sanford and Lee County homeowners: pumping, deep cleaning, repair, 24/7 emergency dispatch, and certified inspections for property sales.`,
    whyLocal: `We dispatch to Sanford and Lee County regularly. Most routine pumping requests are completed same-day when called in before noon.`,
    faqs: [
      { q: 'How far is your service area from Sanford?', a: `Sanford is within our regular service area. We dispatch to Lee County addresses routinely.` },
      { q: 'Do the clay soils in Sanford affect my septic system?', a: `Yes. Lee County's Triassic Basin clay soils drain slowly, which puts more stress on your drain field. Staying on a 3–5 year pump schedule is especially important here.` },
      { q: 'Can you do a septic inspection for a home sale in Lee County?', a: `Yes. We provide certified inspections with a full report for your title company. Typically scheduled within 3–5 business days.` },
    ],
  },

  'southern-pines': {
    title: `Septic Tank Service Southern Pines, ${s} | Pumping & Repair`,
    meta: `Septic tank pumping, cleaning, and repair in Southern Pines, NC. Serving Moore County. Call ${p}.`,
    h1: `Septic Tank Service in Southern Pines, ${s}`,
    intro: `Septic tank pumping, cleaning, repair, and inspection for Southern Pines and Moore County. Local crew, flat-rate pricing, fast response.`,
    cityName: 'Southern Pines',
    county: 'Moore County',
    bodyHeading: 'Septic Service for Southern Pines & Moore County',
    body: `Southern Pines and the greater Pinehurst area sit atop the Sandhills region of ${sf}, where sandy, well-draining soils create a different septic environment than the clay-heavy Piedmont to the north. While sandy soils are generally easier on drain fields, they also filter less aggressively — meaning a neglected system can contaminate groundwater faster.\n\nMany homes in Southern Pines, Pinehurst, Aberdeen, and the surrounding Moore County communities are on septic systems. Whether you're maintaining a primary residence or a vacation property, routine pumping every 3 to 5 years keeps your system healthy and your property value protected.`,
    servicesIntro: `We provide residential and commercial septic services across Southern Pines and Moore County, including pumping, cleaning, repair, emergency response, and certified inspections.`,
    whyLocal: `Southern Pines and Moore County are within our regular service area. We dispatch to the Sandhills region routinely and can typically offer same-day service for routine pumping.`,
    faqs: [
      { q: 'Do the sandy soils in Southern Pines affect septic maintenance?', a: `Sandy Sandhills soils drain faster, which is easier on your drain field but offers less natural filtration. Regular pumping and inspection are important to protect groundwater.` },
      { q: 'Do you serve Pinehurst and Aberdeen too?', a: `Yes. We cover all of Moore County including Southern Pines, Pinehurst, Aberdeen, Whispering Pines, and surrounding areas.` },
      { q: 'How much does septic pumping cost in Southern Pines?', a: `Standard residential pumping runs $350–$650. Same pricing as our full service area. Confirmed before dispatch.` },
    ],
  },

  lillington: {
    title: `Septic Tank Service Lillington, ${s} | Pumping & Repair`,
    meta: `Septic tank pumping, cleaning, and repair in Lillington, NC. Serving Harnett County. Call ${p}.`,
    h1: `Septic Tank Service in Lillington, ${s}`,
    intro: `Serving Lillington and Harnett County with professional septic tank pumping, cleaning, repair, and inspection. Fast, honest, local service.`,
    cityName: 'Lillington',
    county: 'Harnett County',
    bodyHeading: 'Septic Service for Lillington & Harnett County',
    body: `Lillington is the county seat of Harnett County, a rapidly growing area between Fayetteville and Raleigh where many new and existing homes are on septic systems. The Cape Fear River basin soils vary across Harnett County — from heavier clays near the river to sandier soils in the eastern portions.\n\nAs Harnett County continues to grow with new housing developments, septic systems remain the standard for homes outside the Lillington and Dunn town limits. Routine pumping every 3 to 5 years prevents the kind of drain field failures that cost $8,000 to $15,000 to repair.`,
    servicesIntro: `Our Lillington services include residential and commercial septic pumping, tank cleaning, system repair, emergency service, and certified inspections for Harnett County real estate transactions.`,
    whyLocal: `Lillington and Harnett County are within our regular dispatch area. We provide same-day service for most routine requests and 24/7 emergency response.`,
    faqs: [
      { q: 'Do you serve all of Harnett County?', a: `Yes. We cover Lillington, Dunn, Angier, Erwin, Coats, and all surrounding Harnett County addresses.` },
      { q: 'How fast can you get to Lillington for an emergency?', a: `We dispatch to Harnett County emergencies within 90–120 minutes, 24/7. Call ${p} anytime.` },
      { q: 'Do I need a septic inspection to sell my home in Harnett County?', a: `${sf} requires a certified evaluation before property transfers involving septic systems. We provide the inspection and deliver the report to your title company.` },
    ],
  },

  'fort-liberty': {
    title: `Septic Tank Service Fort Liberty Area, ${s} | Pumping & Repair`,
    meta: `Septic tank pumping and repair near Fort Liberty (formerly Fort Bragg), NC. Serving military families. Call ${p}.`,
    h1: `Septic Tank Service Near Fort Liberty, ${s}`,
    intro: `Septic tank pumping, cleaning, repair, and inspection for homes and rentals near Fort Liberty. Fast service for military families, PCS inspections, and landlords.`,
    cityName: 'Fort Liberty',
    county: 'Cumberland County',
    bodyHeading: 'Septic Service for the Fort Liberty Community',
    body: `The neighborhoods surrounding Fort Liberty — including Spring Lake, the Linden area, Manchester, and southern Harnett County — are home to thousands of military families living in homes on septic systems. Whether you're renting, own your home, or manage rental properties near base, septic maintenance is essential.\n\nPCS moves create a constant cycle of property inspections and transfers in this area. If you're selling or buying a home near Fort Liberty, ${sf} requires a certified septic evaluation before closing. We specialize in fast-turnaround inspections for military families on tight PCS timelines.`,
    servicesIntro: `We offer full septic services for the Fort Liberty corridor: pumping, cleaning, repair, 24/7 emergency response, and fast-turnaround inspections for PCS moves and property transfers.`,
    whyLocal: `The Fort Liberty area is core to our service territory. We understand military timelines and can typically schedule inspections within 3–5 business days — faster if your PCS requires it.`,
    faqs: [
      { q: 'Can you do a rush septic inspection for a PCS move?', a: `Yes. We understand PCS timelines are tight. Call us and we'll work to schedule your inspection as quickly as possible.` },
      { q: 'Do you work with property managers near Fort Liberty?', a: `Yes. We work with landlords and property management companies across the Fort Liberty area for routine maintenance and emergency calls.` },
      { q: 'What areas near Fort Liberty do you serve?', a: `Spring Lake, Manchester, Linden, southern Harnett County, and all surrounding neighborhoods. If you're near base and on septic, we cover you.` },
    ],
  },
};
