import type { TourPackage } from '../types/travel';

export const EXPERIENCE_PILLARS = [
  {
    number: '01',
    title: 'Ancient Cities & Heritage',
    description: 'Ascend Sigiriya Lion Rock, explore Polonnaruwa Vatadage & Gal Vihara, and tour Dambulla Cave Temple.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.15_a900dab5.jpeg',
    alt: 'Gal Vihara seated granite Buddha statue in Polonnaruwa, Sri Lanka',
  },
  {
    number: '02',
    title: 'Leopard & Elephant Safaris',
    description: 'Track Sri Lankan leopards, sloth bears, golden jackals, and affectionate wild elephant herds.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.15__1__021559e6.jpeg',
    alt: 'Two Sri Lankan elephants greeting trunk-to-trunk in tranquil river waters',
  },
  {
    number: '03',
    title: 'Sri Lankan Highlands',
    description: 'Ride the blue train across Ella Nine Arch Bridge, walk Ceylon tea hills, and visit Kandy.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.15__2__5c298f5e.jpeg',
    alt: 'Blue Sri Lankan highland train crossing Nine Arch Bridge in Ella',
  },
  {
    number: '04',
    title: 'Historic Coast & North',
    description: 'Stroll Galle Dutch Fort’s lighthouse ramparts and travel north to Jaffna’s Nallur Kovil.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.12__1__33e7024d.jpeg',
    alt: 'Galle Dutch Fort Lighthouse framed by swaying palms on Sri Lanka southern coast',
  },
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'tour-cultural-triangle',
    slug: 'cultural-triangle-sigiriya-expedition',
    title: 'Cultural Triangle & Ancient Kingdoms',
    subtitle: 'Sigiriya, Polonnaruwa Vatadage, Gal Vihara & Dambulla Cave Temple',
    category: 'Cultural Heritage',
    region: 'Sigiriya · Polonnaruwa · Dambulla · Habarana',
    durationDays: 5,
    pace: 'Balanced Private Touring',
    heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.12.08_26838331.jpeg',
    heroAlt: 'Sigiriya Lion Rock Fortress rising over Sri Lankan wetlands',
    galleryImages: [
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.12.08_26838331.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.11_c35a5573.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.15_a900dab5.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.14__1__feb0adc4.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.12_6c8cdeb7.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.11__2__7453ea39.jpeg',
    ],
    summary:
      'Step into over two millennia of Sri Lankan royal heritage. Climb the fifth-century citadel of Sigiriya, admire the gilded cave shrines of Dambulla, walk the Vatadage and Gal Vihara granite Buddhas of Polonnaruwa, and ride a traditional bullock cart through sunlit rural villages.',
    highlights: [
      'Early morning private ascent of UNESCO-listed Sigiriya Lion Rock Fortress',
      'Guided exploration of Polonnaruwa Vatadage, Gal Vihara, Satmahal Prasada & Sandakada Pahana moonstones',
      'Dambulla Royal Cave Temple gilded Buddha sanctuary tour',
      'Authentic Habarana village immersion with bullock cart and local dining',
    ],
    included: [
      'Private air-conditioned luxury vehicle with English-speaking chauffeur-guide',
      'Handpicked boutique heritage hotels with daily breakfast',
      'Cultural village experience & traditional Sri Lankan lunch',
      'Dedicated 24/7 WhatsApp trip concierge throughout your stay',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Dambulla Royal Cave Temple',
        location: 'Colombo / Dambulla',
        description:
          'Meet your K & O Vacations chauffeur-guide and travel inland to Dambulla, exploring the five rock-cut cave sanctuaries adorned with painted murals and gilded Buddha statues.',
      },
      {
        day: 2,
        title: 'Sigiriya Lion Rock & Habarana Bullock Cart Trail',
        location: 'Sigiriya & Habarana',
        description:
          'Ascend Sigiriya Fortress in the cool morning light to admire its frescoes and Lion’s Paw terrace. In the afternoon, traverse village lanes by bullock cart and dine with local hosts.',
      },
      {
        day: 3,
        title: 'Medieval Capital of Polonnaruwa',
        location: 'Polonnaruwa Ancient City',
        description:
          'Walk through the circular Vatadage relic house, the seven-tiered Satmahal Prasada pyramid, carved Sandakada Pahana moonstones, and the serene Gal Vihara granite Buddhas.',
      },
      {
        day: 4,
        title: 'Wild Elephant Gathering & Temple Heritage',
        location: 'Minneriya / Matale',
        description:
          'Visit ornate highland kovils and embark on an afternoon 4x4 safari along dry-zone tank shores where wild elephant herds gather.',
      },
      {
        day: 5,
        title: 'Spice Gardens & Return Transfer',
        location: 'Matale / Departure or Next Destination',
        description:
          'Enjoy a leisurely morning among fragrant cinnamon and cardamom estates before continuing to Kandy or Colombo.',
      },
    ],
    featured: true,
  },
  {
    id: 'tour-wild-leopard-safari',
    slug: 'leopard-sloth-bear-wild-safari',
    title: 'Big Three Wilderness & Leopard Safari',
    subtitle: 'Leopards, Sloth Bears, Wild Elephants & Golden Jackals',
    category: 'Wildlife Safaris',
    region: 'Yala · Wilpattu · Udawalawe',
    durationDays: 6,
    pace: 'Dawn & Dusk Game Drives',
    heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.10.25_a0828437.jpeg',
    heroAlt: 'Sri Lankan leopard crossing a dusty red safari road',
    galleryImages: [
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.10.25_a0828437.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.15__1__021559e6.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.18.51_0e0ffdfe.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.08.11_9a70ccc3.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.18.27_db8e5adc.jpeg',
    ],
    summary:
      'Crafted for wildlife enthusiasts and photographers, this expedition pairs Sri Lanka’s premier dry-zone national parks—tracking elusive Sri Lankan leopards, foraging sloth bears, golden jackal families, and wild elephants.',
    highlights: [
      'Private 4x4 safari jeeps with experienced wildlife spotters',
      'Dual-park tracking across Wilpattu’s natural lakes and Yala’s coastal scrub',
      'Prime morning sightings of Sri Lankan sloth bears and golden jackals',
      'Wild elephant river sanctuary & corridor observation near Udawalawe',
    ],
    included: [
      'Private 4x4 safari vehicles with open photography-friendly seating',
      'Chauffeured luxury transfers between national parks',
      'Eco-luxury safari lodges bordering park buffer zones',
      'Chilled refreshments and packed field breakfasts for dawn drives',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Northwestern Wilderness Arrival',
        location: 'Wilpattu Buffer Zone',
        description:
          'Transfer north from Colombo or Athurugiriya to your tranquil forest lodge on the fringe of Wilpattu National Park.',
      },
      {
        day: 2,
        title: 'Full-Day Wilpattu Leopard & Sloth Bear Expedition',
        location: 'Wilpattu National Park',
        description:
          'Enter at first light to explore sand-rimmed villu lakes where leopards patrol and sloth bears forage through dry woodland.',
      },
      {
        day: 3,
        title: 'Journey South Through Dry-Zone Elephant Corridors',
        location: 'Udawalawe / Southern Plains',
        description:
          'Cross the central plains with scenic stops, arriving in southern Sri Lanka in time for golden-hour elephant sightings along quiet forest roads and rivers.',
      },
      {
        day: 4,
        title: 'Yala Dawn & Dusk Leopard Drives',
        location: 'Yala National Park',
        description:
          'Two dedicated game drives through Block 1 and coastal clearings—famous for dense leopard territory, jackal packs, and wild peacocks.',
      },
      {
        day: 5,
        title: 'Wetland & Lagoon Safari',
        location: 'Bundala & Southern Lagoons',
        description:
          'Observe painted storks, coastal waders, and estuarine wildlife in serene brackish lagoons away from busy tracks.',
      },
      {
        day: 6,
        title: 'Coastal Leisure & Departure',
        location: 'Southern Coast / Colombo',
        description:
          'Unwind beside the Indian Ocean before your private transfer to the airport or your next Sri Lankan destination.',
      },
    ],
    featured: true,
  },
  {
    id: 'tour-highlands-adams-peak',
    slug: 'highlands-sacred-peak-botanical-retreat',
    title: 'Misty Highlands, Ella Train & Kandy',
    subtitle: 'Nine Arch Bridge, Tea Estates, Temple of the Tooth & Sri Pada',
    category: 'Nature & Highlands',
    region: 'Kandy · Peradeniya · Hatton · Ella',
    durationDays: 5,
    pace: 'Scenic Nature & Rail',
    heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.15__2__5c298f5e.jpeg',
    heroAlt: 'Blue Sri Lankan highland train crossing stone Nine Arch Bridge in Ella',
    galleryImages: [
      '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.15__2__5c298f5e.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.13_5a5ed731.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.11__1__73466e10.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.14_a5dcf860.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.14__2__8a37fdc1.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.42.29_1621b5b5.jpeg',
    ],
    summary:
      'Breathe in cool mountain air across Sri Lanka’s emerald central highlands. Visit Kandy’s Sacred Temple of the Tooth, wander Peradeniya Botanical Gardens, ride the scenic mountain railway across Ella’s Nine Arch Bridge, and admire terraced tea estates.',
    highlights: [
      'Reserved scenic train journey and viewpoint walk at Ella Nine Arch Bridge',
      'Private guided visit to Kandy’s Temple of the Sacred Tooth Relic & Peradeniya Gardens',
      'Emerald Ceylon tea estate walks with local tea pluckers and factory tastings',
      "Hilltop sunset stupas and views toward sacred Sri Pada (Adam's Peak)",
    ],
    included: [
      'Chauffeur-driven mountain-ready SUV or luxury van',
      'Reserved scenic hill-country train tickets',
      'Boutique hill-country bungalow & Kandy heritage hotel stays',
      'Curated tea-estate tasting and botanical garden entry coordination',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Royal City of Kandy & Peradeniya Gardens',
        location: 'Peradeniya & Kandy',
        description:
          'Stroll the vast green lawns of Peradeniya Royal Botanical Gardens beneath its famed Giant Javan Fig Tree, then visit the Temple of the Sacred Tooth Relic beside Kandy Lake.',
      },
      {
        day: 2,
        title: 'Hilltop Stupas & Tea Lake Passes',
        location: 'Ambuluwawa · Hatton · Nuwara Eliya',
        description:
          'Wind through terraced Ceylon tea estates beside serene mountain lakes and catch golden-hour clouds drifting past hilltop white stupas.',
      },
      {
        day: 3,
        title: 'Ceylon Tea Gardens & Scenic Highland Rail',
        location: 'Nanu Oya to Ella',
        description:
          'Meet tea estate pluckers in misty morning gardens before boarding the iconic blue highland train through cloud-draped ridges.',
      },
      {
        day: 4,
        title: 'Nine Arch Bridge & Ella Ridge Trails',
        location: 'Ella & Demodara',
        description:
          'Watch the morning express glide across the stone arches of Nine Arch Bridge before hiking Little Adam’s Peak.',
      },
      {
        day: 5,
        title: 'Descent to Southern Coast or Colombo',
        location: 'Colombo / Southern Coast',
        description:
          'Journey down from the misty peaks through waterfall valleys to your next destination.',
      },
    ],
    featured: true,
  },
  {
    id: 'tour-northern-jaffna',
    slug: 'northern-jaffna-heritage-odyssey',
    title: 'Northern Sri Lanka & Jaffna Odyssey',
    subtitle: 'Nallur Kandaswamy Kovil, Chemmani & Historic Jaffna',
    category: 'Northern Sri Lanka',
    region: 'Jaffna · Nallur · Chemmani · Northern Peninsula',
    durationDays: 4,
    pace: 'Cultural & Scenic Discovery',
    heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_18.39.33_e6f45f92.jpeg',
    heroAlt: 'Nallur Kandaswamy Kovil tower and striped temple wall in Jaffna',
    galleryImages: [
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_18.39.33_e6f45f92.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.42.27_bca4e435.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.42.30_cd68bfb8.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.11.43_691adbac.jpeg',
    ],
    summary:
      'Discover a distinctive side of the island far beyond standard tourist circuits. Experience the spiritual grandeur of Nallur Kandaswamy Kovil, pass beneath Chemmani’s golden ceremonial archways, and stroll the historic ramparts of Jaffna.',
    highlights: [
      'Sacred evening pooja visit to iconic Nallur Kandaswamy Kovil',
      'Architectural tour of Jaffna Clock Tower, Jaffna Fort, and Chemmani Road gateway',
      'Authentic Northern Sri Lankan cuisine, palmyra groves, and lagoon causeways',
      'Guided island-hopping across quiet northern coastal stretches',
    ],
    included: [
      'Private long-distance luxury vehicle & local northern specialist guide',
      'Curated Jaffna heritage hotel accommodation',
      'Guided temple & fort walking circuit',
      'Seamless route planning with custom stops along the northern highway',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Northward Journey & Chemmani Ceremonial Gateway',
        location: 'A9 Highway · Chemmani · Jaffna',
        description:
          'Drive north past palmyra-lined causeways and enter Jaffna beneath the gilded carvings of the Chemmani Road archway.',
      },
      {
        day: 2,
        title: 'Nallur Kandaswamy Kovil & Jaffna Landmarks',
        location: 'Nallur & Jaffna City',
        description:
          'Witness morning rituals at the striking red-and-white walled Nallur Kandaswamy Kovil, then explore the Jaffna Clock Tower, royal statues, and star-shaped Jaffna Fort.',
      },
      {
        day: 3,
        title: 'Peninsula Lagoons & Island Heritage',
        location: 'Northern Islands & Coastal Causeways',
        description:
          'Cross turquoise shallow lagoons to remote northern temples, quiet beaches, and traditional fishing communities.',
      },
      {
        day: 4,
        title: 'Northern Markets & Southward Return',
        location: 'Jaffna / Anuradhapura / Colombo',
        description:
          'Sample fresh Jaffna mangoes and palmyra jaggery before traveling south with optional Cultural Triangle stops.',
      },
    ],
    featured: true,
  },
  {
    id: 'tour-southern-coast-village',
    slug: 'southern-coast-village-traditions',
    title: 'Galle Fort, Southern Coast & Colombo',
    subtitle: 'Galle Lighthouse, Coral Ramparts, Stilt Fishermen & Sunset Bays',
    category: 'Coastal & Village',
    region: 'Colombo · Galle Fort · Koggala · Weligama',
    durationDays: 4,
    pace: 'Relaxed Coastal Luxury',
    heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.12__1__33e7024d.jpeg',
    heroAlt: 'Galle Fort Lighthouse framed by coconut palms on the southern Sri Lankan coast',
    galleryImages: [
      '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.12__1__33e7024d.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.12__2__8cb26856.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.42.26_0dbbae67.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-20_at_19.28.13__1__d2343757.jpeg',
    ],
    summary:
      'Pair Sri Lanka’s sun-drenched southern shoreline with enduring coastal heritage. Walk along Galle Dutch Fort’s iconic lighthouse and ocean ramparts, meet traditional stilt fishermen at Koggala, and catch Colombo’s Lotus Tower sunset.',
    highlights: [
      'Guided heritage walk across Galle Dutch Fort Lighthouse & coral ramparts',
      'Authentic coastal stilt-fishing experience at Koggala & Weligama bays',
      'Colombo Lotus Tower skyline & coastal railway sunset stop',
      'Seamless private transfers from Colombo or Athurugiriya',
    ],
    included: [
      'Private chauffeur-driven coastal touring',
      'Beachfront & heritage fort boutique accommodation',
      'Curated stilt-fishing & local coastal craft visits',
      'Direct WhatsApp concierge assistance for dining and excursions',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Colombo Skyline & Coastal Drive to Galle',
        location: 'Colombo & Galle Fort',
        description:
          'Pass Colombo’s Lotus Tower skyline and glide south down the expressway to check into historic Galle Dutch Fort in time for rampart sunset views.',
      },
      {
        day: 2,
        title: 'Galle Lighthouse & Stilt Fishermen Bays',
        location: 'Galle · Koggala · Weligama',
        description:
          'Photograph Galle’s palm-framed white lighthouse before continuing along turquoise surf to meet Sri Lanka’s iconic coastal stilt fishermen.',
      },
      {
        day: 3,
        title: 'Lagoon Boats & Coral Coast Leisure',
        location: 'Southern Lagoons & Beaches',
        description:
          'Explore tranquil mangrove lagoons and relax beside warm Indian Ocean coves.',
      },
      {
        day: 4,
        title: 'Leisurely Morning & Return',
        location: 'Colombo / Airport',
        description:
          'Enjoy one final morning along Galle’s cobblestone lanes before your private return transfer.',
      },
    ],
    featured: true,
  },
  {
    id: 'tour-avian-birding',
    slug: 'avian-wilderness-birding-trail',
    title: 'Endemic Avian & Photography Expedition',
    subtitle: 'Bee-Eaters, Hawk-Eagles, Painted Storks & National Bird Trails',
    category: 'Bird Watching',
    region: 'Sinharaja · Bundala · Kumana · Wet & Dry Wetlands',
    durationDays: 5,
    pace: 'Photographic Field Pace',
    heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.19.17_9dd7b8cb.jpeg',
    heroAlt: 'Blue-tailed bee-eater holding a dragonfly on a branch in Sri Lanka',
    galleryImages: [
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.19.17_9dd7b8cb.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.19.36_c9cd0698.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.19.47_67190bd4.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.42.24_5a420b1c.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_18.52.21_26bf00b6.jpeg',
    ],
    summary:
      'Tailored for ornithologists and wildlife photographers seeking Sri Lanka’s rich avian diversity—from iridescent peacocks and endemic Sri Lankan junglefowl to raptors in the forest canopy and waders across coastal wetlands.',
    highlights: [
      'Spot the endemic Sri Lankan Junglefowl, national bird of the island',
      'Photograph Crested Changeable Hawk-Eagles and vibrant Bee-Eaters',
      'Quiet boat & jeep access across Bundala lagoons for Painted Storks',
      'Early morning hide and trail walks timed for soft natural light',
    ],
    included: [
      'Specialist birding guide & private transport across wet and dry habitats',
      'Eco-lodges situated inside prime avian corridors',
      'Flexible photography schedule prioritizing dawn and golden-hour light',
      'Custom packing and lens-prep guidance ahead of arrival',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Wetland Reserves & Canopy Raptors',
        location: 'Kitulgala / Sinharaja Fringe',
        description:
          'Arrive and head directly to rainforest edges to scan tall canopy branches for Changeable Hawk-Eagles and endemic forest flocks.',
      },
      {
        day: 2,
        title: 'Rainforest Endemics & Junglefowl Trails',
        location: 'Sinharaja Biosphere Reserve',
        description:
          'Guided morning walk along quiet forest trails spotting Sri Lankan Junglefowl, mixed-species feeding flocks, and vivid kingfishers.',
      },
      {
        day: 3,
        title: 'Dry Zone Scrub & Peafowl Plains',
        location: 'Tissamaharama Wetlands',
        description:
          'Transition to southern tanks where wild Indian peacocks display across open plains and bee-eaters hawk dragonflies from low perches.',
      },
      {
        day: 4,
        title: 'Bundala Lagoon Waders & Painted Storks',
        location: 'Bundala National Park',
        description:
          'Explore coastal saltpans and tranquil lagoons teeming with Painted Storks, ibises, and migratory shorebirds.',
      },
      {
        day: 5,
        title: 'Morning Wetland Walk & Departure',
        location: 'Southern Coast / Colombo',
        description:
          'Final dawn photography session before your private transfer back to Colombo.',
      },
    ],
  },
];
