import type { TourPackage } from '../types/travel';

export const EXPERIENCE_PILLARS = [
  {
    number: '01',
    title: 'Ancient Cities & Heritage',
    description: 'Ascend Sigiriya Lion Rock, explore Polonnaruwa ruins, and witness centuries-old temple artistry.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.12.08_26838331.jpeg',
    alt: 'Sigiriya Lion Rock Fortress surrounded by ancient gardens and water moats',
  },
  {
    number: '02',
    title: 'Leopard & Sloth Bear Safaris',
    description: 'Track Sri Lankan leopards, sloth bears, golden jackals, and wild elephant herds with veteran trackers.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.10.25_a0828437.jpeg',
    alt: 'Sri Lankan leopard crossing a red-earth national park trail',
  },
  {
    number: '03',
    title: 'Northern Sri Lanka Discovery',
    description: 'Journey north to Jaffna’s Nallur Kandaswamy Kovil, historic clock tower, and coastal peninsulas.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_18.39.33_e6f45f92.jpeg',
    alt: 'Nallur Kandaswamy Kovil in Jaffna, Northern Sri Lanka',
  },
  {
    number: '04',
    title: 'Highlands, Birds & Coast',
    description: 'From Sri Pada mist and Peradeniya gardens to southern stilt fishermen and endemic birding trails.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.19.17_9dd7b8cb.jpeg',
    alt: 'Blue-tailed bee-eater perched in Sri Lankan wetland reserve',
  },
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'tour-cultural-triangle',
    slug: 'cultural-triangle-sigiriya-expedition',
    title: 'Cultural Triangle & Ancient Kingdoms',
    subtitle: 'Sigiriya Rock Fortress, Polonnaruwa Ruins & Village Life',
    category: 'Cultural Heritage',
    region: 'Sigiriya · Polonnaruwa · Dambulla · Habarana',
    durationDays: 5,
    pace: 'Balanced Private Touring',
    heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.12.08_26838331.jpeg',
    heroAlt: 'Sigiriya Lion Rock Fortress rising over Sri Lankan wetlands',
    galleryImages: [
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.12.08_26838331.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.42.25_70c3edbb.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.07.44_bd8c7501.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.15.21_2c60cd62.jpeg',
    ],
    summary:
      'Step into over two millennia of Sri Lankan royal heritage. Climb the fifth-century citadel of Sigiriya at dawn, walk among the monumental brick shrines of Polonnaruwa, and ride a traditional bullock cart through sunlit rural villages.',
    highlights: [
      'Early morning private ascent of UNESCO-listed Sigiriya Lion Rock Fortress',
      'Guided exploration of Polonnaruwa Lankathilaka Image House and royal baths',
      'Authentic Habarana village immersion with bullock cart and canoe crossing',
      'Responsible elephant sanctuary visit and wild elephant corridor evening drive',
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
        title: 'Arrival & Pinnawala Elephant Encounter',
        location: 'Colombo / Pinnawala / Dambulla',
        description:
          'Meet your K & O Vacations chauffeur-guide and travel inland toward the Cultural Triangle, stopping to observe majestic Sri Lankan tuskers before settling into your Dambulla retreat.',
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
          'Walk through the grand brick pillars of Lankathilaka Image House, the Gal Vihara stone Buddhas, and the ancient Parakrama Samudra reservoir.',
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
      'Wild elephant corridor observation near Udawalawe & Lunugamvehera',
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
          'Cross the central plains with scenic stops, arriving in southern Sri Lanka in time for golden-hour elephant sightings along quiet forest roads.',
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
    id: 'tour-highlands-adams-peak',
    slug: 'highlands-sacred-peak-botanical-retreat',
    title: 'Misty Highlands, Gardens & Sacred Peak',
    subtitle: "Peradeniya Royal Gardens, Waterfalls & Sri Pada (Adam's Peak)",
    category: 'Nature & Highlands',
    region: 'Kandy · Peradeniya · Hatton · Hill Country',
    durationDays: 5,
    pace: 'Scenic Nature & Adventure',
    heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.42.28_f5da09a8.jpeg',
    heroAlt: "Sacred Sri Pada Adam's Peak shrouded in morning highland clouds",
    galleryImages: [
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.42.28_f5da09a8.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.42.29_1621b5b5.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.11.43_691adbac.jpeg',
    ],
    summary:
      'Breathe in cool mountain air across Sri Lanka’s emerald central highlands. Wander beneath the Giant Javan Fig Tree at Peradeniya Royal Botanical Gardens, chase cascading highland waterfalls, and trek toward sacred Sri Pada.',
    highlights: [
      'Private guided walk through Peradeniya Royal Botanical Gardens in Kandy',
      "Sunrise pilgrimage or scenic mountain ridge hike near Sri Pada (Adam's Peak)",
      'Misty tea plantation roads and cascading highland waterfall stops',
      'Hill-country cultural heritage sites and vibrant highland temples',
    ],
    included: [
      'Chauffeur-driven mountain-ready SUV or luxury van',
      'Boutique hill-country bungalow & Kandy heritage hotel stays',
      'Experienced trekking escort for Sri Pada ascent',
      'Curated tea-estate tasting and botanical garden entry coordination',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Royal City of Kandy & Peradeniya Gardens',
        location: 'Peradeniya & Kandy',
        description:
          'Stroll the vast green lawns of Peradeniya Royal Botanical Gardens beneath its famed Giant Javan Fig Tree before evening reflections by Kandy Lake.',
      },
      {
        day: 2,
        title: 'Tea Highlands & Waterfall Passes',
        location: 'Hatton & Maskeliya',
        description:
          'Wind through emerald tea estates and misty hairpins past cascading waterfalls toward the foothills of Sri Pada.',
      },
      {
        day: 3,
        title: "Sri Pada (Adam's Peak) Dawn Ascent",
        location: 'Nallathanniya / Sri Pada Summit',
        description:
          'Begin an unforgettable pre-dawn climb or sunrise valley viewpoint trek to watch clouds part around Sri Lanka’s most revered mountain pyramid.',
      },
      {
        day: 4,
        title: 'Highland Villages & Scenic Tea Estates',
        location: 'Nuwara Eliya / Ella Ridge',
        description:
          'Relax among colonial-era tea gardens, highland temples, and sweeping mountain panoramas.',
      },
      {
        day: 5,
        title: 'Descent to Coast or Colombo',
        location: 'Colombo / Southern Coast',
        description:
          'Journey down from the misty peaks through rubber and spice valleys to your next destination.',
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
  {
    id: 'tour-southern-coast-village',
    slug: 'southern-coast-village-traditions',
    title: 'Southern Coast & Island Traditions',
    subtitle: 'Stilt Fishermen, Turquoise Bays, Elephant Corridors & Galle',
    category: 'Coastal & Village',
    region: 'Weligama · Koggala · Galle · Southern Coast',
    durationDays: 4,
    pace: 'Relaxed Coastal Luxury',
    heroImage: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.42.26_0dbbae67.jpeg',
    heroAlt: 'Traditional stilt fishermen perched above turquoise ocean waves in southern Sri Lanka',
    galleryImages: [
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.42.26_0dbbae67.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_18.52.21_26bf00b6.jpeg',
      '/assets/aistudio/WhatsApp_Image_2026-11-13_at_13.07.44_bd8c7501.jpeg',
    ],
    summary:
      'Pair Sri Lanka’s sun-drenched southern shoreline with enduring local heritage. Meet iconic stilt fishermen along Koggala and Weligama bays, wander historic coastal ramparts, and enjoy unhurried Indian Ocean sunsets.',
    highlights: [
      'Authentic coastal stilt-fishing demonstration at Koggala & Weligama',
      'Sunset strolls along UNESCO-listed Galle Fort ramparts and boutique lanes',
      'Optional whale-watching or coastal turtle conservation experiences',
      'Seamless private transfers from Colombo or Athurugiriya',
    ],
    included: [
      'Private chauffeur-driven coastal touring',
      'Beachfront boutique accommodation with ocean views',
      'Curated stilt-fishing & local coastal craft visits',
      'Direct WhatsApp concierge assistance for dining and excursions',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival on the Southern Coast',
        location: 'Galle & Unawatuna',
        description:
          'Travel south via the coastal expressway to your oceanfront sanctuary and enjoy an evening walk along historic fort bastions.',
      },
      {
        day: 2,
        title: 'Stilt Fishermen & Turquoise Bays',
        location: 'Koggala & Weligama',
        description:
          'Witness Sri Lanka’s iconic stilt fishermen perched over rolling surf, try balancing on a coastal stilt, and unwind on golden palm-fringed beaches.',
      },
      {
        day: 3,
        title: 'Lagoon Boats & Rural Crafts',
        location: 'Southern Interior & Coast',
        description:
          'Glide across mangrove lagoons to cinnamon islands before an evening beachfront seafood dinner.',
      },
      {
        day: 4,
        title: 'Leisurely Morning & Return',
        location: 'Colombo / Airport',
        description:
          'Enjoy one final swim in warm Indian Ocean waters before your private return transfer.',
      },
    ],
  },
];
