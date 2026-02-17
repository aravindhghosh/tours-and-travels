import React from 'react';
import { Star, Users, MapPin, ShieldCheck, Clock, HeartHandshake, BadgeIndianRupee, Heart, Shield, Briefcase, GraduationCap, Plane, Mountain, Flame, Landmark, Sun, Camera } from 'lucide-react';

import bgLight from '../assets/images/bg_hero/bg_hero_lighttheme.png';
import bgDark from '../assets/images/bg_hero/bg_hero_darktheme.png';

export const COMPANY_INFO = {
  name: "Natarajan Tours and Travels",
  shortName: "Natarajan",
  copyrightText: "Safe & Secure Journeys."
};

export const HERO_CONTENT = {
  title: "Your Journey, Our Responsibility",
  subtitle: "Specializing in Sabarimala, Palani, and Family Tours across South India.",
  ctaText: "Plan Your Trip"
};

export const HERO_BACKGROUNDS = {
  light: bgLight,
  dark: bgDark
};

export const CONTACT_INFO = {
  primaryPhone: "+91 98765 43210",
  secondaryPhone: "+91 98765 43211",
  whatsapp: "+91 98765 43210",
  availability: "Available 24/7",
  title: "Get in Touch",
  subtitle: "Ready for your spiritual journey or family vacation? Call us today."
};

export const SOCIAL_LINKS = {
  facebook: "#facebook",
  instagram: "#instagram"
};

export const TRIP_TYPES = [
  "Sabarimala / Devotional",
  "Family Trip",
  "Solo / Other",
  "Package Tour"
];

export const FLEET_DATA = [
  {
    id: 1,
    name: "Tata 407 Coach (2 Available)",
    type: "Coach",
    capacity: "21 Seater",
    description: "Push back seats, Surround Home Theatre, DJ Lighting. Luxury travel for large groups.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600" // Placeholder
  },
  {
    id: 2,
    name: "Tempo Traveller",
    type: "Van",
    capacity: "14 Seater",
    description: "Push back seats for maximum comfort on long journeys.",
    image: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&q=80&w=600" // Placeholder
  },
  {
    id: 3,
    name: "Chevrolet Tavera",
    type: "SUV",
    capacity: "9 Seater",
    description: "Comfortable seating for families. Great for hill stations.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600" // Placeholder
  },
  {
    id: 4,
    name: "Mahindra Van",
    type: "Van",
    capacity: "15 Seater",
    description: "Spacious and reliable for group tours.",
    image: "https://images.unsplash.com/photo-1609520505218-7421da356d80?auto=format&fit=crop&q=80&w=600" // Placeholder
  },
  {
    id: 5,
    name: "Swift",
    type: "Car",
    capacity: "4 Seater",
    description: "Compact and economical for small families.",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=600" // Placeholder
  }
];

export const SERVICES_DATA = [
  {
    title: "Devotional Trips",
    desc: "Specialized packages for Palani, Sabarimala, Tirupati, and local temple tours.",
    icon: <Star className="icon-gold" />
  },
  {
    title: "Family Vacations",
    desc: "Safe and relaxed trips for the whole family with flexible stops and itineraries.",
    icon: <Users className="icon-blue" />
  },
  {
    title: "Solo & Custom Trips",
    desc: "Rent a vehicle for your personal adventure. You decide the destination.",
    icon: <MapPin className="icon-green" />
  },
  {
    title: "Marriage & Events",
    desc: "Specialized support for weddings, baby showers (Valaikappu), and family gatherings.",
    icon: <Heart className="icon-gold" />
  },
  {
    title: "Corporate Trips",
    desc: "Professional transport services for corporate events, team outings, and staff pickup/drop.",
    icon: <Briefcase className="icon-blue" />
  },
  {
    title: "Educational Tours",
    desc: "Safe and fun excursions for schools and colleges with experienced drivers.",
    icon: <GraduationCap className="icon-gold" />
  },
  {
    title: "Airport Transfers",
    desc: "On-time pickup and drop services for airports to ensure stress-free travel.",
    icon: <Plane className="icon-green" />
  },
  {
    title: "Hill Station Packages",
    desc: "Enjoy the cool breeze of Ooty, Kodaikanal, and Munnar with our expert hill drivers.",
    icon: <Mountain className="icon-blue" />
  }
];

export const PACKAGES_DATA = [
  {
    id: 1,
    title: "Sabarimala Yatra",
    duration: "3 Days / 2 Nights",
    price: "₹4,500 per person",
    description: "Complete pilgrimage package during Mandala/Makaravilakku season with experienced gurus.",
    details: [
      "Day 1: Departure from Chennai, Halt at Erumeli.",
      "Day 2: Pamba, Sannidhanam Darshan, Return to Pamba.",
      "Day 3: Return journey with stops at temples."
    ],
    includes: ["Vegetarian Food", "Accommodation", "Guru Dakshina"],
    icon: <Flame className="icon-gold" />
  },
  {
    id: 2,
    title: "Palani & Murugan Temples",
    duration: "2 Days / 1 Night",
    price: "₹3,000 per person",
    description: "Darshan at Palani and nearby Arupadai Veedu temples.",
    details: [
      "Day 1: Palani Hill Temple Darshan, Stay at Palani.",
      "Day 2: Visit Thiruparankundram and Pazhamudircholai."
    ],
    includes: ["Travel", "Accommodation", "Special Darshan Ticket Assistance"],
    icon: <Mountain className="icon-blue" />
  },
  {
    id: 3,
    title: "Tirupati Balaji Divya Darshan",
    duration: "2 Days / 1 Night",
    price: "₹3,500 per person",
    description: "Hassle-free trip to Tirumala with assistance for darshan tickets.",
    details: [
      "Day 1: Travel to Tirupati, Alipiri, Stay.",
      "Day 2: Early morning Darshan, Laddu Prasadam, Return."
    ],
    includes: ["AC Transport", "Accommodation", "Guide"],
    icon: <Landmark className="icon-gold" />
  },
  {
    id: 4,
    title: "Honeymoon Special (Ooty/Kodai)",
    duration: "4 Days / 3 Nights",
    price: "₹12,000 per couple",
    description: "Romantic getaway to hill stations with sightseeing and private vehicle.",
    details: [
      "Day 1: Pickup and transfer to Hill Station.",
      "Day 2: Local Sightseeing (Gardens, Lake).",
      "Day 3: Viewpoints and Leisure.",
      "Day 4: Drop back."
    ],
    includes: ["Private Cab", "Honeymoon Suite", "Breakfast"],
    icon: <Heart className="icon-gold" />
  },
  {
    id: 5,
    title: "Rameswaram & Kanyakumari",
    duration: "3 Days / 2 Nights",
    price: "₹5,500 per person",
    description: "Spiritual and sightseeing tour covering the southern tip of India.",
    details: [
      "Day 1: Rameswaram Temple & Dhanushkodi.",
      "Day 2: Travel to Kanyakumari, Sunset View.",
      "Day 3: Vivekananda Rock Memorial, Return."
    ],
    includes: ["Transport", "Hotel Stay", "Entry Tickets"],
    icon: <Sun className="icon-gold" />
  },
  {
    id: 6,
    title: "Kerala Leisure Tour",
    duration: "5 Days / 4 Nights",
    price: "₹15,000 per person",
    description: "Munnar, Thekkady, and Alleppey houseboat experience.",
    details: [
      "Day 1: Munnar Arrival.",
      "Day 2: Munnar Sightseeing.",
      "Day 3: Thekkady Wildlife.",
      "Day 4: Alleppey Houseboat.",
      "Day 5: Departure."
    ],
    includes: ["AC Vehicle", "Houseboat Stay", "All Meals in Houseboat"],
    icon: <Camera className="icon-green" />
  }
];

export const FEATURES_DATA = [
  {
    id: 1,
    title: "Experienced Drivers",
    desc: "Our drivers are well-versed with all routes and ensure a safe journey.",
    icon: <ShieldCheck className="icon-blue" />
  },
  {
    id: 2,
    title: "Clean & Hygienic",
    desc: "All vehicles are deeply cleaned and sanitized before every trip.",
    icon: <HeartHandshake className="icon-gold" />
  },
  {
    id: 3,
    title: "24/7 Support",
    desc: "We are available round the clock to assist you with your travel needs.",
    icon: <Clock className="icon-blue" />
  },
  {
    id: 4,
    title: "Transparent Billing",
    desc: "No hidden charges. What you see is what you pay.",
    icon: <BadgeIndianRupee className="icon-green" />
  },
  {
    id: 5,
    title: "Safe for Families",
    desc: "We ensure a secure environment for women and children with verified drivers.",
    icon: <Shield className="icon-green" />
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Chennai",
    text: "Excellent service for our Sabarimala trip. The driver was very experienced and the vehicle was clean.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sundar",
    location: "Madurai",
    text: "We booked the Force Traveller for a family wedding. Very spacious and comfortable journey.",
    rating: 5
  }
];

export const PREVIOUS_TOURS_DATA = [
  {
    id: 1,
    title: "Sabarimala Yatra (Lord Ayyappan)",
    description: "A divine journey to the abode of Lord Ayyappan. We have successfully conducted numerous trips during the Mandala season.",
    image: "https://images.unsplash.com/photo-1606210122158-eeb10e0823bf?q=80&w=600&auto=format&fit=crop", // Placeholder representing spiritual lamp/temple
    location: "Sabarimala, Kerala"
  },
  {
    id: 2,
    title: "Palani Murugan Temple",
    description: "Pilgrimage to one of the six abodes of Lord Murugan. Experience the divine grace of Dandayudhapani Swami.",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=600&auto=format&fit=crop", // Placeholder representing temple architecture
    location: "Palani, Tamil Nadu"
  }
];