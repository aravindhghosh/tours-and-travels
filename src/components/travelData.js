import React from 'react';
import { Star, Users, MapPin } from 'lucide-react';

export const FLEET_DATA = [
  {
    id: 1,
    name: "Chevrolet Tavera",
    type: "SUV",
    capacity: "7-9 Seater",
    description: "Perfect for small families. Comfortable seating with ample luggage space.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600" // Placeholder
  },
  {
    id: 2,
    name: "Force Traveller (2 Available)",
    type: "Van",
    capacity: "12-17 Seater",
    description: "Ideal for large groups and devotional trips. High roof and spacious interiors.",
    image: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&q=80&w=600" // Placeholder
  },
  {
    id: 3,
    name: "Mini Van",
    type: "Van",
    capacity: "5-7 Seater",
    description: "Budget-friendly option for solo travelers or small groups.",
    image: "https://images.unsplash.com/photo-1609520505218-7421da356d80?auto=format&fit=crop&q=80&w=600" // Placeholder
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
  }
];