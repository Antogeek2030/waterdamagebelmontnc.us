export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  process: string[];
  priceRange: string;
  faqs: { question: string; answer: string }[];
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: 'water-damage-restoration',
    title: 'Water Damage Restoration in Belmont, NC',
    shortTitle: 'Water Damage Restoration',
    description: 'Complete water damage cleanup and restoration for homes and businesses in Belmont.',
    intro: 'When water invades your property in Belmont, quick professional action makes all the difference. Our team responds promptly to extract standing water, dry affected areas, and restore your space to a safe, livable condition. We handle everything from minor leaks to major flooding events with care and clear communication every step of the way.',
    process: [
      'Rapid on-site assessment to determine the source and extent of water damage',
      'Complete water extraction using commercial-grade pumps and vacuums',
      'Strategic placement of air movers and dehumidifiers for thorough drying',
      'Cleaning and sanitizing of affected surfaces and materials',
      'Repairs and reconstruction as needed to return your property to normal',
    ],
    priceRange: 'Projects typically range from a few hundred dollars for small localized issues to several thousand for extensive flooding. We provide a clear estimate after the initial inspection.',
    faqs: [
      {
        question: 'How quickly can you respond to a water emergency in Belmont?',
        answer: 'We prioritize emergency calls and aim to arrive as soon as possible, often within the same day. Call us at +1 (877) 587-0125 for the fastest response.',
      },
      {
        question: 'Do I need to be home during the restoration process?',
        answer: 'It helps for the initial assessment, but once work begins we can often continue with limited interruption to your routine. We coordinate closely with you.',
      },
      {
        question: 'Will my insurance cover water damage restoration?',
        answer: 'Many policies cover sudden water damage. We can document the damage thoroughly to support your claim. Check with your provider for specifics.',
      },
    ],
    metaDescription: 'Professional water damage restoration in Belmont, NC. Fast response, thorough drying, and careful restoration for homes and businesses. Call +1 (877) 587-0125.',
  },
  {
    slug: 'flood-damage-cleanup',
    title: 'Flood Damage Cleanup in Belmont, NC',
    shortTitle: 'Flood Damage Cleanup',
    description: 'Thorough flood cleanup services for residential and commercial properties.',
    intro: 'Flooding can leave behind more than just water—mud, debris, and contaminated materials often follow. Our Belmont team specializes in complete flood damage cleanup, removing water and residual materials while protecting your property from secondary issues like mold growth. We work methodically so you can focus on getting back to normal.',
    process: [
      'Safety assessment and power isolation if needed',
      'Removal of standing water and flood debris',
      'Extraction from carpets, floors, and structural cavities',
      'Cleaning of mud and silt from surfaces and contents',
      'Drying, deodorizing, and preparing for reconstruction',
    ],
    priceRange: 'Flood cleanup costs vary widely based on water depth, square footage, and contamination level. Expect a detailed quote after our free on-site evaluation.',
    faqs: [
      {
        question: 'Is flood water considered contaminated?',
        answer: 'Yes, flood water often carries bacteria and pollutants. We treat it as Category 3 water and use appropriate protective measures and sanitizers.',
      },
      {
        question: 'How long does flood cleanup usually take?',
        answer: 'Smaller events may be handled in a day or two. Larger floods can take several days of extraction and drying before reconstruction begins.',
      },
      {
        question: 'Can you help with contents cleaning after a flood?',
        answer: 'Yes. We can clean and restore salvageable furniture, documents, and personal items when conditions allow.',
      },
    ],
    metaDescription: 'Expert flood damage cleanup in Belmont, NC. We remove water, debris, and contaminants, then dry and sanitize your property. Call +1 (877) 587-0125 today.',
  },
  {
    slug: 'emergency-water-removal',
    title: 'Emergency Water Removal in Belmont, NC',
    shortTitle: 'Emergency Water Removal',
    description: 'Fast emergency water extraction services available when you need them most.',
    intro: 'Standing water damages flooring, drywall, and belongings every hour it remains. Our emergency water removal service in Belmont focuses on rapid extraction so drying can begin sooner. Whether the source is a burst pipe, appliance failure, or storm, we bring the equipment and experience needed to get water out of your property quickly.',
    process: [
      'Immediate dispatch upon your call',
      'Identification and, if possible, isolation of the water source',
      'High-volume extraction of standing water',
      'Moisture mapping to locate hidden water',
      'Setup of drying equipment and ongoing monitoring',
    ],
    priceRange: 'Emergency extraction is typically priced by the amount of water and affected area. We give transparent pricing before major work begins.',
    faqs: [
      {
        question: 'Do you offer 24/7 emergency water removal?',
        answer: 'Yes. Call +1 (877) 587-0125 any time. We understand water emergencies do not wait for business hours.',
      },
      {
        question: 'What should I do while waiting for your team?',
        answer: 'If safe, shut off the water source and electricity to affected areas. Move valuables out of harm’s way and avoid walking through standing water.',
      },
      {
        question: 'Will you remove water from under floors or behind walls?',
        answer: 'Yes. We use specialized tools and, when necessary, limited demolition to access and extract trapped water.',
      },
    ],
    metaDescription: '24/7 emergency water removal in Belmont, NC. Fast extraction of standing water to limit damage. Call +1 (877) 587-0125 for immediate help.',
  },
  {
    slug: 'basement-waterproofing',
    title: 'Basement Waterproofing in Belmont, NC',
    shortTitle: 'Basement Waterproofing',
    description: 'Protect your Belmont basement from water intrusion with proven waterproofing solutions.',
    intro: 'A wet basement is more than an inconvenience—it can damage belongings, create musty odors, and reduce usable living space. We offer practical basement waterproofing options tailored to Belmont homes, addressing both interior drainage and exterior moisture control so you can reclaim a dry, functional lower level.',
    process: [
      'Thorough inspection of foundation, grading, and existing drainage',
      'Identification of water entry points and contributing factors',
      'Recommendation of interior or exterior solutions based on findings',
      'Installation of drainage systems, sealants, or sump pumps as needed',
      'Final testing and walkthrough to confirm performance',
    ],
    priceRange: 'Basement waterproofing projects often range from mid hundreds for minor sealing to several thousand for full drainage systems. We provide itemized proposals.',
    faqs: [
      {
        question: 'Is interior or exterior waterproofing better?',
        answer: 'It depends on the source of water and site conditions. We evaluate both and recommend the most effective, cost-conscious approach for your property.',
      },
      {
        question: 'Do you install sump pumps?',
        answer: 'Yes. Sump pumps are a common and reliable part of many basement waterproofing systems in our area.',
      },
      {
        question: 'How long does a typical waterproofing job take?',
        answer: 'Most residential projects are completed within a few days once materials are on site. Larger or exterior jobs may take longer.',
      },
    ],
    metaDescription: 'Basement waterproofing in Belmont, NC. Interior and exterior solutions to keep your lower level dry. Call +1 (877) 587-0125 for an assessment.',
  },
  {
    slug: 'mold-remediation',
    title: 'Mold Remediation in Belmont, NC',
    shortTitle: 'Mold Remediation',
    description: 'Safe, thorough mold removal and prevention services for Belmont properties.',
    intro: 'Mold thrives in damp environments left behind by water damage. Our remediation process focuses on containing the affected area, removing mold growth, and addressing the moisture source so mold is less likely to return. We treat every project with attention to indoor air quality and the well-being of the people who live or work in the space.',
    process: [
      'Inspection and moisture assessment to locate mold and its cause',
      'Containment of the work area to limit spore spread',
      'Removal of contaminated materials that cannot be cleaned',
      'Cleaning and treatment of salvageable surfaces',
      'Drying and recommendations to prevent future growth',
    ],
    priceRange: 'Mold remediation pricing depends on the size of the affected area and materials involved. We share a clear scope and estimate before starting.',
    faqs: [
      {
        question: 'Can I clean mold myself?',
        answer: 'Small surface mold on non-porous materials can sometimes be cleaned by homeowners, but larger or hidden growth is best handled by professionals with proper containment and equipment.',
      },
      {
        question: 'Will mold remediation disrupt my whole house?',
        answer: 'We use containment barriers and negative air pressure so work stays limited to the affected zone whenever possible.',
      },
      {
        question: 'How do you prevent mold from coming back?',
        answer: 'By fixing the moisture source and ensuring thorough drying. We also offer guidance on humidity control and maintenance.',
      },
    ],
    metaDescription: 'Professional mold remediation in Belmont, NC. Safe removal, moisture control, and prevention strategies. Call +1 (877) 587-0125.',
  },
  {
    slug: 'sewage-cleanup',
    title: 'Sewage Cleanup in Belmont, NC',
    shortTitle: 'Sewage Cleanup',
    description: 'Careful sewage backup cleanup and sanitization for homes and businesses.',
    intro: 'A sewage backup is one of the more unpleasant and hazardous water events a property can face. Our team handles sewage cleanup in Belmont with the protective gear, specialized equipment, and sanitizing processes required to restore a safe environment. We work efficiently while prioritizing health and thorough decontamination.',
    process: [
      'Safety evaluation and use of appropriate protective equipment',
      'Removal of sewage water and contaminated materials',
      'Thorough cleaning and disinfection of affected areas',
      'Odor control and drying of the space',
      'Guidance on any needed repairs or further restoration',
    ],
    priceRange: 'Sewage cleanup costs reflect the contamination level and square footage involved. We provide transparent estimates after assessing the situation.',
    faqs: [
      {
        question: 'Is sewage water dangerous?',
        answer: 'Yes. It can contain bacteria, viruses, and other pathogens. Avoid contact and call professionals for safe cleanup.',
      },
      {
        question: 'Do you replace materials damaged by sewage?',
        answer: 'Porous materials that cannot be fully cleaned are typically removed and replaced. We discuss options with you during the assessment.',
      },
      {
        question: 'How soon should sewage be cleaned up?',
        answer: 'As quickly as possible. Prompt action reduces health risks and limits damage to flooring, walls, and belongings.',
      },
    ],
    metaDescription: 'Safe sewage cleanup in Belmont, NC. Professional extraction, disinfection, and restoration after backups. Call +1 (877) 587-0125.',
  },
  {
    slug: 'pipe-burst-repair',
    title: 'Pipe Burst Water Damage in Belmont, NC',
    shortTitle: 'Pipe Burst Repair',
    description: 'Rapid response and restoration after burst pipes in Belmont homes and businesses.',
    intro: 'A burst pipe can release large volumes of water in a short time, soaking floors, walls, and ceilings. We respond quickly to extract water, dry the structure, and help you coordinate any necessary plumbing repairs so your Belmont property can return to normal with minimal lasting damage.',
    process: [
      'Emergency water shutoff assistance if the source is still active',
      'Extraction of water from floors, carpets, and lower levels',
      'Inspection for water migration into walls and ceilings',
      'Controlled drying with monitoring of moisture levels',
      'Coordination with plumbers or restoration of finished surfaces',
    ],
    priceRange: 'Costs depend on how long water ran and which materials were affected. Early intervention usually keeps the project smaller and more affordable.',
    faqs: [
      {
        question: 'What should I do first when a pipe bursts?',
        answer: 'Shut off the main water supply if you can do so safely, then call us at +1 (877) 587-0125. Avoid using electrical switches in wet areas.',
      },
      {
        question: 'Can you help locate the leak?',
        answer: 'We can often help identify the general area. Licensed plumbers handle the actual pipe repair; we focus on the resulting water damage.',
      },
      {
        question: 'Will drywall need to be replaced after a pipe burst?',
        answer: 'Sometimes. If drywall has been saturated for an extended period it may need removal. We only remove what is necessary.',
      },
    ],
    metaDescription: 'Pipe burst water damage restoration in Belmont, NC. Fast extraction and drying after broken pipes. Call +1 (877) 587-0125 for help.',
  },
  {
    slug: 'appliance-leak-cleanup',
    title: 'Appliance Leak Cleanup in Belmont, NC',
    shortTitle: 'Appliance Leak Cleanup',
    description: 'Cleanup and drying after washer, dishwasher, refrigerator, and water heater leaks.',
    intro: 'Leaking appliances are a common source of water damage in Belmont homes. Whether a washing machine hose failed or a water heater began to drip, we handle the extraction, drying, and cleanup so cabinets, flooring, and nearby walls are protected from prolonged moisture.',
    process: [
      'Assessment of the leak source and affected materials',
      'Water extraction from floors, under cabinets, and nearby spaces',
      'Drying of structural materials and contents',
      'Cleaning of any residue or secondary damage',
      'Advice on preventing similar future issues',
    ],
    priceRange: 'Most appliance leak cleanups fall on the more modest end of the cost spectrum when caught early. We quote after seeing the extent of moisture.',
    faqs: [
      {
        question: 'My washing machine leaked—do I need professional help?',
        answer: 'If water reached under cabinets, into walls, or soaked flooring, professional drying helps prevent hidden mold and structural issues.',
      },
      {
        question: 'Can you dry under kitchen cabinets?',
        answer: 'Yes. We use specialized equipment and techniques to address moisture in hard-to-reach areas.',
      },
      {
        question: 'How long does drying take after an appliance leak?',
        answer: 'Many smaller leaks are dried within a day or two with proper equipment. We monitor moisture until targets are met.',
      },
    ],
    metaDescription: 'Appliance leak cleanup in Belmont, NC. Fast drying after washer, dishwasher, or water heater failures. Call +1 (877) 587-0125.',
  },
  {
    slug: 'roof-leak-water-damage',
    title: 'Roof Leak Water Damage Restoration in Belmont, NC',
    shortTitle: 'Roof Leak Restoration',
    description: 'Interior water damage restoration caused by roof leaks in Belmont.',
    intro: 'Roof leaks can quietly damage ceilings, insulation, and walls long before the problem becomes obvious. Once water is inside, our focus is on stopping further intrusion where possible, extracting moisture, and restoring interior finishes so your Belmont home stays comfortable and protected.',
    process: [
      'Inspection of interior damage and moisture mapping',
      'Temporary protection measures if the roof is still leaking',
      'Removal of saturated ceiling materials when necessary',
      'Drying of framing, insulation, and surrounding areas',
      'Coordination with roofing professionals and interior repairs',
    ],
    priceRange: 'Interior restoration costs depend on how much material was affected. We separate our work from any roof repairs so pricing stays clear.',
    faqs: [
      {
        question: 'Do you repair roofs as well?',
        answer: 'We focus on the interior water damage. We can recommend or coordinate with trusted local roofers for the exterior repair.',
      },
      {
        question: 'Can ceiling stains be cleaned or must drywall be replaced?',
        answer: 'Minor stains can sometimes be sealed and painted. Extensive saturation usually requires removal of the damaged section.',
      },
      {
        question: 'How do I know if insulation is wet?',
        answer: 'We use moisture meters and thermal imaging where helpful to check insulation and framing without unnecessary demolition.',
      },
    ],
    metaDescription: 'Roof leak water damage restoration in Belmont, NC. Interior drying and repair after roof leaks. Call +1 (877) 587-0125.',
  },
  {
    slug: 'crawl-space-drying',
    title: 'Crawl Space Drying & Cleanup in Belmont, NC',
    shortTitle: 'Crawl Space Drying',
    description: 'Professional drying and moisture control for Belmont crawl spaces.',
    intro: 'Crawl spaces often stay damp, creating conditions for mold, wood rot, and musty air that migrates into living areas. Our crawl space drying service removes standing water or high humidity, treats affected materials, and helps you understand options for longer-term moisture control in Belmont homes.',
    process: [
      'Access and visual inspection of the crawl space',
      'Removal of standing water if present',
      'Drying of soil, vapor barriers, and structural members',
      'Cleaning of debris and treatment of any microbial growth',
      'Recommendations for encapsulation or drainage improvements',
    ],
    priceRange: 'Pricing varies with crawl space size, access difficulty, and moisture severity. We provide a clear proposal after inspection.',
    faqs: [
      {
        question: 'Why does my house smell musty even if the living area looks dry?',
        answer: 'Air from a damp crawl space often travels upward. Addressing the crawl space frequently improves indoor air quality.',
      },
      {
        question: 'Do you install crawl space encapsulation?',
        answer: 'We can discuss encapsulation and vapor barrier options as part of a longer-term moisture management plan.',
      },
      {
        question: 'Is it safe to enter a wet crawl space myself?',
        answer: 'We recommend leaving confined, potentially contaminated spaces to trained technicians with proper equipment.',
      },
    ],
    metaDescription: 'Crawl space drying and cleanup in Belmont, NC. Remove moisture, improve air quality, and protect your foundation. Call +1 (877) 587-0125.',
  },
  {
    slug: 'carpet-water-extraction',
    title: 'Carpet Water Extraction in Belmont, NC',
    shortTitle: 'Carpet Water Extraction',
    description: 'Professional carpet and pad water extraction and drying services.',
    intro: 'Wet carpet and padding hold a surprising amount of water and can quickly develop odors or mold if not addressed. We extract water thoroughly, evaluate whether padding can be saved, and dry the carpet and subfloor so your Belmont floors are restored or prepared for replacement with minimal disruption.',
    process: [
      'Extraction of water from carpet and padding',
      'Assessment of padding condition and subfloor moisture',
      'Removal of padding when it cannot be adequately dried',
      'Drying of carpet, tack strips, and subfloor',
      'Cleaning and deodorizing of salvageable carpet',
    ],
    priceRange: 'Carpet extraction is often one of the more affordable services when limited to a single room. Larger areas or needed pad replacement increase the scope.',
    faqs: [
      {
        question: 'Can wet carpet be saved?',
        answer: 'Often yes, if extraction and drying begin quickly. Padding is more frequently replaced because it is harder to dry completely.',
      },
      {
        question: 'Will my carpet shrink after drying?',
        answer: 'Proper controlled drying minimizes shrinkage. We monitor the process carefully.',
      },
      {
        question: 'Do you move furniture during carpet drying?',
        answer: 'Yes. We carefully move and protect furniture as needed to access and dry the full floor area.',
      },
    ],
    metaDescription: 'Carpet water extraction in Belmont, NC. Thorough drying of carpet, pad, and subfloor after leaks or spills. Call +1 (877) 587-0125.',
  },
  {
    slug: 'hardwood-floor-drying',
    title: 'Hardwood Floor Water Damage in Belmont, NC',
    shortTitle: 'Hardwood Floor Drying',
    description: 'Specialized drying and restoration for water-damaged hardwood floors.',
    intro: 'Hardwood floors react quickly to moisture—cupping, crowning, and gaps can appear within days. Our approach prioritizes careful drying from both above and below when possible, giving the wood the best chance to return to its original shape before any sanding or refinishing is considered.',
    process: [
      'Moisture measurement of flooring and subfloor',
      'Extraction of any standing water',
      'Strategic drying using air movement and dehumidification',
      'Monitoring of moisture levels until equilibrium is reached',
      'Evaluation of whether refinishing or board replacement is needed',
    ],
    priceRange: 'Hardwood drying costs depend on the square footage and severity of cupping. Early intervention often reduces the need for extensive refinishing.',
    faqs: [
      {
        question: 'Can cupped hardwood floors be saved?',
        answer: 'Many can return close to normal with proper drying. Severe or prolonged wetting may require board replacement.',
      },
      {
        question: 'How long does hardwood drying take?',
        answer: 'It can take several days to a couple of weeks depending on the wood species, finish, and moisture levels. Patience yields better results.',
      },
      {
        question: 'Should I turn up the heat to dry floors faster?',
        answer: 'Controlled drying is safer. Excessive heat can cause additional stress. We manage temperature and humidity carefully.',
      },
    ],
    metaDescription: 'Hardwood floor water damage restoration in Belmont, NC. Careful drying to minimize cupping and damage. Call +1 (877) 587-0125.',
  },
  {
    slug: 'commercial-water-damage',
    title: 'Commercial Water Damage Restoration in Belmont, NC',
    shortTitle: 'Commercial Water Damage',
    description: 'Minimize downtime with professional commercial water damage services.',
    intro: 'Water damage in a commercial setting affects operations, inventory, and customer experience. We work efficiently around your business hours when possible, focusing on rapid extraction, drying, and clear communication so your Belmont business can resume normal activity as soon as it is safe.',
    process: [
      'Priority response and business-impact assessment',
      'Water extraction and protection of inventory or equipment',
      'Drying of affected zones with minimal disruption',
      'Documentation suitable for insurance and facility records',
      'Coordination of repairs to restore operational areas',
    ],
    priceRange: 'Commercial projects are scoped individually based on square footage, contents, and urgency. We provide detailed proposals for facility managers and owners.',
    faqs: [
      {
        question: 'Can you work after hours or on weekends?',
        answer: 'Yes. We often schedule work to reduce impact on customers and staff.',
      },
      {
        question: 'Do you handle multi-tenant or larger facilities?',
        answer: 'Yes. We scale equipment and crews as needed for larger commercial spaces.',
      },
      {
        question: 'Will you provide documentation for insurance?',
        answer: 'Yes. We document moisture readings, work performed, and progress photos to support claims.',
      },
    ],
    metaDescription: 'Commercial water damage restoration in Belmont, NC. Fast response to limit business interruption. Call +1 (877) 587-0125.',
  },
  {
    slug: 'storm-damage-cleanup',
    title: 'Storm Damage Water Cleanup in Belmont, NC',
    shortTitle: 'Storm Damage Cleanup',
    description: 'Post-storm water removal and drying for Belmont properties.',
    intro: 'Severe weather can drive rain into buildings through damaged roofs, windows, or flooding. After a storm in the Belmont area, we help property owners remove water, dry structures, and stabilize the interior so permanent repairs can proceed under better conditions.',
    process: [
      'Safety assessment of the property after the storm',
      'Temporary measures to limit further water entry',
      'Extraction of rainwater and drying of interior spaces',
      'Documentation of damage for insurance purposes',
      'Support during the transition to permanent repairs',
    ],
    priceRange: 'Storm-related water cleanup is priced according to the volume of water and areas affected. We work efficiently to control costs while protecting the structure.',
    faqs: [
      {
        question: 'Should I wait for the insurance adjuster before calling you?',
        answer: 'In many cases it is better to mitigate damage immediately. Take photos first, then call us. Most policies expect reasonable steps to prevent further loss.',
      },
      {
        question: 'Do you board up openings after storms?',
        answer: 'We can help with temporary protection measures or coordinate with partners who provide emergency board-up.',
      },
      {
        question: 'How soon after a storm can you arrive?',
        answer: 'We prioritize storm calls and respond as capacity allows. Call +1 (877) 587-0125 to get on the schedule quickly.',
      },
    ],
    metaDescription: 'Storm damage water cleanup in Belmont, NC. Rapid extraction and drying after severe weather. Call +1 (877) 587-0125.',
  },
  {
    slug: 'dehumidifier-rental-service',
    title: 'Dehumidifier & Drying Equipment in Belmont, NC',
    shortTitle: 'Drying Equipment',
    description: 'Professional-grade dehumidifiers and air movers for effective structural drying.',
    intro: 'Proper drying requires more than opening windows. We deploy commercial dehumidifiers and air movers calibrated to the size of the affected area and monitor progress until moisture levels are safe. This service is part of most restoration jobs and is also available when you need supplemental drying capacity.',
    process: [
      'Calculation of required air movement and dehumidification',
      'Placement of equipment for optimal airflow and extraction',
      'Daily or periodic moisture readings',
      'Adjustment of equipment as drying progresses',
      'Removal once target moisture levels are achieved',
    ],
    priceRange: 'Equipment use is typically included in full restoration projects. Standalone rental or monitoring is available at daily or weekly rates.',
    faqs: [
      {
        question: 'Why not just use household fans?',
        answer: 'Household fans move air but do not remove moisture from the air. Commercial dehumidifiers extract water so materials can dry fully.',
      },
      {
        question: 'How loud is the equipment?',
        answer: 'Air movers and dehumidifiers produce noticeable sound. We position them to balance effectiveness with reasonable comfort.',
      },
      {
        question: 'Do I need to stay home while equipment runs?',
        answer: 'Not necessarily. We can arrange access and check-ins that fit your schedule.',
      },
    ],
    metaDescription: 'Professional drying equipment and dehumidifiers in Belmont, NC. Effective structural drying after water damage. Call +1 (877) 587-0125.',
  },
  {
    slug: 'water-damage-insurance-claims',
    title: 'Water Damage Insurance Claim Support in Belmont, NC',
    shortTitle: 'Insurance Claim Support',
    description: 'Documentation and guidance to help with water damage insurance claims.',
    intro: 'Navigating an insurance claim after water damage can feel overwhelming. While we do not adjust claims or guarantee coverage, we provide thorough documentation—moisture readings, photos, and detailed scopes of work—that many Belmont homeowners and businesses find helpful when working with their insurance providers.',
    process: [
      'Detailed inspection and moisture documentation',
      'Clear photos of affected areas before and during work',
      'Itemized description of recommended and completed work',
      'Communication with adjusters when authorized by you',
      'Final summary of services for your records',
    ],
    priceRange: 'Documentation is included as part of our restoration services. There is no separate fee for standard claim-support materials.',
    faqs: [
      {
        question: 'Do you work directly with insurance companies?',
        answer: 'We work for you, the property owner. With your permission we can share documentation and speak with the adjuster about the scope of damage and repairs.',
      },
      {
        question: 'Will you bill insurance directly?',
        answer: 'Arrangements vary. Many clients prefer us to bill them and seek reimbursement; others request direct billing when the carrier allows it. We discuss options upfront.',
      },
      {
        question: 'What if my claim is denied?',
        answer: 'Coverage decisions rest with your insurer. We still complete agreed-upon work and can provide records that may support an appeal if you choose to pursue one.',
      },
    ],
    metaDescription: 'Water damage insurance claim documentation and support in Belmont, NC. Clear records for your claim. Call +1 (877) 587-0125.',
  },
  {
    slug: 'bathroom-water-damage',
    title: 'Bathroom Water Damage Repair in Belmont, NC',
    shortTitle: 'Bathroom Water Damage',
    description: 'Targeted restoration for bathroom leaks, overflows, and moisture issues.',
    intro: 'Bathrooms combine water sources with materials that do not always handle moisture well. From overflowing tubs to leaking supply lines behind walls, we address bathroom water damage in Belmont homes with careful extraction, drying of cabinets and subfloors, and practical repair recommendations.',
    process: [
      'Identification of the leak or overflow source',
      'Extraction of water from floors, cabinets, and nearby rooms',
      'Drying of vanity bases, flooring, and wall cavities',
      'Assessment of any mold risk in wet drywall or insulation',
      'Coordination of cosmetic repairs once the area is dry',
    ],
    priceRange: 'Bathroom projects are often contained and therefore more modest in cost when addressed promptly. Hidden damage behind walls can expand the scope.',
    faqs: [
      {
        question: 'My tub overflowed—how urgent is cleanup?',
        answer: 'Water can migrate under flooring and into adjacent rooms quickly. Prompt extraction limits the spread.',
      },
      {
        question: 'Can you dry inside bathroom cabinets?',
        answer: 'Yes. We open cabinets, remove contents if needed, and dry the interior and surrounding structure.',
      },
      {
        question: 'Will tile floors need to be replaced?',
        answer: 'Tile itself is usually fine; the concern is moisture underneath. We check the subfloor and only recommend replacement when necessary.',
      },
    ],
    metaDescription: 'Bathroom water damage repair in Belmont, NC. Extraction and drying after overflows and leaks. Call +1 (877) 587-0125.',
  },
  {
    slug: 'kitchen-water-damage',
    title: 'Kitchen Water Damage Restoration in Belmont, NC',
    shortTitle: 'Kitchen Water Damage',
    description: 'Cleanup and drying after kitchen sink, dishwasher, or supply line leaks.',
    intro: 'Kitchen water damage often involves cabinets, appliances, and flooring that see daily use. We extract water carefully, dry cabinetry from the inside out when possible, and help you decide what can be salvaged versus replaced so your Belmont kitchen returns to service efficiently.',
    process: [
      'Source identification and water extraction',
      'Removal of toe-kicks or limited cabinet access as needed',
      'Drying of cabinet boxes, flooring, and adjacent walls',
      'Cleaning of any residue or secondary damage',
      'Recommendations for repairs or cabinet replacement',
    ],
    priceRange: 'Kitchen restoration costs depend on how many cabinets and how much flooring were affected. Early drying often preserves more of the existing finishes.',
    faqs: [
      {
        question: 'Can water-damaged kitchen cabinets be saved?',
        answer: 'Particleboard and MDF are vulnerable; solid wood fares better. We assess each situation and dry thoroughly before recommending replacement.',
      },
      {
        question: 'Do you move appliances?',
        answer: 'Yes, when necessary to access and dry the full area. We take care to protect floors and connections.',
      },
      {
        question: 'How long before I can use my kitchen again?',
        answer: 'Many kitchens remain partially usable during drying. We work with you to keep essential functions available when possible.',
      },
    ],
    metaDescription: 'Kitchen water damage restoration in Belmont, NC. Cabinet and floor drying after leaks. Call +1 (877) 587-0125.',
  },
  {
    slug: 'attic-water-damage',
    title: 'Attic Water Damage Restoration in Belmont, NC',
    shortTitle: 'Attic Water Damage',
    description: 'Drying and repair of attic spaces affected by roof leaks or condensation.',
    intro: 'Attic water damage is easy to overlook until stains appear on ceilings below. We access the attic, remove wet insulation when required, dry framing, and address the moisture source so your Belmont home’s upper level stays protected and energy-efficient.',
    process: [
      'Safe attic access and moisture inspection',
      'Removal of saturated insulation as needed',
      'Drying of rafters, sheathing, and surrounding structure',
      'Treatment of any microbial growth',
      'Guidance on insulation replacement and ventilation',
    ],
    priceRange: 'Attic projects vary with access difficulty and the amount of insulation involved. We provide a clear scope after inspection.',
    faqs: [
      {
        question: 'Is wet attic insulation a problem?',
        answer: 'Yes. Wet insulation loses R-value and can support mold. It is usually best replaced after the structure is dry.',
      },
      {
        question: 'Can you tell if the leak is still active?',
        answer: 'We look for active dripping and elevated moisture. Permanent roof repair is still best handled by a roofer.',
      },
      {
        question: 'Will you replace the insulation?',
        answer: 'We can coordinate or perform insulation replacement once drying is complete, depending on the material and your preference.',
      },
    ],
    metaDescription: 'Attic water damage restoration in Belmont, NC. Insulation removal, drying, and moisture control. Call +1 (877) 587-0125.',
  },
  {
    slug: 'odor-removal-deodorization',
    title: 'Odor Removal & Deodorization in Belmont, NC',
    shortTitle: 'Odor Removal',
    description: 'Eliminate musty and water-related odors after drying and cleanup.',
    intro: 'Even after water is gone, musty or unpleasant odors can linger in carpets, drywall, and furnishings. Our deodorization process targets the sources of odor rather than simply masking them, helping Belmont homes and businesses feel fresh again after water damage events.',
    process: [
      'Identification of odor sources after structural drying',
      'Cleaning of affected materials and surfaces',
      'Application of appropriate deodorizing treatments',
      'Use of air scrubbers or hydroxyl generators when beneficial',
      'Final evaluation to confirm odor reduction',
    ],
    priceRange: 'Odor removal is often included in comprehensive restoration. Standalone deodorization is priced by the size of the area and severity of the odor.',
    faqs: [
      {
        question: 'Will the smell go away on its own after drying?',
        answer: 'Sometimes light odors fade, but stronger or entrenched smells usually need targeted treatment.',
      },
      {
        question: 'Are the products you use safe for pets and children?',
        answer: 'We select treatments appropriate for occupied spaces and discuss any temporary precautions with you.',
      },
      {
        question: 'Can you remove smoke or other non-water odors?',
        answer: 'Our primary focus is water-related odors. We can advise on other odor issues or refer you to specialists when appropriate.',
      },
    ],
    metaDescription: 'Odor removal and deodorization after water damage in Belmont, NC. Freshen your space professionally. Call +1 (877) 587-0125.',
  },
];
