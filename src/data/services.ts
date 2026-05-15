import { site } from './site';

const p = site.phone;
const t = site.phoneTel;
const c = site.city;
const s = site.state;
const sf = site.stateFull;
const co = site.county;

export const servicePages = {
  'septic-tank-pumping': {
    title: `Septic Tank Pumping ${c}, ${s} | Same-Day Service`,
    meta: `Septic tank pumping in ${c}, ${s} and surrounding counties. Flat-rate pricing, same-day service. Call ${p} for a free estimate.`,
    h1: `Septic Tank Pumping in ${c}, ${s}`,
    subtitle: `Fast, flat-rate septic tank pumping across the ${c} metro. Most homes pumped same-day, with transparent pricing locked in before our truck leaves the lot.`,
    heroImage: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sections: [
      {
        heading: `Professional Septic Tank Pumping for ${c} Homes`,
        body: `Septic tank pumping is the single most important piece of routine maintenance for any home on a septic system. In the ${c} metro, we recommend pumping every 3 to 5 years for most families. Skip too many pumps and solids start migrating into your drain field, which is where the cheap maintenance turns into a $10,000-plus repair.\n\nOur local septic pumping crew services homes across ${co}, Hoke, Harnett, and Moore counties with same-day availability for most addresses. We arrive with a fully-equipped vacuum truck, locate the access lid (digging it up if needed), pump the full contents including the sludge layer at the bottom, inspect the baffles and tank walls while we're there, and provide a written record for your files.`,
        image: 'https://images.pexels.com/photos/6419205/pexels-photo-6419205.jpeg?auto=compress&cs=tinysrgb&w=800',
        imageAlt: `Septic technician connecting vacuum hose to residential tank in ${c}`,
      },
      {
        heading: `What Septic Tank Pumping Costs in ${c}`,
        body: `Pricing for septic tank pumping in the ${c} metro is more transparent than most homeowners realize. A 1,000-gallon residential tank typically runs $350 to $475. A 1,500-gallon tank runs $475 to $650. If your access lid is buried more than 12 inches deep or hasn't been used in years, add $75 to $150 for digging and a riser installation, which actually saves money on every future service.\n\nEmergency or after-hours pumping adds a $125 fee. We quote the final number on the phone before dispatching. If we find something unexpected on-site, we stop and call you before adding any charges.`,
      },
      {
        heading: 'How Often You Should Pump',
        body: `${sf} guidance says 3 to 5 years for most residential systems. Push toward the shorter end if you have more than 4 people in the home, use a garbage disposal regularly, do heavy laundry loads, or have an older tank without an effluent filter.\n\nIf you bought your home in the last few years and don't have pumping records, that's reason enough to schedule. We can help confirm whether the previous owner kept up with maintenance. If they didn't, the first pump pays for itself by extending your drain field's life by years.`,
      },
      {
        heading: `Same-Day Service Across the ${c} Metro`,
        body: `Routine pumping requests called in before noon are typically scheduled the same day across our service area. That includes ${c}, Spring Lake, Hope Mills, Raeford, Sanford, Southern Pines, and Lillington. For emergency pumping (active backup, overflow into the home, sewage in the yard), we dispatch immediately and prioritize over scheduled service. Call our local (910) number day or night.`,
      },
    ],
    faqs: [
      { q: 'How long does septic tank pumping take?', a: 'A standard residential pump takes 45 to 90 minutes from arrival to cleanup, depending on tank size and access. If we need to dig up the lid, add 30 minutes.' },
      { q: 'Should I be home during the pumping?', a: "It's helpful but not required. We need access to the tank and a quick conversation about any concerns. If you can't be home, leave a note about gate codes or dogs, and we'll send photos and a receipt when finished." },
      { q: 'What do you do with the waste after pumping?', a: `All septage is transported to a permitted ${sf} disposal site. We carry proper septage hauler licensing and maintain disposal records on file.` },
      { q: 'Can you pump in winter?', a: `Yes. We pump year-round across the ${c} metro. Frozen ground can make digging harder if the lid is buried, but doesn't affect the actual pumping.` },
    ],
  },

  'septic-tank-cleaning': {
    title: `Septic Tank Cleaning ${c}, ${s} | Full Tank Wash`,
    meta: `Full septic tank cleaning in ${c}, ${s}. Wall wash-down, baffle inspection, filter cleaning. Call ${p} for same-day service.`,
    h1: `Septic Tank Cleaning in ${c}, ${s}`,
    subtitle: `Full septic tank cleaning across the ${c} metro. More than just pumping: wall wash-down, baffle inspection, filter cleaning, and a complete tank health check.`,
    heroImage: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sections: [
      {
        heading: 'What Septic Tank Cleaning Actually Means',
        body: `A lot of homeowners use "pumping" and "cleaning" interchangeably. They're not the same thing. Pumping removes the liquid and the floating scum layer, then sucks out the sludge at the bottom. Cleaning goes further: after pumping, we wash down the tank walls with high-pressure water, inspect the inlet and outlet baffles for damage, clean any effluent filter if your tank has one, and visually check the tank walls and concrete for cracks, root intrusion, or other issues.\n\nWe recommend full cleaning every other pump (so roughly every 6 to 10 years for most homes) or any time you've gone longer than 4 years between services.`,
        image: 'https://images.pexels.com/photos/6419205/pexels-photo-6419205.jpeg?auto=compress&cs=tinysrgb&w=800',
        imageAlt: `Septic crew performing full tank cleaning in ${c}`,
      },
      {
        heading: `Why Full Cleaning Matters in ${sf}`,
        body: `${sf}'s Piedmont clay and silt soils mean septic systems work harder than they do in sandier regions. Effluent filters get clogged faster. Baffles get attacked by hydrogen sulfide buildup over time. Tank walls can develop hairline cracks that let groundwater in and effluent out.\n\nA proper cleaning catches all of this before it becomes a drain field problem. A cracked outlet baffle caught during cleaning is a one-hour fix. The same baffle missed for another year can flood the drain field with untreated solids and turn into a five-figure repair.`,
      },
      {
        heading: `Cleaning Cost in the ${c} Metro`,
        body: `Full cleaning runs about $100 to $175 above the cost of standard pumping. So a 1,000-gallon tank with cleaning is typically $450 to $650 all-in, and a 1,500-gallon tank with cleaning runs $575 to $825. That includes the pump, the wash-down, the baffle inspection, the filter clean, and a written report of what we found.\n\nIf we identify any issues during cleaning, we quote any needed repairs before doing additional work. No surprise charges.`,
      },
    ],
    faqs: [
      { q: 'How is cleaning different from pumping?', a: 'Pumping removes the contents of the tank. Cleaning includes pumping plus a high-pressure wash of the tank walls, full baffle and filter inspection, and a check for cracks, leaks, and root intrusion.' },
      { q: 'Do I need cleaning or just pumping?', a: "If you pump every 3 to 5 years like clockwork, alternate between pumping-only and full cleaning. If it's been over 4 years, go with full cleaning the first time." },
      { q: 'Will tank cleaning kill the bacteria my septic system needs?', a: "No. Healthy bacteria live throughout your home's wastewater stream, not just in the tank. They'll reestablish within days." },
    ],
  },

  'septic-tank-repair': {
    title: `Septic Tank Repair ${c}, ${s} | Diagnosis & Repair`,
    meta: `Septic tank repair in ${c}, ${s}. Baffle replacement, lid repair, drain field diagnosis. Honest quotes. Call ${p}.`,
    h1: `Septic Tank Repair in ${c}, ${s}`,
    subtitle: `Honest septic repair across the ${c} metro. We diagnose the real problem and quote repair vs. replacement so you can make the right call.`,
    heroImage: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sections: [
      {
        heading: 'Common Septic Repairs We Handle',
        body: `Most septic repairs fall into a handful of categories: cracked or collapsed tank lids, damaged inlet or outlet baffles, broken or deteriorated risers, effluent filter failures, distribution box problems, and drain field issues ranging from minor clogs to full saturation.\n\nWe start every repair job with a full inspection. That means pumping the tank first (if it hasn't been done recently), visually inspecting every component, and sometimes running a camera through the lines to find the exact problem. Only then do we quote the work.`,
        image: 'https://images.pexels.com/photos/6419205/pexels-photo-6419205.jpeg?auto=compress&cs=tinysrgb&w=800',
        imageAlt: `Technician inspecting septic system components in ${c}`,
      },
      {
        heading: 'Repair vs. Replacement',
        body: `Not every septic problem requires a new system. A cracked baffle is a $300 to $600 repair. A new riser and lid is $250 to $500. Even a partially failing drain field can sometimes be restored with aeration or rest-and-rotate techniques before you need to spend $10,000 to $15,000 on a full replacement.\n\nWe'll always tell you what the least expensive effective fix is. If replacement is truly the right call, we'll explain exactly why and provide a detailed quote.`,
      },
      {
        heading: `${sf} Septic Repair Regulations`,
        body: `In ${sf}, any repair beyond basic maintenance (pumping, filter cleaning) requires a permit from your local county environmental health office. ${co} County handles this through their Environmental Health division. We coordinate the permitting process for you and ensure all work meets state code.\n\nFor repairs involving the drain field or tank replacement, a soil evaluation or existing permit records are typically required. We can help pull records and navigate the process.`,
      },
    ],
    faqs: [
      { q: 'How do I know if my septic needs repair?', a: 'Warning signs include persistent sewage odor, standing water over the drain field, bright green grass in one area of the yard, slow drains that persist after pumping, or sewage backing up into the home.' },
      { q: 'How much does septic repair cost?', a: `Minor repairs like baffle replacement or riser installation run $250 to $600. Major repairs involving the drain field or tank replacement range from $3,000 to $15,000+ depending on the system type and soil conditions in the ${c} area.` },
      { q: 'Do you offer free repair estimates?', a: 'Yes. We provide a free on-site evaluation and written estimate before any repair work begins. No obligation.' },
    ],
  },

  'emergency-septic-service': {
    title: `Emergency Septic Service ${c}, ${s} | 24/7 Response`,
    meta: `24/7 emergency septic service in ${c}, ${s}. Sewage backup, overflow, tank failure. 90-120 minute dispatch. Call ${p} now.`,
    h1: `Emergency Septic Service in ${c}, ${s}`,
    subtitle: `Sewage backup, overflow, or tank failure? We answer 24/7 and dispatch within 90 to 120 minutes across the ${c} metro.`,
    heroImage: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sections: [
      {
        heading: "When It's a Septic Emergency",
        body: `Not every septic issue is an emergency, but some absolutely are. Call us immediately if you have sewage backing up into your home through drains, tubs, or toilets, raw sewage pooling in your yard, a strong sewage odor inside your home that won't go away, or a septic alarm going off (if your system has one).\n\nThese situations can create health hazards, contaminate groundwater, and cause property damage. Don't wait for Monday morning — call our 24/7 emergency line now.`,
        image: 'https://images.pexels.com/photos/6419205/pexels-photo-6419205.jpeg?auto=compress&cs=tinysrgb&w=800',
        imageAlt: `Emergency septic truck dispatched in ${c} area`,
      },
      {
        heading: 'Our Emergency Response Process',
        body: `When you call our emergency line, here's what happens:\n\n1. You speak to a real person — not a voicemail or answering service.\n2. We triage the situation over the phone and give you immediate steps to minimize damage (stop running water, avoid flushing, stay away from standing sewage).\n3. We dispatch a crew with a vacuum truck. Typical response time is 90 to 120 minutes across the ${c} metro.\n4. On-site, we pump the tank to stop the immediate backup, then diagnose the root cause.\n5. If repairs are needed beyond the emergency pump, we quote them separately. No pressure, no scare tactics.`,
      },
      {
        heading: 'Emergency Septic Costs',
        body: `Emergency pumping adds a $125 after-hours fee on top of standard pumping rates. So a typical emergency pump runs $475 to $775 total depending on tank size. We confirm pricing on the phone before dispatch — even in emergencies.\n\nWe know a midnight septic backup is stressful enough without worrying about surprise charges. The $125 emergency fee covers our crew's after-hours availability and priority dispatch. That's it.`,
      },
    ],
    faqs: [
      { q: 'What should I do while waiting for the emergency crew?', a: 'Stop all water use in the home immediately. Don\'t flush toilets, run faucets, or start laundry or dishwasher cycles. If sewage is backing up into the home, keep children and pets away from affected areas.' },
      { q: 'How fast can you get here?', a: `We typically dispatch within 90 to 120 minutes for addresses in the ${c} metro. Outlying areas in Hoke, Moore, or Lee counties may take slightly longer.` },
      { q: 'Do you charge extra for nights and weekends?', a: 'Emergency service adds a flat $125 fee on top of standard pumping rates. No additional charges for nights, weekends, or holidays beyond that.' },
    ],
  },

  'septic-inspection': {
    title: `Septic Inspection ${c}, ${s} | Real Estate & Routine`,
    meta: `Certified septic inspections in ${c}, ${s}. Real estate transfers, routine evaluations. Full report for title companies. Call ${p}.`,
    h1: `Septic Inspection in ${c}, ${s}`,
    subtitle: `Certified septic inspections for real estate transfers and routine evaluations across the ${c} metro. Full report delivered to your title company.`,
    heroImage: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1200',
    sections: [
      {
        heading: `${sf} Septic Inspections for Real Estate`,
        body: `Selling or buying a home with a septic system in ${co} County? ${sf} regulations require proper evaluation of septic systems during property transfers. The inspection ensures the system is functioning correctly and not contaminating groundwater or surface water.\n\nWe provide certified inspections and deliver a full written report to your title company, real estate agent, or county environmental health office. Most inspections can be scheduled within 3 to 5 business days.`,
        image: 'https://images.pexels.com/photos/6419205/pexels-photo-6419205.jpeg?auto=compress&cs=tinysrgb&w=800',
        imageAlt: `Septic inspector reviewing system documentation in ${c}`,
      },
      {
        heading: 'What a Septic Inspection Covers',
        body: `A thorough septic inspection includes locating the tank and all system components, measuring sludge and scum layers, inspecting baffles and filters, checking the tank for structural damage, evaluating the drain field for signs of failure (standing water, odor, surfacing effluent), reviewing maintenance records when available, and verifying system size against the home's bedroom count.\n\nWe also check for common issues specific to ${sf}'s Piedmont region: root intrusion from hardwoods, clay soil compaction over drain lines, and groundwater infiltration.`,
      },
      {
        heading: 'Inspection for Buyers vs. Sellers',
        body: `If you're the seller, scheduling an inspection early gives you time to address any issues before they become deal-breakers at closing. A clean inspection report is a selling point.\n\nIf you're the buyer, an independent inspection protects you from inheriting a failing system. Septic replacement in ${sf} can cost $8,000 to $15,000+, so knowing the system's condition before closing is worth every dollar of the inspection fee.`,
      },
    ],
    faqs: [
      { q: 'How much does a septic inspection cost?', a: `Septic inspections in the ${c} area typically run $300 to $500 depending on system type and accessibility. We confirm pricing when you schedule.` },
      { q: 'How long does an inspection take?', a: 'Most residential inspections take 1 to 2 hours on-site. Report delivery is typically same-day or next business day.' },
      { q: 'Is a septic inspection required to sell a home in NC?', a: `${sf} requires proper evaluation of septic systems during property transfers. Your county environmental health office and title company will advise on specific requirements for ${co} County.` },
    ],
  },
};
