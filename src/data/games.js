import ballaImg from '../assets/balla.jpg';
import ffImg from '../assets/ff.jpg';

// Game Profiles and Projects Data
export const gamesData = [
  {
    id: "balla",
    title: "BALLA",
    subtitle: "Brawlhalla Arena",
    category: "GAMING / COMPETITIVE",
    description: "Archiving gold and playing ranked matches.",
    bestEloRating: "LORD",
    technologySkill: "My playing skill",
    externalLink: "https://www.brawlhalla.com/",
    buttonText: "VISIT BALLA",
    badge: "RANKED ARENA",
    accentColor: "#00f2fe",
    image: ballaImg,
    specs: [
      { label: "BEST ELO RATING", value: "LORD" },
      { label: "CORE FOCUS", value: "Ranked Gold Grind" },
      { label: "TECH / SKILL", value: "My playing skill" },
      { label: "STATUS", value: "ACTIVE QUEUE" }
    ],
    placeholderText: "BALLA SCREENSHOT / GAMEPLAY CAPTURE",
    placeholderSubtext: "Upload your high-tier Brawlhalla moments & rank screens here"
  },
  {
    id: "free-fire",
    title: "FREE FIRE",
    subtitle: "Battle Royale Protocol",
    category: "GAMING / COMPETITIVE",
    description: "5 years old player, got some free and paid emotes, and secured 4th place at Tirupattur in M4A1.",
    uid: "3511572258",
    technologySkill: "My playing skill",
    copyUidButton: true,
    badge: "5-YEAR VETERAN",
    accentColor: "#ff007f",
    image: ffImg,
    specs: [
      { label: "PLAYER UID", value: "3511572258" },
      { label: "VETERAN SERVICE", value: "5 Years" },
      { label: "REGIONAL PLACEMENT", value: "4th Place // Tirupattur (M4A1)" },
      { label: "TECH / SKILL", value: "My playing skill" }
    ],
    placeholderText: "FREE FIRE SCREENSHOT / PROFILE CAPTURE",
    placeholderSubtext: "Upload your lobby profile, badge showcase & emote reels here"
  }
];
